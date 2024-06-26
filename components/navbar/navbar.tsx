import { Input, Link, Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";
import { FeedbackIcon } from "../icons/navbar/feedback-icon";
import { GithubIcon } from "../icons/navbar/github-icon";
import { SupportIcon } from "../icons/navbar/support-icon";
import { SearchIcon } from "../icons/searchicon";
import { BurguerButton } from "./burguer-button";
import { NotificationsDropdown } from "./notifications-dropdown";
import { UserDropdown } from "../sidebar/user-dropdown/user-dropdown";
import Logo from "../logo";
import FullscreenButton from "./fullscreen-button";
import TabsMenu from "./tabs";

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto">
      <Navbar
        isBordered
        className="w-full bg-white/60 dark:bg-background/60"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent className="xl:hidden">
          <BurguerButton />
        </NavbarContent>
        <NavbarContent justify="end">
          <TabsMenu />
        </NavbarContent>

        <NavbarContent justify="end">
          <FullscreenButton />
        </NavbarContent>
        <NavbarContent className="max-w-fit max-md:hidden" justify="end">
          <Input
            startContent={<SearchIcon />}
            isClearable
            className="max-w-[220px]"
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search..."
          />
        </NavbarContent>
        <NavbarContent justify="end" className="max-w-fit">
          <Logo />
        </NavbarContent>
        {/* <NavbarContent
          justify="end"
          className="w-fit data-[justify=end]:flex-grow-0"
        >
          <div className="flex items-center gap-2 max-md:hidden">
            <FeedbackIcon />
            <span>Feedback?</span>
          </div>

          <NotificationsDropdown />

          <div className="max-md:hidden">
            <SupportIcon />
          </div>

          <Link
            href="https://github.com/Siumauricio/nextui-dashboard-template"
            target={"_blank"}
          >
            <GithubIcon />
          </Link>
          <NavbarContent>
            <UserDropdown />
          </NavbarContent>
        </NavbarContent> */}
      </Navbar>
      <div className="mt-3 md:p-8 p-1">{children}</div>
    </div>
  );
};
