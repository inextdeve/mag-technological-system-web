import { Button } from "@nextui-org/react";
import { FileText, Sheet } from "lucide-react";

const DownloadFile = () => {
  return (
    <div className="flex items-center gap-3">
      <span>Download: </span>
      <Button>
        <Sheet className="w-6 h-6" />
      </Button>
      <Button>
        <FileText className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default DownloadFile;
