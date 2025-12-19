import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Music, FileText, BookHeart } from 'lucide-react';

const resources = [
  {
    title: 'Misal Mensual',
    description: 'Las lecturas y oraciones para cada día del mes.',
    icon: FileText,
    fileUrl: '/resources/misal.pdf'
  },
  {
    title: 'Cantoral Litúrgico',
    description: 'Colección de cantos para la Santa Misa y otras celebraciones.',
    icon: Music,
    fileUrl: '/resources/cantoral.pdf'
  },
  {
    title: 'Oraciones Comunitarias',
    description: 'Una guía con oraciones para rezar en comunidad y en familia.',
    icon: BookHeart,
    fileUrl: '/resources/oraciones.pdf'
  },
  {
    title: 'Vía Crucis',
    description: 'Meditaciones para acompañar a Jesús en su camino a la Cruz.',
    icon: FileText,
    fileUrl: '/resources/viacrucis.pdf'
  },
];

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto max-w-5xl py-12 md:py-24">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Centro de Recursos</h1>
            <p className="text-muted-foreground md:text-xl">
              Descarga materiales para enriquecer tu vida de fe y tu participación en la comunidad.
            </p>
          </div>
          <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <Card key={resource.title} className="flex flex-col">
                <CardHeader className="flex-row items-center gap-4 pb-4">
                  <resource.icon className="h-10 w-10 text-primary" />
                  <CardTitle className="font-headline">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <CardDescription className="flex-grow">{resource.description}</CardDescription>
                  <Button asChild className="mt-4 w-full">
                    <a href={resource.fileUrl} download>
                      <Download className="mr-2 h-4 w-4" />
                      Descargar
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
