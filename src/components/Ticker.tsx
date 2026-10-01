import { tickerItems } from '../data';

// The sliding strip of skills. The list is shown twice so the loop looks seamless.
export default function Ticker() {
  const Row = ({ hidden }: { hidden?: boolean }) => (
    <>
      {tickerItems.map((t) => (
        <span key={t} aria-hidden={hidden} className="flex items-center gap-10 font-mono text-sm whitespace-nowrap text-muted-foreground">
          {t}
          <span className="text-primary/60">✦</span>
        </span>
      ))}
    </>
  );
  return (
    <div className="mask-fade my-14 overflow-hidden border-y border-border/70 bg-card/40 py-4 backdrop-blur-sm" aria-label="Skills">
      <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
