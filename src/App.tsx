// App is the "main" component. It stacks all the section components in order.
import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import CodeCard from './components/CodeCard';
import Ticker from './components/Ticker';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import NumberRain from './components/NumberRain';
import { Separator } from '@/components/ui/separator';

export default function App() {
  // The soft blue glow that follows the mouse.
  useEffect(() => {
    const move = (e: PointerEvent) => {
      document.documentElement.style.setProperty('--mx', e.clientX + 'px');
      document.documentElement.style.setProperty('--my', e.clientY + 'px');
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move); // clean up when the page closes
  }, []);

  return (
    <>
      <NumberRain />
      <div className="spot" aria-hidden="true"></div>
      <Nav />
      <div className="wrap relative mx-auto max-w-6xl px-5 pb-16">
        {/* On big screens: name on the left, code window on the right */}
        <div className="grid items-center gap-12 pt-14 lg:min-h-[calc(100svh-73px)] lg:grid-cols-[1.25fr_1fr] lg:pt-6">
          <Hero />
          <CodeCard />
        </div>
        <Ticker />
        <Experience />
        <Skills />
        <Education />
        <Contact />
        <Separator className="mt-12" />
        <footer className="flex flex-wrap justify-between gap-2 pt-6 font-mono text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Bhakti Vaghasia</span>
          <span>built with React + shadcn/ui</span>
        </footer>
      </div>
    </>
  );
}
