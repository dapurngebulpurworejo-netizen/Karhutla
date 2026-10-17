import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FireTriangle } from './components/FireTriangle';
import { WildfireSimulator } from './components/WildfireSimulator';
import { PeatlandExplorer } from './components/PeatlandExplorer';
import { IspuCalculator } from './components/IspuCalculator';
import { QuizSection } from './components/QuizSection';
import { TanyaJagawanaModal } from './components/TanyaJagawanaModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('materi');
  const [isTutorOpen, setIsTutorOpen] = useState(false);

  // Smooth scroll handler
  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    const elem = document.getElementById(tabId);
    if (elem) {
      const navOffset = 70;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Sync active nav item on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['materi', 'segitiga', 'simulasi', 'ispu', 'kuis'];
      const scrollPos = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const elem = document.getElementById(sectionIds[i]);
        if (elem && elem.offsetTop <= scrollPos) {
          setActiveTab(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Bar Contract (3 zones) */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavClick}
        onOpenTutor={() => setIsTutorOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onStartSimulation={() => handleNavClick('simulasi')}
          onExplorePillars={() => handleNavClick('materi')}
          onStartQuiz={() => handleNavClick('kuis')}
        />

        {/* Section 1: Modul Materi & Lahan Gambut */}
        <div id="materi">
          <PeatlandExplorer />
        </div>

        {/* Section 2: Segitiga Api */}
        <div id="segitiga">
          <FireTriangle />
        </div>

        {/* Section 3: Lab Simulasi Api */}
        <div id="simulasi">
          <WildfireSimulator />
        </div>

        {/* Section 4: Indeks ISPU & Kesiapsiagaan */}
        <div id="ispu">
          <IspuCalculator />
        </div>

        {/* Section 5: Uji Kompetensi & Sertifikat */}
        <div id="kuis">
          <QuizSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Smart Tutor Modal */}
      <TanyaJagawanaModal
        isOpen={isTutorOpen}
        onClose={() => setIsTutorOpen(false)}
      />
    </div>
  );
}
