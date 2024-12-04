import { LucideIcon } from "lucide-react";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

interface LoanMenuItemProps {
  title: string;
  url: string;
  Icon: LucideIcon;
}

const LoanMenuItem = ({ title, url, Icon }: LoanMenuItemProps) => {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <a href={url}>
          <Icon />
          <span>{title}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default LoanMenuItem;