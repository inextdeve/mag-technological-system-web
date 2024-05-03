import {
  LogoIcon,
  MagIcon,
  NECIcon,
} from "@/components/icons/corporate/corporate";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 items-center container mx-auto pt-40">
      {children}
      <footer className="flex gap-8 justify-center col-span-2 items-center -translate-y-10">
        <div>
          <MagIcon />
        </div>
        <div>
          <NECIcon />
        </div>
        <div>
          <LogoIcon />
        </div>
      </footer>
    </div>
  );
}
