import {
  Activity,
  BarChart3,
  Building2,
  ClipboardCheck,
  LayoutDashboard,
  MapPin,
  Package,
  Route as RouteIcon,
} from "lucide-react";
import type { ComponentType } from "react";

export interface NavItem {
  to: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
}

export const navItems: NavItem[] = [
  {
    to: "/",
    label: "Dashboard",
    icon: LayoutDashboard,
    title: "Operations Dashboard",
    subtitle: "Postal address prediction and routing overview",
  },
  {
    to: "/prediction",
    label: "Address Prediction",
    icon: RouteIcon,
    title: "Address Prediction",
    subtitle: "Identify the most probable delivery post office and PIN code",
  },
  {
    to: "/review",
    label: "Review Queue",
    icon: ClipboardCheck,
    title: "Review Queue",
    subtitle: "Predictions requiring operator verification",
  },
  {
    to: "/parcels",
    label: "Parcels",
    icon: Package,
    title: "Parcel Routing",
    subtitle: "Track parcels through address analysis, sorting and dispatch",
  },
  {
    to: "/post-offices",
    label: "Post Offices",
    icon: Building2,
    title: "Post Offices",
    subtitle: "Browse postal offices and their associated PIN mappings",
  },
  {
    to: "/mapping",
    label: "Pincode Mapping",
    icon: MapPin,
    title: "Pincode Mapping",
    subtitle: "Manage current and historical postal mappings",
  },
  {
    to: "/analytics",
    label: "Analytics",
    icon: BarChart3,
    title: "Analytics & Model Performance",
    subtitle: "Prediction quality metrics across address conditions and models",
  },
  {
    to: "/activity",
    label: "Activity Log",
    icon: Activity,
    title: "Activity Log",
    subtitle: "Chronological record of system and operator actions",
  },
];

export function sectionFor(pathname: string) {
  if (pathname.startsWith("/settings")) {
    return { title: "Operator Profile & Settings", subtitle: "Workstation preferences" };
  }
  const match = [...navItems]
    .filter((item) => item.to !== "/")
    .find((item) => pathname.startsWith(item.to));
  return match ?? navItems[0]!;
}
