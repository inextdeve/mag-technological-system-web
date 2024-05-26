//@ts-nocheck
import MapView from "@/map/core/MapView";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Progress,
} from "@nextui-org/react";
import Image from "next/image";

const Navigation = () => {
  return (
    <Card classNames={{ footer: "w-full" }}>
      <CardBody className="min-h-[400px]">
        <div className="h-full rounded-md overflow-hidden">
          <MapView></MapView>
        </div>
      </CardBody>
      <CardFooter className="grid gap-1">
        <p>King Fahd Industrial Port</p>
        <span className="text-sm text-gray-400">MM Feeder Road, Kolkata</span>
        <div className="flex gap-3 text-small items-center text-gray-400">
          <span>2KM</span>{" "}
          <Progress
            aria-label="Loading..."
            value={60}
            className="w-full"
            size="sm"
            classNames={{ indicator: "bg-[#0AB9BF]" }}
          />{" "}
          <span>3MIN</span>
        </div>
      </CardFooter>
    </Card>
  );
};

const Camera = () => {
  return (
    <Card>
      <CardHeader>
        <h4 className="text-xl font-semibold">Camera</h4>
      </CardHeader>
      <CardBody className="grid gap-2">
        <div className="relative min-h-36">
          <Image
            alt="camera"
            src="https://s3-alpha-sig.figma.com/img/1dbc/3dc4/0e1725565d04de6ceb26d5835e0f826d?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EacTzTrqw0ZwECs6im2bd2FJ4FO~lFJgPs3oBX5yMvhC8MDX3EX-OTMHzvn4UAhBuRuYAAT~FktbM3nnzRsL6CSr7o-JrqXrFOhDwtFKOGDJ9CqPPlYR5LamhWdyXNsHgs9slK4I7MBA6gnGEdqtmqTQMXn6KlrdmhoXao3KhVgrZDbm1UF2S580DR~JS1A7nQ0Uxve0zRLsSz--8fSXcDCh8uOpiOKugkKhV3hj~muI5L7S2Ss95LLPluBkl9uXbWQoR2E4pG2f~A1SXCjRjW0d6iuGyO9NpmDtUQEeDbW~I70Et2i2blIa0HfYdjZfh-G0nqwsZb2El8yKgTkvcQ__"
            fill={true}
          />
        </div>
        <div className="relative min-h-36">
          <Image
            alt="camera"
            src="https://s3-alpha-sig.figma.com/img/1dbc/3dc4/0e1725565d04de6ceb26d5835e0f826d?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EacTzTrqw0ZwECs6im2bd2FJ4FO~lFJgPs3oBX5yMvhC8MDX3EX-OTMHzvn4UAhBuRuYAAT~FktbM3nnzRsL6CSr7o-JrqXrFOhDwtFKOGDJ9CqPPlYR5LamhWdyXNsHgs9slK4I7MBA6gnGEdqtmqTQMXn6KlrdmhoXao3KhVgrZDbm1UF2S580DR~JS1A7nQ0Uxve0zRLsSz--8fSXcDCh8uOpiOKugkKhV3hj~muI5L7S2Ss95LLPluBkl9uXbWQoR2E4pG2f~A1SXCjRjW0d6iuGyO9NpmDtUQEeDbW~I70Et2i2blIa0HfYdjZfh-G0nqwsZb2El8yKgTkvcQ__"
            fill={true}
          />
        </div>
        <div className="relative min-h-36">
          <Image
            alt="camera"
            src="https://s3-alpha-sig.figma.com/img/1dbc/3dc4/0e1725565d04de6ceb26d5835e0f826d?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EacTzTrqw0ZwECs6im2bd2FJ4FO~lFJgPs3oBX5yMvhC8MDX3EX-OTMHzvn4UAhBuRuYAAT~FktbM3nnzRsL6CSr7o-JrqXrFOhDwtFKOGDJ9CqPPlYR5LamhWdyXNsHgs9slK4I7MBA6gnGEdqtmqTQMXn6KlrdmhoXao3KhVgrZDbm1UF2S580DR~JS1A7nQ0Uxve0zRLsSz--8fSXcDCh8uOpiOKugkKhV3hj~muI5L7S2Ss95LLPluBkl9uXbWQoR2E4pG2f~A1SXCjRjW0d6iuGyO9NpmDtUQEeDbW~I70Et2i2blIa0HfYdjZfh-G0nqwsZb2El8yKgTkvcQ__"
            fill={true}
          />
        </div>
        <div className="relative min-h-36">
          <Image
            alt="camera"
            src="https://s3-alpha-sig.figma.com/img/1dbc/3dc4/0e1725565d04de6ceb26d5835e0f826d?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EacTzTrqw0ZwECs6im2bd2FJ4FO~lFJgPs3oBX5yMvhC8MDX3EX-OTMHzvn4UAhBuRuYAAT~FktbM3nnzRsL6CSr7o-JrqXrFOhDwtFKOGDJ9CqPPlYR5LamhWdyXNsHgs9slK4I7MBA6gnGEdqtmqTQMXn6KlrdmhoXao3KhVgrZDbm1UF2S580DR~JS1A7nQ0Uxve0zRLsSz--8fSXcDCh8uOpiOKugkKhV3hj~muI5L7S2Ss95LLPluBkl9uXbWQoR2E4pG2f~A1SXCjRjW0d6iuGyO9NpmDtUQEeDbW~I70Et2i2blIa0HfYdjZfh-G0nqwsZb2El8yKgTkvcQ__"
            fill={true}
          />
        </div>
      </CardBody>
    </Card>
  );
};

const NavigationCamera = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 h-full">
      <Navigation />
      <Camera />
    </div>
  );
};

export default NavigationCamera;
