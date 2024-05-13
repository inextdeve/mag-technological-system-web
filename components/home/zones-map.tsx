import MapView from "@/map/core/MapView";
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import ButtonLink from "../button-link";

const ZonesMap = () => {
  return (
    <Card className="bg-default-50 rounded-xl shadow-md w-full p-0">
      <CardBody className="gap-6 min-h-[400px] p-0">
        <MapView></MapView>
      </CardBody>
      <CardFooter className="flex justify-center">
        <ButtonLink href="/">Details</ButtonLink>
      </CardFooter>
    </Card>
  );
};

export default ZonesMap;
