import { Card } from '@/components/ui/card';

// Little helpers so each colored word is short to write.
const K = ({ c }: { c: string }) => <span className="tok-k">{c}</span>; // keyword
const V = ({ c }: { c: string }) => <span className="tok-v">{c}</span>; // name
const S = ({ c }: { c: string }) => <span className="tok-s">"{c}"</span>; // text
const N = ({ c }: { c: string }) => <span className="tok-n">{c}</span>; // number
const P = ({ c }: { c: string }) => <span className="tok-p">{c}</span>; // punctuation

// The code-editor window next to the name. Each array item is one line.
const lines = [
  <span className="tok-c">// profile loaded successfully</span>,
  <><K c="const" /> <V c="bhakti" /> <P c="= {" /></>,
  <>{'  '}<V c="role" /><P c=": " /><S c="Administrative Assistant" /><P c="," /></>,
  <>{'  '}<V c="location" /><P c=": " /><S c="East Windsor, NJ" /><P c="," /></>,
  <>{'  '}<V c="workAuth" /><P c=": " /><S c="US EAD" /><P c="," /></>,
  <>{'  '}<V c="tools" /><P c=": [" /><S c="Excel" /><P c=", " /><S c="Word" /><P c=", " /><S c="Outlook" /><P c="]," /></>,
  <>{'  '}<V c="typing" /><P c=": { " /><V c="wpm" /><P c=": " /><N c="120" /><P c=", " /><V c="errors" /><P c=": " /><N c="0" /><P c=" }," /></>,
  <>{'  '}<V c="openToWork" /><P c=": " /><K c="true" /></>,
  <><P c="};" /> <span className="inline-block h-[1.1em] w-[0.55em] animate-pulse bg-primary align-[-0.2em]" /></>,
];

export default function CodeCard() {
  return (
    <div className="relative animate-fade-up [animation-delay:150ms]">
      {/* the blurry colored glow behind the window */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/25 via-brand-2/15 to-transparent opacity-80 blur-2xl" aria-hidden="true" />
      <Card className="relative gap-0 overflow-hidden py-0 shadow-2xl shadow-black/40" aria-label="Profile summary">
        <div className="flex items-center gap-2 border-b bg-secondary/60 px-4 py-3">
          <i className="size-3 rounded-full bg-[#ff5f57]" />
          <i className="size-3 rounded-full bg-[#febc2e]" />
          <i className="size-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">bhakti.ts</span>
          <b className="ml-auto flex items-center gap-1.5 font-mono text-[11px] font-medium text-success">
            <span className="size-1.5 rounded-full bg-success" /> available
          </b>
        </div>
        <pre className="m-0 overflow-x-auto p-5 font-mono text-[13px] leading-7">
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="w-7 shrink-0 text-right pr-4 text-muted-foreground/50 select-none">{i + 1}</span>
              <span>{line}</span>
            </div>
          ))}
        </pre>
      </Card>
    </div>
  );
}
