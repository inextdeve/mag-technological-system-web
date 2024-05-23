// @ts-nocheck
import { useId, useEffect } from "react";
import { map } from "./core/MapView";
import { useAppSelector } from "@/components/hooks/rtk";

const MapRoutePath = ({
  name,
  positions,
  coordinates,
}: {
  name?: string;
  positions: any;
  coordinates?: any;
}) => {
  const id = useId();

  const reportColor = useAppSelector((state) => {
    const position = positions?.find(() => true);
    if (position) {
      const attributes = state.devices.items[position.deviceId]?.attributes;
      if (attributes) {
        const color = attributes["web.reportColor"];
        if (color) {
          return color;
        }
      }
    }
    return "#d68104";
  });

  useEffect(() => {
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
      id: `${id}-line`,
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
    if (name) {
      map.addLayer({
        source: id,
        id: `${id}-title`,
        type: "symbol",
        layout: {
          "text-field": "{name}",
          "text-size": 12,
        },
        paint: {
          "text-halo-color": "white",
          "text-halo-width": 1,
        },
      });
    }

    return () => {
      if (map.getLayer(`${id}-title`)) {
        map.removeLayer(`${id}-title`);
      }
      if (map.getLayer(`${id}-line`)) {
        map.removeLayer(`${id}-line`);
      }
      if (map.getSource(id)) {
        map.removeSource(id);
      }
    };
  }, []);

  useEffect(() => {
    if (!coordinates) {
      coordinates = positions.map((item) => [item.longitude, item.latitude]);
    }
    map.getSource(id)?.setData({
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates,
      },
      properties: {
        name,
        color: reportColor,
      },
    });
  }, [positions, coordinates, reportColor]);

  return null;
};

export default MapRoutePath;
