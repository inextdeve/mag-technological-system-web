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
    <div className="grid lg:grid-cols-3 grid-cols-1 items-center container mx-auto lg:pt-40 pt-20">
      {children}
      <footer className="flex gap-8 justify-center col-span-2 items-center lg:-translate-y-10">
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
