import React, { useState } from 'react';
import { Volume2, VolumeX, Globe } from 'lucide-react';
import { Language } from '../types';
import { AppTranslations } from '../data/translations';
import { toggleSound, isSoundEnabled, playClickSfx } from '../utils/audio';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenTutor: () => void;
  lang: Language;
  onToggleLang: () => void;
  t: AppTranslations;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenTutor,
  lang,
  onToggleLang,
  t,
}) => {
  const [soundOn, setSoundOn] = useState(isSoundEnabled());

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  const navItems = [
    { id: 'materi', label: t.nav.modules },
    { id: 'segitiga', label: t.nav.fireTriangle },
    { id: 'simulasi', label: t.nav.simulator },
    { id: 'ispu', label: t.nav.airQuality },
    { id: 'kuis', label: t.nav.quiz },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single line text element) */}
        <button
          onClick={() => {
            playClickSfx();
            setActiveTab('materi');
          }}
          className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-emerald-700 transition-colors text-left"
        >
          {t.nav.brand}
        </button>

        {/* Zone 2: 4-5 single-line navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  playClickSfx();
                  setActiveTab(item.id);
                }}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 ${
                  isActive
                    ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600'
                    : 'hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Language toggle, Audio, and Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher Button */}
          <button
            onClick={() => {
              playClickSfx();
              onToggleLang();
            }}
            title={lang === 'en' ? 'Switch to Bahasa Indonesia' : 'Ganti ke Bahasa Inggris'}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-slate-500" />
            <span className="font-mono uppercase">{lang === 'en' ? 'EN' : 'ID'}</span>
          </button>

          <button
            onClick={handleSoundToggle}
            title={t.nav.soundToggleTitle}
            className="p-2 text-slate-500 hover:text-slate-800 transition-colors rounded-lg hover:bg-slate-100"
            aria-label="Toggle Sound"
          >
            {soundOn ? <Volume2 className="w-5 h-5 text-emerald-600" /> : <VolumeX className="w-5 h-5 text-slate-400" />}
          </button>

          <button
            onClick={() => {
              playClickSfx();
              onOpenTutor();
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            {t.nav.askRanger}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer strip */}
      <div className="md:hidden flex items-center overflow-x-auto gap-3 px-4 py-2 border-t border-slate-100 bg-slate-50 text-xs font-medium">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                playClickSfx();
                setActiveTab(item.id);
              }}
              className={`whitespace-nowrap shrink-0 px-2.5 py-1 rounded-md transition-colors ${
                isActive ? 'bg-emerald-700 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
