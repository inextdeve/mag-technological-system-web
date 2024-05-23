// @ts-nocheck
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("@/map/core/MapView"), { ssr: false });

const Map = () => {
  return <MapView></MapView>;
};

export default Map;
