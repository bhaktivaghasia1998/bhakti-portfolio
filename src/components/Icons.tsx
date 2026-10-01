// Small drawings (SVG icons) used across the site.
import type { ReactElement, SVGProps } from 'react';

// IconName is the list of allowed icon names. Asking for icons.hello would be an error.
export type IconName =
  | 'experience' | 'skills' | 'education' | 'contact' | 'download'
  | 'arrowRight' | 'copy' | 'check' | 'mapPin' | 'linkedin' | 'sparkle';

const paths: Record<IconName, ReactElement> = {
  experience: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18M11 12v2h2v-2" /></>,
  skills: <><rect x="6" y="6" width="12" height="12" rx="2" /><rect x="9.5" y="9.5" width="5" height="5" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /></>,
  education: <><path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5M22 9v6" /></>,
  contact: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  download: <path d="M12 3v12M7 10l5 5 5-5M4 19h16" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  copy: <><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></>,
  check: <path d="M4 12.5l5 5L20 6.5" />,
  mapPin: <><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" /></>,
  sparkle: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />,
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

// Use it like: <Icon name="download" />
export function Icon({ name, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {paths[name]}
    </svg>
  );
}
