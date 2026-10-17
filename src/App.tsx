import React, { useState, useEffect, Component, ErrorInfo, ReactNode } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FireTriangle } from './components/FireTriangle';
import { WildfireSimulator } from './components/WildfireSimulator';
import { PeatlandExplorer } from './components/PeatlandExplorer';
import { IspuCalculator } from './components/IspuCalculator';
import { QuizSection } from './components/QuizSection';
import { TanyaJagawanaModal } from './components/TanyaJagawanaModal';
import { Footer } from './components/Footer';
import { Language } from './types';
import { TRANSLATIONS } from './data/translations';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Siaga Karhutla Error Boundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-slate-800">
          <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-8 shadow-sm text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto border border-rose-100">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Terjadi Kendala Memuat Aplikasi</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Modul sedang menyesuaikan data pembelajaran. Silakan muat ulang halaman untuk melanjutkan.
            </p>
            <div className="pt-2">
              <button
                onClick={() => window.location.reload()}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center gap-2 mx-auto transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Muat Ulang Halaman</span>
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const [activeTab, setActiveTab] = useState<string>('materi');
  const [isTutorOpen, setIsTutorOpen] = useState(false);

  const t = TRANSLATIONS[lang] || TRANSLATIONS['id'];

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
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-50 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
        {/* Top Bar Contract (3 zones) */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={handleNavClick}
          onOpenTutor={() => setIsTutorOpen(true)}
          lang={lang}
          onToggleLang={() => setLang((prev) => (prev === 'id' ? 'en' : 'id'))}
          t={t}
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
            <FireTriangle t={t} />
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
    </ErrorBoundary>
  );
}
