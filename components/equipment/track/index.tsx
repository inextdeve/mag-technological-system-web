//@ts-nocheck
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
import useFilter from "@/components/hooks/useFilter";
import usePersistedState from "@/helpers/usePersistedState";
import TrackMap from "./map";
import { Button } from "@nextui-org/react";
import { cn } from "@/helpers/utils";

const Track = () => {
  const defaultDeviceId = useAppSelector((state) => state.devices.selectedId);

  const positions = useAppSelector((state) => state.session.positions);
  const devices = useAppSelector((state) => state.devices.items);
  const [index, setIndex] = useState(0);
  const [selectedDeviceId, setSelectedDeviceId] = useState(defaultDeviceId);
  const [showCard, setShowCard] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [expanded, setExpanded] = useState(true);
  const [playing, setPlaying] = useState(false);

  // const handleSubmit = useCatch(
  //   async ({
  //     deviceId = 195,
  //     from,
  //     to,
  //   }: {
  //     deviceId: number;
  //     from: string;
  //     to: string;
  //   }) => {
  //     setSelectedDeviceId(deviceId);

  //     const query = new URLSearchParams({
  //       deviceId: deviceId.toLocaleString(),
  //       from,
  //       to,
  //     });
  //     const response = await fetch(`/api/positions?${query.toString()}`);
  //     if (response.ok) {
  //       setIndex(0);
  //       const positions = await response.json();
  //       setPositions(positions);
  //       if (positions.length) {
  //         setExpanded(false);
  //       } else {
  //         throw Error("no data");
  //       }
  //     } else {
  //       throw Error(await response.text());
  //     }
  //   }
  // );

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
  const [filteredPositions, setFilteredPositions] = useState([]);
  const [filteredDevices, setFilteredDevices] = useState([]);

  const [keyword, setKeyword] = useState("");
  const [filter, setFilter] = usePersistedState("filter", {
    statuses: [],
    groups: [],
  });
  const [filterSort, setFilterSort] = usePersistedState("filterSort", "");
  const [filterMap, setFilterMap] = usePersistedState("filterMap", false);

  useFilter(
    keyword,
    filter,
    filterSort,
    filterMap,
    positions,
    setFilteredDevices,
    setFilteredPositions
  );

  const [showDevices, setShowDevices] = useState(false);

  return (
    <>
      {/* <TimeRange setFrom={setFrom} setTo={setTo} /> */}
      <div className="md:min-h-[500px] h-screen w-full md:grid flex-col mt-10 rounded-md overflow-hidden relative">
        <Button
          className="md:hidden w-full mb-4"
          onClick={() => setShowDevices(true)}
        >
          Devices
        </Button>
        <Toolbar
          className={cn({ hidden: !showDevices })}
          onClose={() => setShowDevices(false)}
        >
          <DevicesList
            handleSubmit={() => {
              // return handleSubmit({ from, to }
              return;
            }}
          />
        </Toolbar>
        <StatusBar />
        {/* <StatusCard /> */}
        <Carousel devices={devices} />

        <TrackMap filteredPositions={filteredPositions} />
      </div>
    </>
  );
};

export default Track;
