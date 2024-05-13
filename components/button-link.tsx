import Link from "next/link";
import { ReactNode } from "react";

const ButtonLink = ({
  href,
  children,
}: {
  href: string;
  children?: ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-3 h-8 text-tiny gap-2 rounded-small [&>svg]:max-w-[theme(spacing.8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover bg-[#D5E5FF] text-[#344BFD] min-w-[150px]"
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
