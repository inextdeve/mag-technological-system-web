import { Button } from "@nextui-org/react";
import { Fullscreen } from "lucide-react";

const FullscreenButton = () => {
  return (
    <Button variant="light" size="sm">
      <Fullscreen className="w-7 h-7 text-cyan-500" />
    </Button>
  );
};

export default FullscreenButton;
