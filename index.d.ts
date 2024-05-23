interface FullScreenHandle {
  active: boolean;
  // Specifies if attached element is currently full screen.

  enter: () => Promise<void>;
  // Requests this element to go full screen.

  exit: () => Promise<void>;
  // Requests this element to exit full screen.

  node: React.MutableRefObject<HTMLDivElement | null>;
  // The attached DOM node
}
interface FullScreenProps {
  handle: FullScreenHandle;
  // Handle that helps operate the full screen state.

  onChange?: (state: boolean, handle: FullScreenHandle) => void;
  // Optional callback that gets called when this screen changes state.

  className?: string;
  // Optional prop allowing you to apply a custom class name to the FullScreen container
}

interface Device {
  id: number;
  name: string;
  uniqueid: string;
  lastUpdate: Date | null;
  positionid: number | null;
  groupid: number | null;
  attributes: string | null;
  phone: string | null;
  model: string | null;
  contact: string | null;
  category: string | null;
  disabled: boolean | null;
  status: string | null;
  expirationtime: Date | null;
  motionstate: boolean | null;
  motiontime: Date | null;
  motiondistance: number | null;
  overspeedstate: boolean | null;
  overspeedtime: Date | null;
  overspeedgeofenceid: number | null;
  motionstreak: boolean | null;
  calendarid: number | null;
}
