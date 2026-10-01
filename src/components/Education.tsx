import { education } from '../data';
import SectionTitle from './SectionTitle';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';

export default function Education() {
  return (
    <section id="education" className="py-12">
      <SectionTitle icon="education" label="education" title="Education" />
      <div className="grid gap-5 md:grid-cols-3">
        {education.map((e) => (
          <Card key={e.title} className="transition-all duration-300 hover:-translate-y-1 hover:border-brand-2/50 hover:shadow-[0_18px_50px_-24px] hover:shadow-brand-2/50">
            <CardContent className="grid gap-3">
              <Badge variant="outline" className="w-fit text-brand-2">{e.years}</Badge>
              <CardTitle className="text-lg">{e.title}</CardTitle>
              <CardDescription>{e.school}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
