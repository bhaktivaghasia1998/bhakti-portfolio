import { jobs } from '../data';
import SectionTitle from './SectionTitle';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <SectionTitle icon="experience" label="experience" title="Where I've worked" />
      {/* the vertical timeline line on the left */}
      <ol className="relative m-0 grid list-none gap-5 p-0 pl-8 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-gradient-to-b before:from-primary/70 before:via-border before:to-transparent">
        {jobs.map((job) => (
          <li key={job.title} className="group relative">
            {/* the dot on the timeline */}
            <span
              className={cn(
                'absolute top-7 -left-8 size-[15px] rounded-full border-2 bg-background transition-all',
                job.note ? 'border-success' : 'border-primary group-hover:bg-primary group-hover:shadow-[0_0_14px] group-hover:shadow-primary'
              )}
            />
            <Card
              className={cn(
                'transition-all duration-300',
                job.note
                  ? 'gap-3 border-dashed bg-transparent py-5'
                  : 'hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_50px_-24px] hover:shadow-primary/50'
              )}
            >
              <CardHeader className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <CardTitle className={job.note ? 'text-lg' : ''}>{job.title}</CardTitle>
                  <p className={cn('m-0 mt-1 font-mono text-sm', job.note ? 'text-success' : 'text-brand-2')}>{job.company}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{job.dates}</Badge>
                  <Badge variant="outline" className="text-muted-foreground">{job.place}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className={cn('m-0 grid list-none gap-x-8 gap-y-2.5 p-0', !job.note && 'md:grid-cols-2')}>
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                      <span className={cn('mt-[9px] size-1.5 shrink-0 rotate-45', job.note ? 'bg-success' : 'bg-primary')} />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}
