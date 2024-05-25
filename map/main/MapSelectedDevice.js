import { useEffect } from "react";

import { useSelector } from "react-redux";
import { map } from "../core/MapView";
import { usePrevious } from "@/helpers/reactHelper";
import { useAttributePreference } from "@/helpers/preferences";

const dimensions = {
  sidebarWidth: "28%",
  sidebarWidthTablet: "52px",
  drawerWidthDesktop: "400px",
  drawerWidthTablet: "320px",
  drawerHeightPhone: "250px",
  filterFormWidth: "160px",
  eventsDrawerWidth: "320px",
  bottomBarHeight: 56,
  popupMapOffset: 300,
  popupMaxWidth: 360,
  popupImageHeight: 144,
};

const MapSelectedDevice = () => {
  const selectedDeviceId = useSelector((state) => state.devices.selectedId);
  const previousDeviceId = usePrevious(selectedDeviceId);

  const selectZoom = useAttributePreference("web.selectZoom", 10);
  const mapFollow = useAttributePreference("mapFollow", false);

  const position = useSelector(
    (state) => state.session.positions[selectedDeviceId]
  );

  useEffect(() => {
    if ((selectedDeviceId !== previousDeviceId || mapFollow) && position) {
      map.easeTo({
        center: [position.longitude, position.latitude],
        zoom: Math.max(map.getZoom(), selectZoom),
        offset: [0, -dimensions.popupMapOffset / 2],
      });
    }
  });

  return null;
};

export default MapSelectedDevice;
