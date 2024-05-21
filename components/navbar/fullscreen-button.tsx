import { Button } from "@nextui-org/react";
import { Fullscreen } from "lucide-react";
import { useFullScreenHandle } from "react-full-screen";
import { useFullScreen } from "@/app/providers";
import { useState } from "react";

const FullscreenButton = () => {
  const handleScreen = useFullScreen as typeof useFullScreenHandle;

  // const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <Button variant="light" size="sm" onClick={handleScreen().enter}>
      <Fullscreen className="w-7 h-7 text-cyan-500" />
    </Button>
  );
};

export default FullscreenButton;
