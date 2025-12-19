export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container flex-col gap-4 py-8 text-center text-sm md:flex-row md:py-4">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
          © {new Date().getFullYear()} Capilla San José, CEPLA. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
