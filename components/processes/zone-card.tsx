import MapView from "@/map/core/MapView";
import { Progress } from "@nextui-org/react";
import Truck1 from "@/resources/images/png/truck2-rm-later.png";
import Truck2 from "@/resources/images/png/truck-rm-later.png";
import TomMap from "@/resources/images/png/tomtom-rm-later.png";
import Image from "next/image";
import GlassCard from "../glassmorphism/glass-card";
const ZoneCard = () => {
  return (
    <GlassCard className="w-[28%] absolute bottom-4 right-4 border-1 border-white rounded-lg p-6">
      <div className="flex gap-2 items-center my-1">
        <span className="w-fit text-nowrap">Zone 04 </span>
        <Progress size="lg" aria-label="Loading..." value={50} />
      </div>
      <div className="rounded-lg overflow-hidden m-2">
        <div className="w-full h-[200px] relative overflow-hidden">
          {/* <MapView></MapView> */}
          <Image src={TomMap} fill alt="zone-map" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-2">
        <div className="relative h-36 p-1 border-1 border-white rounded-sm">
          <Image src={Truck1} fill alt="truck" />
        </div>
        <div className="relative h-36 p-1 border-1 border-white rounded-sm">
          <Image src={Truck2} fill alt="truck" />
        </div>
        <div className="relative h-36 p-1 border-1 border-white rounded-sm">
          <Image src={Truck1} fill alt="truck" />
        </div>
        <div className="relative h-36 p-1 border-1 border-white rounded-sm">
          <Image src={Truck2} fill alt="truck" />
        </div>
      </div>
      <div className="mx-6">
        <p className="font-semibold">
          <span className="text-yellow-m">Supervisor1:</span> Ahmed ali
        </p>
        <p className="font-semibold">
          <span className="text-yellow-m">Supervisor1:</span> Moahmemd Saeed
        </p>
      </div>
      <ul className="list-disc mx-4 text-sm">
        <li>
          <span>The expected amount of waste.</span>
          <span className="text-yellow-m">15,243 km.</span>
        </li>
        <li>
          <span>Quantity of waste removed.</span>
          <span className="text-yellow-m">15,243 km.</span>
        </li>
        <li>
          <span>Number of responses submitted.</span>
          <span className="text-yellow-m">15,243 km.</span>
        </li>
        <li>
          <span>Quantity of organic waste.</span>
          <span className="text-yellow-m">15,243 km.</span>
        </li>
        <li>
          <span>Quantity of waste.</span>
          <span className="text-yellow-m">15,243 km.</span>
        </li>
        <li>
          <span>Quantity of scrap.</span>
          <span className="text-yellow-m">15,243 km.</span>
        </li>
        <li>
          <span>Duration of implementation</span>
          <span className="text-yellow-m">11</span>
        </li>
      </ul>
    </GlassCard>
  );
};

export default ZoneCard;
