import { useEffect, useState } from 'react';
import { stats, type Stat as StatData } from '../data';

// A "custom hook": counts a number up from 0 to the target when the page opens.
function useCountUp(target: number, duration = 1400): number {
  const [value, setValue] = useState(target); // TypeScript knows value is a number
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let start = 0;
    let frame = 0;
    const step = (t: number) => {
      start = start || t;
      const p = Math.min((t - start) / duration, 1);
      setValue(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);
  return value;
}

function Stat({ value, unit, label }: StatData) {
  const current = useCountUp(value);
  const decimals = String(value).includes('.') ? 1 : 0;
  const shown = decimals ? current.toFixed(1) : Math.round(current).toLocaleString('en-US');
  return (
    <div className="stat" role="listitem">
      <div className="n">{shown}<small>{unit}</small></div>
      <div className="l">{label}</div>
    </div>
  );
}

// Not shown on the page right now. Add <Stats /> in App.tsx to bring the number boxes back.
export default function Stats() {
  return (
    <div className="stats" role="list" aria-label="Typing and experience stats">
      {stats.map((s) => <Stat key={s.label} {...s} />)}
    </div>
  );
}
