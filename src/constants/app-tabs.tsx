import { LucideIconName } from "@/components/ui/lucide-icon";
import { Code, Home, PersonStanding } from "lucide-react";

export interface AppTab {
  title: string;
  path: string;
  iconName: LucideIconName;
}

export const appTabs: AppTab[] = [
  {
    title: "Home",
    path: "/",
    iconName: "House",
  },
  {
    title: "About",
    path: "/about",
    iconName: "PersonStanding",
  },
  {
    title: "Projects",
    path: "/projects",
    iconName: "Code",
  },

  {
    title: "Contact",
    path: "/contact",
    iconName: "MessageCircle",
  },
];
