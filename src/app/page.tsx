import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Cross, Music, Users, BookOpen } from 'lucide-react';

import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { NewsCarousel } from '@/components/home/NewsCarousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import placeholderImages from '@/lib/placeholder-images.json';

const ministries = [
  { name: 'Música', icon: Music, description: 'Elevando el espíritu a través del canto y la música sacra.' },
  { name: 'Liturgia', icon: BookOpen, description: 'Preparando y guiando las celebraciones para un encuentro con Dios.' },
  { name: 'Monaguillos', icon: Users, description: 'Jóvenes al servicio del altar, ayudando en la Santa Misa.' },
];

export default function Home() {
  const heroImage = placeholderImages.placeholderImages.find(p => p.imageHint.includes('church interior'));

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40 flex items-center justify-center text-center bg-card">
           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent z-10"></div>
           {heroImage && (
            <Image 
              src={heroImage.imageUrl}
              alt={heroImage.description} 
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
           )}
          <div className="container relative z-20 px-4 md:px-6">
            <h1 className="text-4xl font-headline font-bold tracking-tighter text-primary-foreground drop-shadow-md sm:text-5xl md:text-6xl lg:text-7xl">
              Capilla San José, CEPLA
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-primary-foreground/90 drop-shadow-sm md:text-xl">
              Un faro de fe, comunidad y servicio en el corazón de nuestro barrio.
            </p>
            <div className="mt-6">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/apply">
                  Únete a un Ministerio <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="news" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Últimas Novedades</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mantente al día con los últimos anuncios y eventos de nuestra comunidad.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-6xl py-12">
              <NewsCarousel />
            </div>
          </div>
        </section>

        <section id="ministries" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Cross className="mx-auto h-12 w-12 text-primary" />
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Nuestros Ministerios</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  El servicio es el corazón de nuestra fe. Descubre dónde puedes aportar tus dones.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 py-12 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              {ministries.map((ministry) => (
                <Card key={ministry.name} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <ministry.icon className="h-10 w-10 text-primary" />
                    <CardTitle className="font-headline">{ministry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{ministry.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="text-center">
              <Button asChild variant="link" className="text-accent text-lg hover:text-accent/90">
                <Link href="/apply">Ver todos y aplicar <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
