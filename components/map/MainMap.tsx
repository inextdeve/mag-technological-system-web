"use client";
import React, { useEffect, useState } from "react";
import MapView from "../../map/core/MapView";
import MapPositions from "../../map/MapPositions";
import { positions as pos } from "./data";
import usePersistedState from "@/helpers/usePersistedState";
import useFilter from "@/components/hooks/useFilter";
import { useSelector } from "react-redux";

const MainMap = () => {
  const positions = useSelector((state) => state.session.positions);

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
          // onClick={onMarkerClick}
          // selectedPosition={selectedPosition}
          showStatus
        />
      </MapView>
    </>
  );
};

export default MainMap;
