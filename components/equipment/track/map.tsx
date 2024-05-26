"use client";
import { useCallback, useState } from "react";
import { useAppDispatch } from "@/components/hooks/rtk";
import dynamic from "next/dynamic";
import { devicesActions } from "@/store";

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

const MapOverlay = dynamic(() => import("@/map/overlay/MapOverlay"), {
  ssr: false,
});

const MapAccuracy = dynamic(() => import("@/map/main/MapAccuracy"), {
  ssr: false,
});

const MapLiveRoutes = dynamic(() => import("@/map/main/MapLiveRoutes"), {
  ssr: false,
});

const MapDefaultCamera = dynamic(() => import("@/map/main/MapDefaultCamera"), {
  ssr: false,
});

const MapSelectedDevice = dynamic(
  () => import("@/map/main/MapSelectedDevice"),
  {
    ssr: false,
  }
);

const PoiMap = dynamic(() => import("@/map/main/PoiMap"), {
  ssr: false,
});

const TrackMap = ({
  filteredPositions,
  selectedPosition,
  onEventsClick,
}: {
  filteredPositions?: any;
  selectedPosition?: any;
  onEventsClick?: any;
}) => {
  const dispatch = useAppDispatch();

  //   const eventsAvailable = useSelector((state) => !!state.events.items.length);

  //   const features = useFeatures();

  const onMarkerClick = useCallback(
    (_: any, deviceId: any) => {
      dispatch(devicesActions.selectId(deviceId));
    },
    [dispatch]
  );

  return (
    <>
      <MapView>
        <MapOverlay />
        <MapGeofence />
        <MapAccuracy positions={filteredPositions} />
        <MapLiveRoutes />
        <MapPositions
          positions={filteredPositions}
          onClick={onMarkerClick}
          selectedPosition={selectedPosition}
          showStatus
          titleField={""}
        />
        <MapDefaultCamera />
        <MapSelectedDevice />
        <PoiMap />
      </MapView>
      {/* <MapScale />
      <MapCurrentLocation />
      <MapGeocoder />
      {!features.disableEvents && (
        <MapNotification enabled={eventsAvailable} onClick={onEventsClick} />
      )}
      {desktop && (
        <MapPadding left={parseInt(theme.dimensions.drawerWidthDesktop, 10)} />
      )} */}
    </>
  );
};

export default TrackMap;
