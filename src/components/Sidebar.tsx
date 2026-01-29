
import {
  Sidebar as ShadSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

import {
  ChevronDown,
  BriefcaseBusiness,
  HandCoins,
  Users,
  PiggyBank,
  Handshake,
  Cog,
  ChartColumnIncreasing,
  Settings2,
  UserX,
  UserCheck,
  Landmark,
  Database,
  ClipboardClock,
  Scroll,
  BadgePercent,
  ScrollText,
  LayoutDashboard,
} from "lucide-react";

function Sidebar() {
  type cust = {
    label: string;
    icon: React.ReactNode;
    link?: string;
  };
  const customers: cust[] = [
    {
      label: "Users",
      icon: <Users />,
      link: "/users",
    },
    {
      label: "Guarantors",
      icon: <Users />,
    },
    {
      label: "Loans",
      icon: <HandCoins />,
    },
    {
      label: "Decisions Models",
      icon: <Handshake />,
    },
    {
      label: "Savings",
      icon: <PiggyBank />,
    },
    {
      label: "Loan Requests",
      icon: <HandCoins />,
    },
    {
      label: "Whitelist",
      icon: <UserCheck />,
    },
    {
      label: "Karma",
      icon: <UserX />,
    },
  ];

  const businesses = [
    {
      label: "Organizations",
      icon: <BriefcaseBusiness />,
      link: "/",
    },
    {
      label: "Loan products",
      icon: <HandCoins />,
    },
    {
      label: "Saving products",
      icon: <Landmark />,
    },
    {
      label: "Fees and charges",
      icon: <Database />,
    },
    {
      label: "Transactions",
      icon: <ClipboardClock />,
    },
    {
      label: "Services",
      icon: <Cog />,
      link: "/",
    },
    {
      label: "Settlements",
      icon: <Scroll />,
    },
    {
      label: "Reports",
      icon: <ChartColumnIncreasing />,
    },
  ];

  const settings = [
    {
      label: "Preferences",
      icon: <Settings2 />,
      link: "/",
    },
    {
      label: "Fees and Pricing",
      icon: <BadgePercent />,
      link: "/",
    },
    {
      label: "Audit logs",
      icon: <ScrollText />,
    },
  ];

  return (
    <>
      <ShadSidebar className="mt-[80px]">
        <SidebarContent className="bg-white text-secondary overflow-y-auto scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <SidebarHeader className="mt-9 gap-4">
            <h3 className="flex items-center justify-around font-semibold text-md">
              {" "}
              <BriefcaseBusiness size={20} /> Switch Organization{" "}
              <ChevronDown size={16} />
            </h3>
            <a href="dashboard">
              <h3 className="flex items-center justify-start px-2 font-semibold gap-4 text-md opacity-50">
                {" "}
                <LayoutDashboard size={20} /> Dashboard{" "}
              </h3>
            </a>
          </SidebarHeader>
          <SidebarGroup>
            <SidebarGroupLabel className="font-semibold text-[.85em] text-secondary uppercase px-4">
              Customers
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {" "}
                {/* Added this wrapper */}
                {customers.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      asChild
                      className="text-secondary/50 hover:text-secondary px-4 hover:bg-secondary/5 py-5"
                    >
                      <a href={item.link || "#"} className="px-2 ">
                        {item.icon}
                        <span className="font-medium text-md ">
                          {item.label}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>{" "}
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel className="font-semibold text-[.85em] text-secondary uppercase px-4">
              Businesses
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {businesses.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton className="text-secondary/50 hover:text-secondary px-4 py-5">
                      {item.icon}
                      <span className="font-medium text-md ">{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup className="mb-20 ">
            <SidebarGroupLabel className="font-semibold text-[.85em] text-secondary uppercase px-4">
              settings
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {settings.map((item) => (
                  <SidebarMenuItem key={item.label} className="">
                    <SidebarMenuButton className="text-secondary/50 hover:text-secondary px-4 py-5">
                      {item.icon}
                      <span className="font-medium text-md ">{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarFooter />
        </SidebarContent>
      </ShadSidebar>
    </>
  );
}

export default Sidebar;
