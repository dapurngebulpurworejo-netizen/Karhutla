export type Language = 'en' | 'id';

export type CellType = 'forest' | 'dry_grass' | 'peatland' | 'settlement' | 'water' | 'firebreak' | 'burning' | 'burnt';

export interface GridCell {
  id: string;
  x: number;
  y: number;
  type: CellType;
  fuel: number; // 0 to 100
  moisture: number; // 0 to 100
  burningTicks: number; // how long it's been burning
  smokeLevel: number; // 0 to 3
}

export type WindDirection = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW' | 'CALM';
export type WindSpeed = 'light' | 'moderate' | 'strong';
export type ClimateCondition = 'drought' | 'normal' | 'rainy';
export type InterveneTool = 'inspect' | 'ignite' | 'water_bomb' | 'firebreak' | 'firefighters' | 'cloud_seeding';

export interface PillarDetail {
  heading: string;
  body: string;
  isHuman?: boolean;
  highlight?: string;
}

export interface PillarContent {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  summary: string;
  details: PillarDetail[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  context?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  curriculumTopic: string;
}

export interface IspuLevel {
  range: [number, number];
  category: string;
  color: string;
  bgColor: string;
  borderColor: string;
  healthImpact: string;
  schoolRecommendation: string;
}
