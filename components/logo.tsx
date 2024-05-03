import { LogoIcon, NECIcon } from "./icons/corporate/corporate";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div>
        <NECIcon size="sm" />
      </div>
      <div>
        <LogoIcon size="sm" />
      </div>
    </div>
  );
};

export default Logo;
