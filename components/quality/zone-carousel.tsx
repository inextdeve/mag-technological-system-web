import { cn } from "@/helpers/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

const data = [
  {
    name: "ZONE 01",
    value: 20,
  },
  {
    name: "ZONE 02",
    value: 83,
  },
  {
    name: "ZONE 03",
    value: 146,
  },
  {
    name: "ZONE 04",
    value: 209,
  },
  {
    name: "ZONE 05",
    value: 272,
  },
  {
    name: "ZONE 06",
    value: 335,
  },
  {
    name: "ZONE 07",
    value: 398,
  },
  {
    name: "ZONE 08",
    value: 461,
  },
  {
    name: "ZONE 09",
    value: 524,
  },
  {
    name: "ZONE 10",
    value: 587,
  },
  {
    name: "ZONE 11",
    value: 650,
  },
  {
    name: "ZONE 12",
    value: 713,
  },
  {
    name: "ZONE 13",
    value: 776,
  },
  {
    name: "ZONE 14",
    value: 839,
  },
  {
    name: "ZONE 15",
    value: 902,
  },
  {
    name: "ZONE 16",
    value: 965,
  },
  {
    name: "ZONE 17",
    value: 1028,
  },
  {
    name: "ZONE 18",
    value: 1091,
  },
  {
    name: "ZONE 19",
    value: 1154,
  },
  {
    name: "ZONE 20",
    value: 1217,
  },
];

const ZoneCarousel = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={1}
      centerMode={false}
      className="bg-[#0AB9BF]/15 px-4 py-2 mt-8"
      containerClass="container-with-dots"
      customTransition="all 10s linear"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={2}
      swipeable
      transitionDuration={10500}
    >
      {data.map(({ name, value }, index) => (
        <div
          key={`${name}-${index}`}
          className="flex gap-1 items-center font-semibold"
        >
          <p>{name}</p>
          <span>
            {value > 500 ? (
              <TrendingUp className="w-3 h-3 text-success" />
            ) : (
              <TrendingDown className="w-3 h-3 text-danger" />
            )}
          </span>
          <span className={cn("text-success", { "text-danger": value < 500 })}>
            {value}
            <span className="text-[10px]">M3</span>
          </span>
        </div>
      ))}
    </Carousel>
  );
};

export default ZoneCarousel;
