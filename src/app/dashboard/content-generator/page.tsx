import { ContentGenerator } from "@/components/admin/ContentGenerator";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ContentGeneratorPage() {
    return (
        <div className="space-y-8 py-4">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Nuevo Contenido con IA</CardTitle>
                    <CardDescription>
                        Completa los campos para generar un texto basado en el estilo y la doctrina Católica.
                    </CardDescription>
                </CardHeader>
                <ContentGenerator />
            </Card>
        </div>
    );
}
