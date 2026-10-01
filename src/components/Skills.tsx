import { tools, skillGroups } from '../data';
import SectionTitle from './SectionTitle';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const cardHover = 'transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_50px_-24px] hover:shadow-primary/50';

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <SectionTitle icon="skills" label="skills" title="What I bring" />
      <div className="grid gap-5 md:grid-cols-2">
        <Card className={cardHover}>
          <CardHeader><CardTitle className="text-lg">Tools</CardTitle></CardHeader>
          <CardContent className="grid gap-4">
            {tools.map((t) => (
              <div key={t.name} className="grid gap-2">
                <div className="flex justify-between font-mono text-sm">
                  <span>{t.name}</span>
                  <span className="text-muted-foreground">{t.level}</span>
                </div>
                <Progress value={t.percent} />
              </div>
            ))}
          </CardContent>
        </Card>
        {skillGroups.map((group) => (
          <Card key={group.title} className={cardHover}>
            <CardHeader><CardTitle className="text-lg">{group.title}</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} variant="secondary" className="cursor-default py-1.5 hover:border-primary/50 hover:text-primary">
                  {item}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
