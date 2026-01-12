import {
  LayoutDashboard,
  ShoppingCart,
  FileText,
  CreditCard,
  Settings,
} from "lucide-react";

export const sidebarMenu = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    active: false,
    submenu: [
      {
        id: "submenu 1 1",
        label: "submenu 1 1",
        icon: LayoutDashboard,
        active: false,
        route:"/course"
      },
      {
        id: "submenu 1 2",
        label: "submenu 1 1",
        icon: LayoutDashboard,
        active: false,
         route:"/course/create"
      },
    ],
  },
  {
    id: "carts",
    label: "My Carts",
    icon: ShoppingCart,
    active: false,
  },
  {
    id: "courses",
    label: "Courses",
    icon: FileText,
    active: true,
    submenu: [
      {
        id: "submenu 3 1",
        label: "submenu 3 1",
        icon: LayoutDashboard,
        active: false,
          route:"/submenu2"
      },
      {
        id: "submenu 3 2",
        label: "submenu 3 1",
        icon: LayoutDashboard,
        active: false,
          route:"/submenu3"
      },
    ],
  },
  {
    id: "balances",
    label: "Balances",
    icon: CreditCard,
    active: false,
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    active: false,
  },
];
