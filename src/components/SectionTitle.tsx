import { Icon, type IconName } from './Icons';

// Props = the inputs this component accepts, and their types.
interface SectionTitleProps {
  icon: IconName;
  label: string;
  title?: string; // optional
}

export default function SectionTitle({ icon, label, title }: SectionTitleProps) {
  return (
    <div className="mb-8 grid gap-3">
      <p className="m-0 flex items-center gap-3 font-mono text-xs tracking-[0.15em] text-primary uppercase">
        <span className="grid size-9 place-items-center rounded-lg border border-primary/30 bg-primary/10">
          <Icon name={icon} className="size-[18px]" />
        </span>
        {label}
      </p>
      {title && <h2 className="m-0 font-display text-[clamp(30px,4.5vw,44px)] leading-tight font-bold tracking-tight">{title}</h2>}
    </div>
  );
}
