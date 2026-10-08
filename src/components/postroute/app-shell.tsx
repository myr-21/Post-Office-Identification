import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Activity as ActivityIcon, Mail, Menu, Settings, Signal, UserRound, X } from "lucide-react";
import { navItems, sectionFor } from "./nav";
import { NotificationPanel } from "./notifications-panel";
import { SearchBar } from "./primitives";
import { currentOperator } from "@/data/mock";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col bg-sidebar">
      <div className="flex flex-col border-b border-sidebar-border">
        <div className="flex items-center gap-3 px-5 py-5">
          <img src="/logo.png" alt="PostRoute AI Logo" className="size-12 object-contain drop-shadow-sm" />
          <div className="leading-tight">
            <p className="text-base font-bold text-foreground tracking-tight">PostRoute AI</p>
            <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mt-0.5">Delivery PO ID</p>
          </div>
        </div>
        {import.meta.env.VITE_USE_MOCK !== "false" && (
          <div className="bg-amber-100 dark:bg-amber-900/30 px-3 py-2 text-center text-xs font-semibold text-amber-800 dark:text-amber-200 border-t border-amber-200 dark:border-amber-800/50">
            DEMO MODE
            <div className="text-[10px] font-normal opacity-80 mt-0.5">Using static prototype data</div>
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Main">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={onNavigate}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{
                  className:
                    "bg-primary-soft text-primary-dark font-semibold border-l-2 border-l-primary",
                }}
                inactiveProps={{
                  className: "text-muted-foreground border-l-2 border-l-transparent",
                }}
                className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-muted hover:text-foreground"
              >
                <item.icon className="size-4.5 shrink-0" aria-hidden />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-2 border-t border-sidebar-border px-3 py-4">
        <div className="flex items-center gap-2 rounded-md bg-success-soft px-3 py-2 text-xs text-success">
          <Signal className="size-4" aria-hidden />
          <span className="font-medium">System Status:</span> All services operational
        </div>
        <Link
          to="/settings"
          onClick={onNavigate}
          activeProps={{ className: "bg-primary-soft text-primary-dark" }}
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <UserRound className="size-4.5" aria-hidden />
          <span className="min-w-0 truncate">
            {currentOperator.name}
            <span className="block text-[11px] text-muted-foreground">{currentOperator.role}</span>
          </span>
        </Link>
        <Link
          to="/settings"
          onClick={onNavigate}
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Settings className="size-4.5" aria-hidden />
          Settings
        </Link>
      </div>
    </div>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const section = sectionFor(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    const tick = () =>
      setNow(
        new Date().toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-sidebar-border lg:block">
        <SidebarContent />
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            aria-label="Close navigation"
            className="absolute inset-0 bg-foreground/30"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-64 border-r border-sidebar-border shadow-raised">
            <SidebarContent onNavigate={() => setMobileOpen(false)} />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-2"
              aria-label="Close navigation"
              onClick={() => setMobileOpen(false)}
            >
              <X className="size-4" aria-hidden />
            </Button>
          </div>
        </div>
      )}

      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex flex-wrap items-center gap-3 border-b border-border bg-surface/95 px-4 py-3 backdrop-blur md:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Open navigation"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="size-5" aria-hidden />
          </Button>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-foreground">{section.title}</p>
            <p className="hidden truncate text-xs text-muted-foreground sm:block">
              {section.subtitle}
            </p>
          </div>

          <div className="hidden w-64 xl:block">
            <SearchBar
              label="Search addresses, PIN codes or parcels"
              placeholder="Search address, PIN, parcel…"
              value={search}
              onChange={setSearch}
            />
          </div>

          <div className="flex items-center gap-1.5">
            <span className="hidden items-center gap-1.5 rounded-md border border-success/25 bg-success-soft px-2.5 py-1 text-xs font-medium text-success md:inline-flex">
              <ActivityIcon className="size-3.5" aria-hidden />
              Online
            </span>
            <span className="tabular hidden text-xs text-muted-foreground lg:block">{now} IST</span>
            <NotificationPanel />
            <Link
              to="/settings"
              className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted"
            >
              <span className="flex size-8 items-center justify-center rounded-full bg-primary-soft text-xs font-semibold text-primary-dark">
                TO
              </span>
              <span className="hidden leading-tight sm:block">
                <span className="block text-xs font-semibold">{currentOperator.name}</span>
                <span className="block text-[11px] text-muted-foreground">Operator</span>
              </span>
            </Link>
          </div>
        </header>

        <main
          id="main-content"
          className={cn("mx-auto w-full max-w-[1600px] space-y-6 px-4 py-6 md:px-6 md:py-8")}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
