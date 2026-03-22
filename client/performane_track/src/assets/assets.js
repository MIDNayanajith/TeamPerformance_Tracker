import logo from "./logo.png";
import { LayoutDashboard, Users } from "lucide-react";

export const assets = {
  logo,
};

export const SIDE_BAR_DATA = [
  {
    id: "01",
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    id: "02",
    label: "Add Team Member",
    icon: Users,
    path: "/team-members",
  },
];
