// @ts-nochecks
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import ButtonLink from "../button-link";
import dynamic from "next/dynamic";
import TrackMap from "../equipment/track/map";
import useFilter from "../hooks/useFilter";
import { useState } from "react";
import usePersistedState from "@/helpers/usePersistedState";
import { useAppSelector } from "../hooks/rtk";

const MapView = dynamic(() => import("@/map/core/MapView"), { ssr: false });

const ZonesMap = () => {
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

  return (
    <Card className="bg-default-50 rounded-xl shadow-md w-full p-0">
      <CardBody className="gap-6 min-h-[400px] p-0">
        <TrackMap filteredPositions={filteredPositions} />
      </CardBody>
      <CardFooter className="flex justify-center">
        <ButtonLink href="/equipment/track">Details</ButtonLink>
      </CardFooter>
    </Card>
  );
};

export default ZonesMap;
