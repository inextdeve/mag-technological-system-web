"use client";
import TimeRange from "./time-range";
import Toolbar from "./toolbar";
import { useCallback, useState } from "react";
import { useCatch } from "@/helpers/reactHelper";
import DevicesList from "./device-list";
import StatusBar from "./status-bar";
import StatusCard from "./status-card";
import Carousel from "./carousel";
import { useAppSelector } from "@/components/hooks/rtk";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("@/map/core/MapView"), { ssr: false });
const MapRoutePath = dynamic(() => import("@/map/MapRoutePath"), {
  ssr: false,
});
const MapRoutePoints = dynamic(() => import("@/map/MapRoutePoints"), {
  ssr: false,
});
const MapPositions = dynamic(() => import("@/map/MapPositions"), {
  ssr: false,
});
const MapGeofence = dynamic(() => import("@/map/MapGeofence"), { ssr: false });

const Track = () => {
  const defaultDeviceId = useAppSelector((state) => state.devices.selectedId);

  const [positions, setPositions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selectedDeviceId, setSelectedDeviceId] = useState(defaultDeviceId);
  const [showCard, setShowCard] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [expanded, setExpanded] = useState(true);
  const [playing, setPlaying] = useState(false);

  const handleSubmit = useCatch(
    async ({
      deviceId = 195,
      from,
      to,
    }: {
      deviceId: number;
      from: string;
      to: string;
    }) => {
      setSelectedDeviceId(deviceId);

      const query = new URLSearchParams({
        deviceId: deviceId.toLocaleString(),
        from,
        to,
      });
      const response = await fetch(`/api/positions?${query.toString()}`);
      if (response.ok) {
        setIndex(0);
        const positions = await response.json();
        setPositions(positions);
        if (positions.length) {
          setExpanded(false);
        } else {
          throw Error("no data");
        }
      } else {
        throw Error(await response.text());
      }
    }
  );

  const onPointClick = useCallback(
    (_: unknown, index: number) => {
      setIndex(index);
    },
    [setIndex]
  );

  const onMarkerClick = useCallback(
    (positionId: number) => {
      setShowCard(!!positionId);
    },
    [setShowCard]
  );

  return (
    <>
      <TimeRange setFrom={setFrom} setTo={setTo} />
      <div className="min-h-[500px] w-full grid mt-10 rounded-md overflow-hidden relative">
        <Toolbar>
          <DevicesList handleSubmit={() => handleSubmit({ from, to })} />
        </Toolbar>
        <StatusBar />
        <StatusCard />
        <MapView>
          <MapGeofence />
          <MapRoutePath positions={positions} />
          <MapRoutePoints positions={positions} onClick={onPointClick} />
          {index < positions.length && (
            //@ts-ignore
            <MapPositions
              positions={[positions[index]]}
              onClick={onMarkerClick}
              titleField="fixTime"
            />
          )}
        </MapView>
        <Carousel />
      </div>
    </>
  );
};

export default Track;
