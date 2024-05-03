"use client";
import { usePathname } from "next/navigation";
import { Tabs, Tab } from "@nextui-org/react";
import { useEffect, useState } from "react";

const menu = {
  equipment: [
    { name: "Equipment", link: "/equipment" },
    { name: "Track", link: "/equipment/track" },
    { name: "Control", link: "/equipment/control" },
    { name: "Reports", link: "/equipment/reports" },
  ],
};

export interface tab {
  name: string;
  link: string;
}

const TabsMenu = () => {
  const pathname = usePathname();

  const [tabs, setTabs] = useState<tab[]>(menu.equipment);

  useEffect(() => {
    console.log(pathname);
    switch (pathname) {
      case "/equipment":
        setTabs(menu.equipment);
        break;

      default:
        setTabs([]);
        break;
    }
  }, [pathname]);

  return (
    <Tabs
      variant="light"
      aria-label="Tabs variants"
      classNames={{
        cursor: "group-data-[selected=true]:bg-[#06b6d425]",
        tabContent: "group-data-[selected=true]:text-[#06b6d4]",
      }}
      selectedKey={pathname}
    >
      {tabs?.map(({ name, link }) => (
        <Tab key={link} title={name} href={link} />
      ))}
    </Tabs>
  );
};

export default TabsMenu;
