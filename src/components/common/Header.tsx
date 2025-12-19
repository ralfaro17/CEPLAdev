import Link from 'next/link';
import { Cross, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Cross className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              CEPLA Digital
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/resources"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Recursos
            </Link>
            <Link
              href="/apply"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Aplicar
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Button asChild>
            <Link href="/login">
              <LogIn className="mr-2 h-4 w-4" />
              Coordinadores
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
