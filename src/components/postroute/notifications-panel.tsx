import { useQuery } from "@tanstack/react-query";
import { Bell, CircleCheck, FileWarning, MapPin, ShieldAlert, TriangleAlert } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { getNotifications } from "@/services/postroute";
import type { AppNotification } from "@/types";
import { cn } from "@/lib/utils";

const iconFor = (type: AppNotification["type"]) => {
  switch (type) {
    case "review":
      return <FileWarning className="size-4 text-warning" aria-hidden />;
    case "mapping":
      return <MapPin className="size-4 text-primary" aria-hidden />;
    case "low_confidence":
      return <TriangleAlert className="size-4 text-error" aria-hidden />;
    case "system":
      return <ShieldAlert className="size-4 text-info" aria-hidden />;
    default:
      return <CircleCheck className="size-4 text-success" aria-hidden />;
  }
};

export function NotificationPanel() {
  const { data = [] } = useQuery({ queryKey: ["notifications"], queryFn: getNotifications });
  const unread = data.filter((n) => n.unread).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label={`Notifications, ${unread} unread`}>
          <Bell className="size-5" aria-hidden />
          {unread > 0 && (
            <span className="absolute top-1.5 right-1.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
              {unread}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-88 p-0">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <p className="text-sm font-semibold">Notifications</p>
          <span className="text-xs text-muted-foreground">{unread} unread</span>
        </div>
        <ul className="max-h-96 overflow-y-auto">
          {data.map((n) => (
            <li
              key={n.id}
              className={cn(
                "flex gap-3 border-b border-border/70 px-4 py-3 last:border-0",
                n.unread && "bg-primary-soft/40",
              )}
            >
              <span className="mt-0.5">{iconFor(n.type)}</span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">{n.title}</p>
                <p className="text-xs text-muted-foreground">{n.detail}</p>
                <p className="mt-1 text-[11px] text-muted-foreground">{n.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
