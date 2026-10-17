import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Wind,
  Droplets,
  CloudRain,
  Flame,
  Info,
  ShieldCheck,
  Compass,
  AlertTriangle,
  Plane,
  Shovel,
  Sparkles,
} from 'lucide-react';
import {
  GridCell,
  CellType,
  WindDirection,
  WindSpeed,
  ClimateCondition,
  InterveneTool,
} from '../types';
import {
  playWaterSfx,
  playIgniteSfx,
  playClickSfx,
  playSuccessChime,
} from '../utils/audio';

const COLS = 20;
const ROWS = 13;

function createInitialGrid(scenario = 'default'): GridCell[] {
  const grid: GridCell[] = [];

  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      let type: CellType = 'forest';
      let fuel = 80;
      let moisture = 50;

      // Rivers / Water bodies: a winding natural river dividing the landscape
      if ((x === 9 || x === 10) && y > 2 && y < 11) {
        type = 'water';
        fuel = 0;
        moisture = 100;
      } else if (y === 6 && (x >= 8 && x <= 12)) {
        type = 'water';
        fuel = 0;
        moisture = 100;
      }
      // Peatland areas (Sumatra / Kalimantan peat dome) in lower left
      else if (x < 8 && y >= 7) {
        type = 'peatland';
        fuel = 95;
        moisture = 25;
      }
      // Dry grass shrubs in upper area
      else if (y < 4 && x < 9) {
        type = 'dry_grass';
        fuel = 55;
        moisture = 30;
      }
      // Village settlement in top-right
      else if (x >= 14 && x <= 17 && y >= 2 && y <= 4) {
        type = 'settlement';
        fuel = 45;
        moisture = 40;
      }

      // Scenarios customized setups
      if (scenario === 'village_threat') {
        if (x === 12 && y === 3) {
          type = 'burning';
          fuel = 70;
          moisture = 10;
        }
      } else if (scenario === 'peat_drought') {
        if (x < 12 && y >= 5) {
          type = 'peatland';
          fuel = 98;
          moisture = 10; // extremely dry peat
        }
        if (x === 2 && y === 9) {
          type = 'burning';
        }
      }

      grid.push({
        id: `${x}-${y}`,
        x,
        y,
        type,
        fuel,
        moisture,
        burningTicks: type === 'burning' ? 1 : 0,
        smokeLevel: type === 'burning' ? 2 : 0,
      });
    }
  }

  return grid;
}

export const WildfireSimulator: React.FC = () => {
  const [grid, setGrid] = useState<GridCell[]>(() => createInitialGrid());
  const [isRunning, setIsRunning] = useState(false);
  const [currentScenario, setCurrentScenario] = useState('default');
  const [windDirection, setWindDirection] = useState<WindDirection>('E');
  const [windSpeed, setWindSpeed] = useState<WindSpeed>('moderate');
  const [climate, setClimate] = useState<ClimateCondition>('drought');
  const [selectedTool, setSelectedTool] = useState<InterveneTool>('ignite');
  const [inspectedCell, setInspectedCell] = useState<GridCell | null>(null);

  // Statistics
  const [stats, setStats] = useState({
    burntCount: 0,
    burningCount: 0,
    healthyCount: 0,
    villageSafe: true,
    totalCarbonEmitted: 0,
  });

  const timerRef = useRef<number | null>(null);

  // Recalculate stats whenever grid updates
  useEffect(() => {
    let burnt = 0;
    let burning = 0;
    let healthy = 0;
    let villageIntact = true;

    grid.forEach((cell) => {
      if (cell.type === 'burnt') burnt++;
      else if (cell.type === 'burning') burning++;
      else if (cell.type === 'forest' || cell.type === 'peatland' || cell.type === 'dry_grass') healthy++;
      else if (cell.type === 'settlement' && (cell.burningTicks > 0 || cell.fuel === 0)) {
        villageIntact = false;
      }
    });

    setStats({
      burntCount: burnt,
      burningCount: burning,
      healthyCount: healthy,
      villageSafe: villageIntact,
      totalCarbonEmitted: Math.round(burnt * 42 + burning * 18),
    });
  }, [grid]);

  // Cellular Automata Step Engine
  const tickSimulation = useCallback(() => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((c) => ({ ...c }));
      const getCellAt = (x: number, y: number) => {
        if (x < 0 || x >= COLS || y < 0 || y >= ROWS) return null;
        return newGrid[y * COLS + x];
      };

      // Base spread modifier from climate
      const climateMultiplier =
        climate === 'drought' ? 1.4 : climate === 'normal' ? 1.0 : 0.5;

      // Wind offset vector
      let windDx = 0;
      let windDy = 0;
      if (windDirection === 'N') windDy = -1;
      else if (windDirection === 'S') windDy = 1;
      else if (windDirection === 'E') windDx = 1;
      else if (windDirection === 'W') windDx = -1;
      else if (windDirection === 'NE') { windDx = 1; windDy = -1; }
      else if (windDirection === 'SE') { windDx = 1; windDy = 1; }
      else if (windDirection === 'NW') { windDx = -1; windDy = -1; }
      else if (windDirection === 'SW') { windDx = -1; windDy = 1; }

      const speedBonus = windSpeed === 'strong' ? 0.45 : windSpeed === 'moderate' ? 0.25 : 0.1;

      // Identify currently burning cells
      const burningIndices: number[] = [];
      prevGrid.forEach((cell, idx) => {
        if (cell.type === 'burning') burningIndices.push(idx);
      });

      // Spread fire to neighbors
      burningIndices.forEach((idx) => {
        const burningCell = prevGrid[idx];
        const neighbors = [
          { x: burningCell.x + 1, y: burningCell.y },
          { x: burningCell.x - 1, y: burningCell.y },
          { x: burningCell.x, y: burningCell.y + 1 },
          { x: burningCell.x, y: burningCell.y - 1 },
          // Diagonals
          { x: burningCell.x + 1, y: burningCell.y + 1 },
          { x: burningCell.x - 1, y: burningCell.y - 1 },
          { x: burningCell.x + 1, y: burningCell.y - 1 },
          { x: burningCell.x - 1, y: burningCell.y + 1 },
        ];

        neighbors.forEach((pos) => {
          const target = getCellAt(pos.x, pos.y);
          if (
            target &&
            target.type !== 'burning' &&
            target.type !== 'burnt' &&
            target.type !== 'water' &&
            target.type !== 'firebreak'
          ) {
            // Check wind alignment
            const vecX = target.x - burningCell.x;
            const vecY = target.y - burningCell.y;
            const dot = vecX * windDx + vecY * windDy;
            let windFactor = 1.0;
            if (dot > 0) {
              windFactor += speedBonus * 2.5; // Fire pushed forward with wind!
            } else if (dot < 0) {
              windFactor -= speedBonus * 0.7; // Fire fighting against wind
            }

            // Flammability by type
            let baseChance = 0.22;
            if (target.type === 'dry_grass') baseChance = 0.45; // dry savanna catches fast
            if (target.type === 'peatland') baseChance = 0.32; // peat catches readily
            if (target.type === 'settlement') baseChance = 0.18; // wooden houses

            // Moisture resistance
            const moistureDefense = target.moisture / 100;
            const ignitionProb =
              (baseChance * climateMultiplier * windFactor) * (1.1 - moistureDefense);

            if (Math.random() < ignitionProb) {
              const wasPeat = target.type === 'peatland';
              target.type = 'burning';
              target.burningTicks = 1;
              target.smokeLevel = wasPeat ? 3 : 2;
            }
          }
        });

        // Burning cell consumption logic
        const currentTarget = newGrid[idx];
        currentTarget.burningTicks += 1;
        currentTarget.fuel = Math.max(0, currentTarget.fuel - 15);

        // Peatland burns longer (underground smoldering)
        const maxBurningTicks =
          currentTarget.type === 'peatland' ? 8 : currentTarget.type === 'forest' ? 5 : 3;

        if (currentTarget.burningTicks >= maxBurningTicks || currentTarget.fuel <= 0) {
          currentTarget.type = 'burnt';
          currentTarget.fuel = 0;
          currentTarget.smokeLevel = 1;
        }
      });

      return newGrid;
    });
  }, [climate, windDirection, windSpeed]);

  // Simulation run loop
  useEffect(() => {
    if (isRunning) {
      timerRef.current = window.setInterval(() => {
        tickSimulation();
      }, 700);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, tickSimulation]);

  const handleCellClick = (cell: GridCell) => {
    playClickSfx();

    if (selectedTool === 'inspect') {
      setInspectedCell(cell);
      return;
    }

    setGrid((prev) => {
      const updated = prev.map((c) => {
        if (c.id === cell.id) {
          if (selectedTool === 'ignite') {
            if (c.type !== 'water' && c.type !== 'firebreak' && c.type !== 'burnt') {
              playIgniteSfx();
              return { ...c, type: 'burning' as CellType, burningTicks: 1, smokeLevel: 2 };
            }
          } else if (selectedTool === 'firebreak') {
            // Cut down vegetation into bare mineral firebreak
            if (c.type !== 'water') {
              playClickSfx();
              return { ...c, type: 'firebreak' as CellType, fuel: 0, burningTicks: 0 };
            }
          } else if (selectedTool === 'firefighters') {
            // Manggala Agni hose drenching cell
            playWaterSfx();
            if (c.type === 'burning') {
              return { ...c, type: 'burnt' as CellType, fuel: 0, burningTicks: 0, moisture: 90 };
            }
            return { ...c, moisture: 95 };
          }
        }

        // Water bombing (affects 3x3 radius around clicked cell)
        if (selectedTool === 'water_bomb') {
          const dx = Math.abs(c.x - cell.x);
          const dy = Math.abs(c.y - cell.y);
          if (dx <= 1 && dy <= 1) {
            if (c.type === 'burning') {
              return { ...c, type: 'burnt' as CellType, fuel: 0, burningTicks: 0, moisture: 100 };
            }
            return { ...c, moisture: Math.min(100, c.moisture + 50) };
          }
        }

        return c;
      });

      if (selectedTool === 'water_bomb') {
        playWaterSfx();
      }

      return updated;
    });
  };

  // Cloud Seeding (TMC) across whole grid
  const applyCloudSeeding = () => {
    playWaterSfx();
    setGrid((prev) =>
      prev.map((c) => {
        if (c.type === 'burning') {
          // 60% chance to extinguish small fires
          if (Math.random() > 0.4) {
            return { ...c, type: 'burnt' as CellType, fuel: 0, burningTicks: 0, moisture: 90 };
          }
          return { ...c, moisture: 80 };
        }
        return { ...c, moisture: Math.min(100, c.moisture + 35) };
      })
    );
  };

  const handleReset = (scenario = 'default') => {
    playClickSfx();
    setIsRunning(false);
    setCurrentScenario(scenario);
    setGrid(createInitialGrid(scenario));
    setInspectedCell(null);
  };

  return (
    <section className="py-10 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-semibold text-emerald-800 mb-1">
              Simulasi Dinamika Alam · Model Seluler SMP
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Laboratorium Virtual: Penyebaran Api & Mitigasi
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Atur angin, kelembapan iklim, dan tipe lahan. Coba taktik pemadaman Manggala Agni untuk menyelamatkan hutan dan pemukiman warga!
            </p>
          </div>

          {/* Quick Scenario Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-lg shrink-0">
            <button
              onClick={() => handleReset('default')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                currentScenario === 'default' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hutan Tropis Normal
            </button>
            <button
              onClick={() => handleReset('village_threat')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                currentScenario === 'village_threat' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Misi: Selamatkan Desa
            </button>
            <button
              onClick={() => handleReset('peat_drought')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                currentScenario === 'peat_drought' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Krisis Gambut El Niño
            </button>
          </div>
        </div>

        {/* 2-Zone Sandbox: Stage (Canvas) + Deck (Controls) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Simulation Stage (Left Zone - 8 Cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm space-y-4">
            {/* Top Toolbar: Play/Pause, Step, Reset, Live Status */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    playClickSfx();
                    setIsRunning(!isRunning);
                  }}
                  className={`px-4 py-2 text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-sm transition-colors ${
                    isRunning
                      ? 'bg-amber-600 hover:bg-amber-700 text-white'
                      : 'bg-emerald-700 hover:bg-emerald-800 text-white'
                  }`}
                >
                  {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  <span>{isRunning ? 'Jeda Simulasi' : 'Jalankan Simulasi Api'}</span>
                </button>

                <button
                  onClick={() => {
                    playClickSfx();
                    tickSimulation();
                  }}
                  disabled={isRunning}
                  className="px-3 py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 transition-colors"
                  title="Maju 1 langkah waktu"
                >
                  Langkah Maju (+1)
                </button>

                <button
                  onClick={() => handleReset(currentScenario)}
                  className="p-2 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  title="Reset Peta"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Status summary */}
              <div className="flex items-center gap-4 text-xs font-mono tabular-nums">
                <div className="flex items-center gap-1 text-rose-700 font-bold">
                  <Flame className="w-4 h-4" />
                  <span>{stats.burningCount} Titik Terbakar</span>
                </div>
                <div className="flex items-center gap-1 text-slate-500">
                  <span>Abu: {stats.burntCount}</span>
                </div>
                <div className={`px-2 py-0.5 rounded font-sans text-xs font-semibold ${
                  stats.villageSafe ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
                }`}>
                  {stats.villageSafe ? 'Desa: Aman' : 'Desa: Terbakar!'}
                </div>
              </div>
            </div>

            {/* Interactive Grid Canvas */}
            <div className="overflow-x-auto select-none pb-1">
              <div
                className="grid gap-1 p-2 bg-slate-900/90 rounded-xl mx-auto"
                style={{
                  gridTemplateColumns: `repeat(${COLS}, minmax(18px, 1fr))`,
                  width: '100%',
                  maxWidth: '780px',
                }}
              >
                {grid.map((cell) => {
                  let cellStyle = 'bg-emerald-700';
                  let label = '🌲';

                  if (cell.type === 'water') {
                    cellStyle = 'bg-sky-500 text-white';
                    label = '💧';
                  } else if (cell.type === 'peatland') {
                    cellStyle = 'bg-amber-900 text-amber-200';
                    label = '🍂';
                  } else if (cell.type === 'dry_grass') {
                    cellStyle = 'bg-yellow-600 text-yellow-100';
                    label = '🌾';
                  } else if (cell.type === 'settlement') {
                    cellStyle = 'bg-amber-100 border border-amber-400';
                    label = '🏡';
                  } else if (cell.type === 'firebreak') {
                    cellStyle = 'bg-stone-400 border border-dashed border-stone-500';
                    label = '⛏️';
                  } else if (cell.type === 'burning') {
                    cellStyle = 'bg-rose-600 animate-pulse text-yellow-200';
                    label = '🔥';
                  } else if (cell.type === 'burnt') {
                    cellStyle = 'bg-stone-900 text-stone-500';
                    label = '⬛';
                  }

                  const isInspected = inspectedCell?.id === cell.id;

                  return (
                    <button
                      key={cell.id}
                      onClick={() => handleCellClick(cell)}
                      title={`Koordinat (${cell.x}, ${cell.y}) - Tipe: ${cell.type} - Bahan Bakar: ${cell.fuel}% - Lembap: ${cell.moisture}%`}
                      className={`aspect-square flex items-center justify-center text-xs rounded transition-transform duration-100 ${cellStyle} ${
                        isInspected ? 'ring-2 ring-yellow-400 scale-110 z-10' : 'hover:scale-105'
                      }`}
                    >
                      <span className="text-[10px] sm:text-xs select-none pointer-events-none">{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Grid Legend Bar */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] text-slate-600 pt-2 border-t border-slate-100">
              <span className="flex items-center gap-1">🌲 Hutan Lebat</span>
              <span className="flex items-center gap-1">🍂 Lahan Gambut</span>
              <span className="flex items-center gap-1">🌾 Semak Kering</span>
              <span className="flex items-center gap-1">💧 Sungai (Sekat Alami)</span>
              <span className="flex items-center gap-1">🏡 Pemukiman Warga</span>
              <span className="flex items-center gap-1">⛏️ Sekat Bakar</span>
              <span className="flex items-center gap-1">🔥 Sedang Terbakar</span>
              <span className="flex items-center gap-1">⬛ Abu / Arang</span>
            </div>

            {/* Inspected Cell Detail Box */}
            {inspectedCell && (
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
                <div className="flex items-center justify-between font-bold text-slate-800">
                  <span>Data Titik Sel: Koordinat ({inspectedCell.x}, {inspectedCell.y})</span>
                  <button onClick={() => setInspectedCell(null)} className="text-slate-400 hover:text-slate-600">
                    ✕ Tutup
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-600 pt-1">
                  <div>
                    Tipe Tutupan: <strong>{inspectedCell.type.toUpperCase()}</strong>
                  </div>
                  <div>
                    Massa Bahan Bakar: <strong>{inspectedCell.fuel}%</strong>
                  </div>
                  <div>
                    Kadar Kelembapan: <strong>{inspectedCell.moisture}%</strong>
                  </div>
                  <div>
                    Status: <strong>{inspectedCell.type === 'burning' ? '🔥 Terbakar' : 'Stabil'}</strong>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Control Deck (Right Zone - 4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Tools Box: Student Interventions */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Peralatan Jagawana & Siswa
              </h3>
              <p className="text-xs text-slate-600">
                Pilih alat di bawah, lalu klik sel pada peta untuk melakukan intervensi:
              </p>

              <div className="grid grid-cols-2 gap-2 pt-1">
                {/* Tool: Ignite */}
                <button
                  onClick={() => {
                    playClickSfx();
                    setSelectedTool('ignite');
                  }}
                  className={`p-2.5 rounded-xl border text-left flex items-start gap-2 text-xs transition-colors ${
                    selectedTool === 'ignite'
                      ? 'border-rose-400 bg-rose-50 text-rose-900 font-bold'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <Flame className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <div>Sulut Api</div>
                    <div className="text-[10px] text-slate-500 font-normal">Puntung rokok / petir</div>
                  </div>
                </button>

                {/* Tool: Water Bomb */}
                <button
                  onClick={() => {
                    playClickSfx();
                    setSelectedTool('water_bomb');
                  }}
                  className={`p-2.5 rounded-xl border text-left flex items-start gap-2 text-xs transition-colors ${
                    selectedTool === 'water_bomb'
                      ? 'border-blue-400 bg-blue-50 text-blue-900 font-bold'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <Plane className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div>Water Bombing</div>
                    <div className="text-[10px] text-slate-500 font-normal">Helikopter (Area 3x3)</div>
                  </div>
                </button>

                {/* Tool: Firebreak */}
                <button
                  onClick={() => {
                    playClickSfx();
                    setSelectedTool('firebreak');
                  }}
                  className={`p-2.5 rounded-xl border text-left flex items-start gap-2 text-xs transition-colors ${
                    selectedTool === 'firebreak'
                      ? 'border-amber-400 bg-amber-50 text-amber-900 font-bold'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <Shovel className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div>Sekat Bakar</div>
                    <div className="text-[10px] text-slate-500 font-normal">Gali tanah mineral steril</div>
                  </div>
                </button>

                {/* Tool: Manggala Agni Hose */}
                <button
                  onClick={() => {
                    playClickSfx();
                    setSelectedTool('firefighters');
                  }}
                  className={`p-2.5 rounded-xl border text-left flex items-start gap-2 text-xs transition-colors ${
                    selectedTool === 'firefighters'
                      ? 'border-emerald-400 bg-emerald-50 text-emerald-900 font-bold'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <Droplets className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div>Manggala Agni</div>
                    <div className="text-[10px] text-slate-500 font-normal">Semprot pompa basah</div>
                  </div>
                </button>

                {/* Tool: Inspect */}
                <button
                  onClick={() => {
                    playClickSfx();
                    setSelectedTool('inspect');
                  }}
                  className={`col-span-2 p-2.5 rounded-xl border text-left flex items-center gap-2 text-xs transition-colors ${
                    selectedTool === 'inspect'
                      ? 'border-slate-800 bg-slate-900 text-white font-bold'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <Info className="w-4 h-4 shrink-0" />
                  <span>Inspeksi Titik (Klik sel untuk cek data sains)</span>
                </button>
              </div>

              {/* Special Action: Cloud Seeding TMC */}
              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={applyCloudSeeding}
                  className="w-full py-2.5 px-3 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <CloudRain className="w-4 h-4" />
                  <span>Jalankan Hujan Buatan (TMC)</span>
                </button>
              </div>
            </div>

            {/* Environmental Parameters: Wind & Climate */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Variabel Lingkungan & Cuaca
              </h3>

              {/* Wind Direction */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  Arah Hembusan Angin:
                </label>
                <div className="grid grid-cols-4 gap-1 text-xs">
                  {(['N', 'E', 'S', 'W'] as WindDirection[]).map((dir) => (
                    <button
                      key={dir}
                      onClick={() => setWindDirection(dir)}
                      className={`py-1.5 rounded font-semibold border transition-colors ${
                        windDirection === dir
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {dir === 'N' ? 'Utara' : dir === 'E' ? 'Timur' : dir === 'S' ? 'Selatan' : 'Barat'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Wind Speed */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  Kecepatan Angin:
                </label>
                <div className="grid grid-cols-3 gap-1 text-xs">
                  {[
                    { id: 'light', label: '10 km/j' },
                    { id: 'moderate', label: '30 km/j' },
                    { id: 'strong', label: '55 km/j' },
                  ].map((spd) => (
                    <button
                      key={spd.id}
                      onClick={() => setWindSpeed(spd.id as WindSpeed)}
                      className={`py-1.5 rounded font-semibold border transition-colors ${
                        windSpeed === spd.id
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {spd.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Climate Condition */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  Kondisi Musim / Iklim:
                </label>
                <div className="grid grid-cols-3 gap-1 text-xs">
                  {[
                    { id: 'drought', label: 'El Niño (Kering)' },
                    { id: 'normal', label: 'Normal' },
                    { id: 'rainy', label: 'Penghujan' },
                  ].map((clim) => (
                    <button
                      key={clim.id}
                      onClick={() => setClimate(clim.id as ClimateCondition)}
                      className={`py-1.5 rounded text-[11px] font-semibold border transition-colors ${
                        climate === clim.id
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {clim.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Scientific Lesson Prompt Box */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <span className="font-bold text-amber-950 block mb-1">Eksperimen Siswa SMP:</span>
              1. Klik tombol <strong>Misi: Selamatkan Desa</strong>.
              <br />
              2. Segera pilih alat <strong>Sekat Bakar</strong> dan gali tanah di sebelah barat desa.
              <br />
              3. Tekan <strong>Jalankan Simulasi Api</strong> dan amati apakah api terhenti saat menabrak sekat tanpa bahan bakar!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
