import {
  DashboardIcon,
  ActivityIcon,
  WalletIcon,
  ProductIcon,
  ReferralsIcon,
} from "../components/icons";

export const Sidebardata = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
    cName: "nav-text",
  },
  {
    title: "Activity",
    path: "/activity",
    icon: <ActivityIcon />,
    cName: "nav-text",
  },
  {
    title: "Wallet",
    path: "wallet",
    icon: <WalletIcon />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <ProductIcon />,
    cName: "nav-text",
  },
  {
    title: "Referrals",
    path: "/referrals",
    icon: <ReferralsIcon />,
    cName: "nav-text",
  },
];
