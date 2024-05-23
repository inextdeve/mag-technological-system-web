"use client";
import React, { useEffect, useState } from "react";
import MapPositions from "../../map/MapPositions";
import { positions as pos } from "./data";
import usePersistedState from "@/helpers/usePersistedState";
import useFilter from "@/components/hooks/useFilter";
import { useAppSelector } from "../hooks/rtk";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("@/map/core/MapView"), { ssr: false });

const MainMap = () => {
  const positions = useAppSelector((state) => state.session.positions);

  const [filteredPositions, setFilteredPositions] = useState([]);
  const [keyword, setKeyword] = useState("");

  const [filteredDevices, setFilteredDevices] = useState([]);

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

  return (
    <>
      <MapView>
        <MapPositions
          titleField={""}
          positions={filteredPositions}
          // On mark click
          onClick={() => {}}
          // Send selected position
          selectedPosition={[]}
          showStatus
        />
      </MapView>
    </>
  );
};

export default MainMap;
