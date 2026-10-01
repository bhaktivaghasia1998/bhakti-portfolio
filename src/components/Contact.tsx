import { useState } from 'react';
import { profile } from '../data';
import SectionTitle from './SectionTitle';
import { Icon } from './Icons';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Contact() {
  // "copied" is state: when it changes, React redraws the button.
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = 'mailto:' + profile.email; // if copying isn't allowed, open email instead
    }
  }

  return (
    <section id="contact" className="py-12">
      <SectionTitle icon="contact" label="contact" title="Let's work together" />
      <Card className="relative overflow-hidden border-primary/25 bg-gradient-to-br from-primary/10 via-card/90 to-brand-2/10 px-6 py-8 md:px-10 md:py-10">
        <div className="absolute -top-24 -right-24 size-64 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-wrap items-center justify-between gap-6">
          <div className="grid gap-2">
            <p className="m-0 text-muted-foreground">{profile.lookingFor}</p>
            <a href={'mailto:' + profile.email} className="font-display text-[clamp(20px,3.2vw,30px)] font-bold break-all text-foreground no-underline hover:text-primary">
              {profile.email}
            </a>
            <p className="m-0 flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <Icon name="mapPin" className="size-4" /> {profile.location}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" onClick={copyEmail}>
              <Icon name={copied ? 'check' : 'copy'} /> {copied ? 'Copied!' : 'Copy email'}
            </Button>
            {/* Only shows once a LinkedIn address is added in data.ts */}
            {profile.linkedin && (
              <Button asChild size="lg" variant="outline">
                <a href={profile.linkedin} target="_blank" rel="noopener"><Icon name="linkedin" /> LinkedIn</a>
              </Button>
            )}
            <Button asChild size="lg" variant="outline">
              <a href={profile.resume} download><Icon name="download" /> Resume</a>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
