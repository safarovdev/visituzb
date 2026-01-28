import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/team-data';
import { ScrollAnimation } from '@/components/scroll-animation';

export default function TeamPage() {
  return (
    <ScrollAnimation as="section" className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Наша команда</h1>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
          Профессионалы, которые сделают ваше путешествие незабываемым.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <Avatar className="mx-auto h-40 w-40 shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
                <AvatarImage src={member.image.imageUrl} alt={member.name} data-ai-hint={member.image.imageHint}/>
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="mt-6 text-2xl font-semibold">{member.name}</h3>
              <p className="text-primary font-medium text-lg">{member.role}</p>
            </div>
        ))}
      </div>
    </ScrollAnimation>
  );
}
