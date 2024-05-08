import { Card, CardBody } from "@nextui-org/react";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
//https://s3-alpha-sig.figma.com/img/43fe/76b9/99f3d05b2bcbd33dd1eec804b5bc9787?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cs-T9a5e1kUfSi7pDrfH7YL-OfGXvXN-VDVHQuU8~V77srbrj28GEdFDfpK783HusTE8MmSJvg1y~gRsX5wMumHfhyKLwUW-k-5nybsJDfA9~QzTyy63h5ytjTyGlZULS7Rk57VCV0wMIub1kjRDBmwLK61iLsZKa4Ufk8tROLfFnO8oay3IDb7zYectzZW8fz1q1Dp-W29sQo7d0ZuYZnU8o~tFUGHpjHPjyI7EW2UqfdrJJWWcAX91pWxn~bVaWrODNy7s8QOtWDX7gmAWYEiAzUomKMobadiV7jb5Aazd0ozwcPPdbHYXwvDje3blUDDIvm0-xgaSMNvbj88X0Q__
interface CardProps {
  from: string;
  to: string;
  status: "arrived" | "trip";
  imgSrc: string;
  deviceName: string;
}
const StyledCard = ({ from, to, status, imgSrc, deviceName }: CardProps) => {
  return (
    <Card
      className="p-3 min-w-fit bg-content1"
      classNames={{ base: "flex justify-center items-center" }}
    >
      <CardBody className="overflow-visible py-2">
        <div className="flex gap-2">
          <div className="relative w-36 h-28">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={imgSrc}
              //   width={495}
              //   height={326}
              fill={true}
            />
          </div>
          <div className="grid gap-1">
            <h4 className="font-bold text-large">{deviceName}</h4>
            <p className="text-tiny uppercase font-bold text-yellow-500">
              From: {from}
            </p>
            <p className="text-tiny uppercase font-bold text-yellow-500">
              To: {to}
            </p>
            <small className="text-violet-600 flex items-center gap-2">
              {status === "arrived" ? (
                <>
                  <CircleCheckBig className="w-3 h-3" /> Arrived
                </>
              ) : (
                <>
                  <CircleCheckBig className="w-3 h-3" /> Arrived
                </>
              )}
            </small>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const Carousel = () => {
  return (
    <div className="flex gap-4 items-center absolute bottom-2 right-0 z-30 w-[70%] overflow-x-scroll opacity-20 hover:opacity-100 transition-opacity">
      <StyledCard
        from="Work location"
        to="Malhumn"
        deviceName="CR 9388"
        status="arrived"
        imgSrc="https://s3-alpha-sig.figma.com/img/43fe/76b9/99f3d05b2bcbd33dd1eec804b5bc9787?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cs-T9a5e1kUfSi7pDrfH7YL-OfGXvXN-VDVHQuU8~V77srbrj28GEdFDfpK783HusTE8MmSJvg1y~gRsX5wMumHfhyKLwUW-k-5nybsJDfA9~QzTyy63h5ytjTyGlZULS7Rk57VCV0wMIub1kjRDBmwLK61iLsZKa4Ufk8tROLfFnO8oay3IDb7zYectzZW8fz1q1Dp-W29sQo7d0ZuYZnU8o~tFUGHpjHPjyI7EW2UqfdrJJWWcAX91pWxn~bVaWrODNy7s8QOtWDX7gmAWYEiAzUomKMobadiV7jb5Aazd0ozwcPPdbHYXwvDje3blUDDIvm0-xgaSMNvbj88X0Q__"
      />
      <StyledCard
        from="Work location"
        to="Malhumn"
        deviceName="CR 1537"
        status="arrived"
        imgSrc="https://s3-alpha-sig.figma.com/img/1f2f/1ebe/6d746f919dc267a60471e4c5b3c596cb?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NWbhaUXMfYqL88HxsCYGdshu~bd37iBQ-Zv~K2QSRxsz6vm4YhAIvZofPt5DS4djD28jIojFPM2h~9LU2mXzRv5NenEI5FWynLm8oW3TKk9NbnnreaiKIrzhjCUNBiv5yoXqQsSAWyfCj246ezrxaKCZ2sZslu1tbWnc76tx9v-34uL78fiF7A--TRCIj7RxX3VVS3c5xv6-S2OhEuyjWWIYNpzmGBuXaRPKtUAZ58J6x-G-FWJjroeIMQ5HOLXc5aT2pRUJnFrPWRAeicxACo-DgCWCVfmTxGdxETd9ltMcIR34XmxypMANzoooaeJDCUzmoYeJdKfFGIspxqBcuQ__"
      />
      <StyledCard
        from="Work location"
        to="Malhumn"
        deviceName="CR 1537"
        status="arrived"
        imgSrc="https://s3-alpha-sig.figma.com/img/1f2f/1ebe/6d746f919dc267a60471e4c5b3c596cb?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NWbhaUXMfYqL88HxsCYGdshu~bd37iBQ-Zv~K2QSRxsz6vm4YhAIvZofPt5DS4djD28jIojFPM2h~9LU2mXzRv5NenEI5FWynLm8oW3TKk9NbnnreaiKIrzhjCUNBiv5yoXqQsSAWyfCj246ezrxaKCZ2sZslu1tbWnc76tx9v-34uL78fiF7A--TRCIj7RxX3VVS3c5xv6-S2OhEuyjWWIYNpzmGBuXaRPKtUAZ58J6x-G-FWJjroeIMQ5HOLXc5aT2pRUJnFrPWRAeicxACo-DgCWCVfmTxGdxETd9ltMcIR34XmxypMANzoooaeJDCUzmoYeJdKfFGIspxqBcuQ__"
      />
      <StyledCard
        from="Work location"
        to="Malhumn"
        deviceName="CR 1537"
        status="arrived"
        imgSrc="https://s3-alpha-sig.figma.com/img/1f2f/1ebe/6d746f919dc267a60471e4c5b3c596cb?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NWbhaUXMfYqL88HxsCYGdshu~bd37iBQ-Zv~K2QSRxsz6vm4YhAIvZofPt5DS4djD28jIojFPM2h~9LU2mXzRv5NenEI5FWynLm8oW3TKk9NbnnreaiKIrzhjCUNBiv5yoXqQsSAWyfCj246ezrxaKCZ2sZslu1tbWnc76tx9v-34uL78fiF7A--TRCIj7RxX3VVS3c5xv6-S2OhEuyjWWIYNpzmGBuXaRPKtUAZ58J6x-G-FWJjroeIMQ5HOLXc5aT2pRUJnFrPWRAeicxACo-DgCWCVfmTxGdxETd9ltMcIR34XmxypMANzoooaeJDCUzmoYeJdKfFGIspxqBcuQ__"
      />
    </div>
  );
};

export default Carousel;
