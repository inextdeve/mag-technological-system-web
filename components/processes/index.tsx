"use client";
import { useState } from "react";
import ZonesMap from "../home/zones-map";
import useFilter from "../hooks/useFilter";
import Map from "./map";
import TimeTable from "./timetable";
import ZoneCard from "./zone-card";
import usePersistedState from "@/helpers/usePersistedState";
import { useAppSelector } from "../hooks/rtk";
import TrackMap from "../equipment/track/map";

const Processes = () => {
  // Mo9atan
  const positions = useAppSelector((state) => state.session.positions);

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
  // Salat mo9atan

  return (
    <div className="absolute top-0 w-full h-fit left-0 process-map-container">
      <div className="relative w-full h-[70vh] process-map-wrapper">
        <div className="absolute inset-x-0 inset-y-0">
          {/* <Map />
           */}
          <TrackMap filteredPositions={filteredPositions} />
        </div>
      </div>
      {/* Add content here */}
      <div className="w-[70%] px-4 min-w-300px">
        <h4 className="text-yellow-m">Timetable</h4>
        <TimeTable />
      </div>
      <ZoneCard />
    </div>
  );
};

export default Processes;
