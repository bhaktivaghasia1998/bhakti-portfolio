import { profile } from '../data';
import { Icon } from './Icons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const highlight = profile.badges.find((b) => b.highlight); // "Open to work"
  const others = profile.badges.filter((b) => !b.highlight);

  return (
    <header id="top" className="grid animate-fade-up gap-7">
      {highlight && (
        <Badge variant="success" className="w-fit">
          {/* the pulsing green dot */}
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-success" />
          </span>
          {highlight.text}
        </Badge>
      )}

      <h1 className="m-0 font-display text-[clamp(52px,9vw,96px)] leading-[0.92] font-bold tracking-tight text-balance">
        {profile.firstName}{' '}
        <span className="bg-gradient-to-r from-primary via-primary to-brand-2 bg-clip-text text-transparent">
          {profile.lastName}
        </span>
      </h1>

      <p className="m-0 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[clamp(15px,2vw,18px)] text-foreground">
        {profile.roles.map((role, i) => (
          <span key={role} className="flex items-center gap-3">
            {i > 0 && <span className="text-primary">/</span>}
            {role}
          </span>
        ))}
      </p>

      <p className="m-0 max-w-[62ch] text-[17px] text-muted-foreground">{profile.bio}</p>

      <div className="flex flex-wrap gap-2.5">
        {others.map((b) => (
          <Badge key={b.text} variant="outline">
            {b.text.includes(',') && <Icon name="mapPin" />}
            {b.text}
          </Badge>
        ))}
      </div>

      <p className="m-0 flex items-start gap-2 font-mono text-sm text-success">
        <Icon name="sparkle" className="mt-0.5 size-4 shrink-0" />
        {profile.lookingFor}
      </p>

      <div className="flex flex-wrap gap-3">
        <Button asChild size="lg">
          <a href="#contact">Get in touch <Icon name="arrowRight" /></a>
        </Button>
        {/* Files in the "public" folder can be linked to directly, like this PDF */}
        <Button asChild size="lg" variant="outline">
          <a href={profile.resume} download><Icon name="download" /> Download resume</a>
        </Button>
      </div>
    </header>
  );
}
