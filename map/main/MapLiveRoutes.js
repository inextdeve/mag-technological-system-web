import { useId, useEffect } from "react";
import { useSelector } from "react-redux";
import { map } from "../core/MapView";
import { useAttributePreference } from "@/helpers/preferences";

const MapLiveRoutes = () => {
  const id = useId();

  const type = useAttributePreference("mapLiveRoutes", "none");

  const devices = useSelector((state) => state.devices.items);
  const selectedDeviceId = useSelector((state) => state.devices.selectedId);

  const history = useSelector((state) => state.session.history);

  useEffect(() => {
    if (type !== "none") {
      map.addSource(id, {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [],
          },
        },
      });
      map.addLayer({
        source: id,
        id,
        type: "line",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": ["get", "color"],
          "line-width": 2,
        },
      });

      return () => {
        if (map.getLayer(id)) {
          map.removeLayer(id);
        }
        if (map.getSource(id)) {
          map.removeSource(id);
        }
      };
    }
    return () => {};
  }, [type]);

  useEffect(() => {
    if (type !== "none") {
      const deviceIds = Object.values(devices)
        .map((device) => device.id)
        .filter((id) => (type === "selected" ? id === selectedDeviceId : true))
        .filter((id) => history.hasOwnProperty(id));

      map.getSource(id)?.setData({
        type: "FeatureCollection",
        features: deviceIds.map((deviceId) => ({
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: history[deviceId],
          },
          properties: {
            // #3bb2d0 this color added manually you can add it from ui automatically
            color: devices[deviceId].attributes["web.reportColor"] || "#3bb2d0",
          },
        })),
      });
    }
  }, [type, devices, selectedDeviceId, history]);

  return null;
};

export default MapLiveRoutes;
