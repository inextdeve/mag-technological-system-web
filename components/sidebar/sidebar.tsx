import React from "react";
import { Sidebar } from "./sidebar.styles";
import { Avatar, Tooltip } from "@nextui-org/react";
import { CompaniesDropdown } from "./companies-dropdown";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { FilterIcon } from "../icons/sidebar/filter-icon";
import { useSidebarContext } from "../layout/layout-context";
import { usePathname } from "next/navigation";
import { Cpu, LineChart, ShieldCheck, Sparkles, Truck } from "lucide-react";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed}>
          Click
        </div>
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <CompaniesDropdown />
        </div>
        <h4 className="text-2xl font-semibold pl-3">
          Technological
          <br />
          <span className="text-yellow-m">System</span>
        </h4>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Home"
              icon={<HomeIcon />}
              isActive={pathname === "/"}
              href="/"
            />
            <SidebarMenu title="Main Menu">
              <SidebarItem
                isActive={pathname.indexOf("/equipment") > -1}
                title="Equipment"
                icon={<Truck className="text-default-400" />}
                href="/equipment"
              />
              {/* <CollapseItems
                icon={<BalanceIcon />}
                items={["Banks Accounts", "Credit Cards", "Loans"]}
                title="Balances"
              /> */}
              <SidebarItem
                isActive={pathname.indexOf("/employment") > -1}
                title="Employment"
                icon={<CustomersIcon />}
                href="/employment"
              />
              <SidebarItem
                isActive={pathname.indexOf("/processes") > -1}
                title="Processes"
                icon={<Cpu className="text-default-400" />}
                href="/processes"
              />
              <SidebarItem
                isActive={pathname.indexOf("/financial") > -1}
                title="Financial Summaries"
                icon={<LineChart className="text-default-400" />}
                href="/financial"
              />
              <SidebarItem
                isActive={pathname.indexOf("/quality") > -1}
                title="Quality Management"
                icon={<Sparkles className="text-default-400" />}
                href="/quality"
              />
              <SidebarItem
                isActive={pathname.indexOf("/safety-management") > -1}
                title="Safety Management"
                icon={<ShieldCheck className="text-default-400" />}
                href="safety-management"
              />
              <SidebarItem
                isActive={pathname === "/settings"}
                title="Settings"
                icon={<SettingsIcon />}
                href="/settings"
              />
            </SidebarMenu>
          </div>
          <div className={Sidebar.Footer()}>
            <Tooltip content={"Settings"} color="primary">
              <div className="max-w-fit">
                <SettingsIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Adjustments"} color="primary">
              <div className="max-w-fit">
                <FilterIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Profile"} color="primary">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                size="sm"
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </aside>
  );
};
