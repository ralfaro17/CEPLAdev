"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Sparkles, Loader2, Clipboard } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { generateMinistryContentAction } from "@/app/actions/ai-actions";

const formSchema = z.object({
  ministryName: z.string().min(2, { message: "El nombre del ministerio es requerido." }),
  topic: z.string().min(5, { message: "El tema es requerido." }),
  keywords: z.string().min(3, { message: "Ingresa al menos una palabra clave." }),
});

export function ContentGenerator() {
  const { toast } = useToast();
  const [generatedContent, setGeneratedContent] = useState("");
  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ministryName: "",
      topic: "",
      keywords: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsPending(true);
    setGeneratedContent("");

    const result = await generateMinistryContentAction(values);

    if (result.error) {
      toast({
        variant: "destructive",
        title: "Error al generar contenido",
        description: result.error,
      });
    } else if (result.content) {
      setGeneratedContent(result.content);
      toast({
        title: "Contenido Generado",
        description: "El texto ha sido creado exitosamente.",
      });
    }
    setIsPending(false);
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
    toast({
      title: "Copiado",
      description: "El contenido ha sido copiado al portapapeles.",
    });
  }

  return (
    <>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="ministryName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre del Ministerio</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: Coro, Liturgia" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tema Principal</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: Anuncio para ensayo, Reflexión de Adviento" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="keywords"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Palabras Clave</FormLabel>
                  <FormControl>
                    <Input placeholder="Ensayo, Domingo, Esperanza, Preparación" {...field} />
                  </FormControl>
                  <FormDescription>
                    Separa las palabras o frases con comas.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Generar Contenido
            </Button>
          </form>
        </Form>
      </CardContent>
      {(isPending || generatedContent) && (
        <CardFooter className="flex flex-col items-start gap-4 border-t pt-6">
            <div className="flex justify-between items-center w-full">
                <h3 className="font-headline text-lg">Contenido Generado</h3>
                {generatedContent && !isPending && (
                    <Button variant="ghost" size="icon" onClick={copyToClipboard} aria-label="Copiar al portapapeles">
                        <Clipboard className="h-4 w-4" />
                    </Button>
                )}
            </div>
          {isPending ? (
            <div className="space-y-2 w-full p-4 border rounded-md">
                <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
                <div className="h-4 bg-muted rounded animate-pulse w-full"></div>
                <div className="h-4 bg-muted rounded animate-pulse w-5/6"></div>
            </div>
          ) : (
            <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap w-full rounded-md border p-4 bg-muted/50">
              {generatedContent}
            </div>
          )}
        </CardFooter>
      )}
    </>
  );
}
