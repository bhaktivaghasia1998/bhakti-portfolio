import { Icon, type IconName } from './Icons';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const links: IconName[] = ['experience', 'skills', 'education', 'contact'];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-20 border-b border-border/70 bg-background/70 backdrop-blur-md">
      <div className="wrap mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
      <a href="#top" className="font-mono text-sm text-foreground no-underline">
        ~/<b className="font-medium text-primary">bhakti</b>
      </a>
      <TooltipProvider>
        <ul className="flex list-none gap-2.5 p-0 m-0">
          {/* .map() turns each word in the list into a menu button */}
          {links.map((name) => (
            <li key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button asChild variant="outline" size="icon" aria-label={name}>
                    <a href={'#' + name}><Icon name={name} className="size-5" /></a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="capitalize">{name}</TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </TooltipProvider>
      </div>
    </nav>
  );
}
