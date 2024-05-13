"use client";
import TimeRange from "./time-range";
import Toolbar from "./toolbar";
import { useCallback, useState } from "react";
import { useCatch } from "@/helpers/reactHelper";
import { useSelector } from "react-redux";
import DevicesList from "./device-list";
import MapRoutePath from "@/map/MapRoutePath";
import MapRoutePoints from "@/map/MapRoutePoints";
import MapPositions from "@/map/MapPositions";
import MapView from "@/map/core/MapView";
import MapGeofence from "@/map/MapGeofence";
import StatusBar from "./status-bar";
import StatusCard from "./status-card";
import Carousel from "./carousel";

const Track = () => {
  const defaultDeviceId = useSelector((state) => state.devices.selectedId);

  const [positions, setPositions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selectedDeviceId, setSelectedDeviceId] = useState(defaultDeviceId);
  const [showCard, setShowCard] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [expanded, setExpanded] = useState(true);
  const [playing, setPlaying] = useState(false);

  const handleSubmit = useCatch(async ({ deviceId = 195, from, to }) => {
    setSelectedDeviceId(deviceId);

    const query = new URLSearchParams({ deviceId, from, to });
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
  });

  const onPointClick = useCallback(
    (_, index) => {
      setIndex(index);
    },
    [setIndex]
  );

  const onMarkerClick = useCallback(
    (positionId) => {
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
