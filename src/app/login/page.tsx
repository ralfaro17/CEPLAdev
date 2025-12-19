import Link from 'next/link';
import { LogIn, Cross } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-6 flex items-center justify-center gap-2 text-foreground">
          <Cross className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-headline">CEPLA Digital</span>
        </Link>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-headline">Acceso para Coordinadores</CardTitle>
            <CardDescription>
              Ingresa tus credenciales para administrar tu ministerio.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action="/dashboard" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input id="email" type="email" placeholder="coordinador@cepla.org" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <LogIn className="mr-2 h-4 w-4" />
                Ingresar
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              <Link href="#" className="underline text-muted-foreground hover:text-accent">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
