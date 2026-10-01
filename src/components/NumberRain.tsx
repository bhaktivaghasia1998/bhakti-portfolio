import { useEffect, useRef } from 'react';

interface Column {
  x: number; // left position
  y: number; // how far down it has fallen
  v: number; // speed
}

// Faint numbers drifting down the background, drawn on a <canvas>.
// useRef gives us the real canvas element so we can draw on it.
export default function NumberRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    const cx = cv?.getContext('2d');
    if (!cv || !cx) return; // TypeScript makes us handle "what if it's missing?"
    const fs = 14;
    const chars = '0123456789$%#.+';
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#6cc4ff';
    let cols: Column[] = [];
    let W = 0;
    let H = 0;
    let frame = 0;

    function size() {
      W = window.innerWidth;
      H = window.innerHeight;
      cv!.width = W * dpr;
      cv!.height = H * dpr;
      cx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = [];
      for (let x = 0; x < W; x += fs * 2.2) cols.push({ x, y: Math.random() * H, v: 0.4 + Math.random() * 1.1 });
    }

    function draw() {
      cx!.clearRect(0, 0, W, H);
      cx!.font = fs + 'px "IBM Plex Mono", monospace';
      cx!.fillStyle = accent;
      cols.forEach((c) => {
        for (let k = 0; k < 6; k++) {
          cx!.globalAlpha = 0.14 - k * 0.022;
          cx!.fillText(chars[(Math.floor(c.y / fs) + k * 7 + Math.floor(c.x)) % chars.length], c.x, c.y - k * fs * 1.3);
        }
        c.y += c.v;
        if (c.y - fs * 8 > H) { c.y = -10; c.v = 0.4 + Math.random() * 1.1; }
      });
      cx!.globalAlpha = 1;
      if (!reduce) frame = requestAnimationFrame(draw);
    }

    size();
    window.addEventListener('resize', size);
    draw();
    // Clean up: stop the animation if this component is removed.
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', size);
    };
  }, []);

  return <canvas id="rain" ref={canvasRef} aria-hidden="true"></canvas>;
}
