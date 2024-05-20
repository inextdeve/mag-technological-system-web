"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import React, { useState } from "react";
import { AcmeIcon } from "../icons/acme-icon";
import { AcmeLogo } from "../icons/acmelogo";
import { BottomIcon } from "../icons/sidebar/bottom-icon";
import { MagIcon } from "../icons/corporate/corporate";

interface Company {
  name: string;
  location: string;
  logo: React.ReactNode;
}

export const CompaniesDropdown = () => {
  const [company, setCompany] = useState<Company>({
    name: "MAG",
    location: "GROUP",
    logo: <AcmeIcon />,
  });
  return (
    <Dropdown
      classNames={{
        base: "w-full min-w-[260px]",
      }}
    >
      <DropdownTrigger className="cursor-pointer">
        <div className="flex items-center gap-2">
          <MagIcon size="md" />
          <BottomIcon />
        </div>
      </DropdownTrigger>
      <DropdownMenu
        // onAction={(e) => {
        //   if (e === "1") {
        //     setCompany({
        //       name: "Navigation",
        //       location: "Navigate trough routes",
        //       logo: <AcmeIcon />,
        //     });
        //   }
        //   if (e === "2") {
        //     setCompany({
        //       name: "Track",
        //       location: "Tracking sys",
        //       logo: <AcmeIcon />,
        //     });
        //   }
        //   if (e === "3") {
        //     setCompany({
        //       name: "Reports",
        //       location: "Data",
        //       logo: <AcmeIcon />,
        //     });
        //   }
        // }}
        aria-label="Avatar Actions"
      >
        <DropdownSection title="Projects">
          <DropdownItem
            key="1"
            startContent={<AcmeIcon />}
            description="Navigate everywhere"
            classNames={{
              base: "py-4",
              title: "text-base font-semibold",
            }}
          >
            Navigation
          </DropdownItem>
          <DropdownItem
            key="2"
            startContent={<AcmeLogo />}
            description="Multi Data, One Place"
            classNames={{
              base: "py-4",
              title: "text-base font-semibold",
            }}
          >
            Reports
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
