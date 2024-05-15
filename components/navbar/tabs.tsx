"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/helpers/utils";

const menu = {
  equipment: [
    { name: "Equipment", link: "/equipment" },
    { name: "Track", link: "/equipment/track" },
    { name: "Control", link: "/equipment/control" },
    { name: "Reports", link: "/equipment/reports" },
  ],
  financial: [
    { name: "Summary", link: "/financial" },
    { name: "Reports", link: "/financial/reports" },
    { name: "Details", link: "/financial/details" },
  ],
};

export interface tab {
  name: string;
  link: string;
}

const TabsMenu = () => {
  const pathname = usePathname();

  const [tabs, setTabs] = useState<tab[]>([]);

  useEffect(() => {
    if (pathname.indexOf("equipment") > -1) setTabs(menu.equipment);
    else if (pathname.indexOf("financial") > -1) setTabs(menu.financial);
    else setTabs([]);
  }, [pathname]);

  return (
    <div className="flex gap-2">
      {tabs?.map(({ name, link }) => (
        <Link
          key={link}
          title={name}
          href={link}
          className={cn("text-sm p-1 px-3 rounded-md font-medium", {
            "text-[#06b6d4] bg-[#06b6d425]":
              pathname.indexOf(link) > -1 && pathname.length == link.length,
          })}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default TabsMenu;
