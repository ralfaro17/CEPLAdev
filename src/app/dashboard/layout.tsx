"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from '@/components/ui/button';
import { Cross, LayoutDashboard, Sparkles, LogOut } from 'lucide-react';
import placeholderImages from '@/lib/placeholder-images.json';


function DashboardSidebar() {
    const pathname = usePathname();
    const { open, setOpen, isMobile } = useSidebar()
    const avatarImage = placeholderImages.placeholderImages.find(p => p.id === 'avatar-1');
    
    const closeSidebar = () => {
        if (isMobile) {
            setOpen(false);
        }
    }

    return (
        <Sidebar>
            <SidebarHeader>
                 <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="shrink-0" asChild>
                      <Link href="/" aria-label="Home">
                          <Cross className="size-5 fill-current text-primary" />
                      </Link>
                    </Button>
                    <span className="font-headline text-lg font-semibold text-sidebar-foreground">CEPLA Digital</span>
                 </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild isActive={pathname === '/dashboard'} onClick={closeSidebar}>
                            <Link href="/dashboard">
                                <LayoutDashboard />
                                Dashboard
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild isActive={pathname === '/dashboard/content-generator'} onClick={closeSidebar}>
                            <Link href="/dashboard/content-generator">
                                <Sparkles />
                                Generador AI
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
                <div className="flex items-center gap-3 rounded-md p-2 text-sm font-medium text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                    <Avatar className="h-9 w-9">
                        {avatarImage && <AvatarImage src={avatarImage.imageUrl} alt="Avatar" data-ai-hint={avatarImage.imageHint} />}
                        <AvatarFallback>C</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 overflow-hidden whitespace-nowrap">
                        <p className="truncate font-semibold">Coordinador</p>
                        <p className="truncate text-xs text-sidebar-foreground/70">Música</p>
                    </div>
                    <Button variant="ghost" size="icon" className="shrink-0" asChild>
                        <Link href="/">
                            <LogOut className="size-4" />
                        </Link>
                    </Button>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const getPageTitle = () => {
        if (pathname === '/dashboard/content-generator') return 'Generador de Contenido';
        return 'Dashboard';
    }

    return (
        <SidebarProvider>
            <DashboardSidebar />
            <SidebarInset>
                <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <SidebarTrigger className="md:hidden"/>
                    <h1 className="text-xl font-semibold font-headline">{getPageTitle()}</h1>
                </header>
                <main className="flex-1 p-4 sm:px-6 sm:py-0">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
