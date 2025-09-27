"use client";

import { AppLink } from "@/shared/ui/app-link";
import { ThemeToggle } from "@/shared/ui/theme-toggle";

const Header = () => {
  return (
    <header className="bg-card/90 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <div className="text-foreground font-semibold">Next.js 15 Test</div>
        <nav className="flex gap-2 items-center">
          <AppLink href="/" exact>
            Главная
          </AppLink>
          <AppLink href="/ssr" exact>
            SSR
          </AppLink>
          <AppLink href="/ssg" exact>
            SSG
          </AppLink>
          <AppLink href="/isr" exact>
            ISR
          </AppLink>
          <AppLink href="/csr" exact>
            CSR
          </AppLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export { Header };
