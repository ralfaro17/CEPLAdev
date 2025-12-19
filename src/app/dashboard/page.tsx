import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Activity, Users, FileText } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-8 py-4">
      <div>
        <h2 className="text-3xl font-bold font-headline tracking-tight">Bienvenido de nuevo</h2>
        <p className="text-muted-foreground">Aquí tienes un resumen de la actividad de tu ministerio.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Miembros del Ministerio
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +2 nuevos este mes
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Recursos Publicados
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              Cantoral actualizado la semana pasada
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próximo Evento</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Misa Dominical</div>
            <p className="text-xs text-muted-foreground">
              Este domingo a las 12:00 PM
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-2xl font-bold font-headline">Acciones Rápidas</h3>
        <div className="grid gap-4 md:grid-cols-2">
            <Link href="/dashboard/content-generator">
                <Card className="hover:bg-card/90 transition-colors h-full">
                    <CardHeader>
                        <CardTitle className="font-headline text-lg">Generar Contenido</CardTitle>
                        <CardDescription>Usa la IA para crear anuncios, reflexiones o material para tu ministerio.</CardDescription>
                    </CardHeader>
                </Card>
            </Link>
            <Link href="/resources">
                 <Card className="hover:bg-card/90 transition-colors h-full">
                    <CardHeader>
                        <CardTitle className="font-headline text-lg">Gestionar Recursos</CardTitle>
                        <CardDescription>Sube nuevos cantos, oraciones o documentos para la comunidad.</CardDescription>
                    </CardHeader>
                </Card>
            </Link>
        </div>
      </div>
    </div>
  );
}
