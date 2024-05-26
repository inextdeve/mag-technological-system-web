//@ts-nocheck
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";
import { DarkModeSwitch } from "../../navbar/darkmodeswitch";
import { useAppSelector } from "../../hooks/rtk";
import dynamic from "next/dynamic";
const LogoutItem = dynamic(() => import("./logout-item"), { ssr: false });

export const UserDropdown = () => {
  const user = useAppSelector((state) => state.session.user);
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar as="button" color="warning" size="md" />
      </DropdownTrigger>

      <DropdownMenu
        aria-label="User menu actions"
        onAction={(actionKey) => console.log({ actionKey })}
      >
        <DropdownItem
          key="profile"
          className="flex flex-col justify-start w-full items-start"
        >
          <p>Signed in as</p>
          <p>{user?.email}</p>
        </DropdownItem>
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem
          key="logout"
          color="danger"
          className="text-danger relative min-h-8"
        >
          <LogoutItem />
        </DropdownItem>
        <DropdownItem key="switch">
          <DarkModeSwitch />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
