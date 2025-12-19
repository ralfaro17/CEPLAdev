import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { MinistryApplicationForm } from '@/components/forms/MinistryApplicationForm';

export default function ApplyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto max-w-3xl py-12 md:py-24">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Únete a un Ministerio</h1>
            <p className="text-muted-foreground md:text-xl">
              Completa el formulario para expresar tu interés en servir en uno de nuestros ministerios.
            </p>
          </div>
          <div className="py-12">
            <MinistryApplicationForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
