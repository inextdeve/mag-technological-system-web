import Map from "./map";
import TimeTable from "./timetable";
import ZoneCard from "./zone-card";

const Processes = () => {
  return (
    <div className="absolute top-0 w-full h-fit left-0">
      <div className="relative w-full h-[70vh]">
        <div className="absolute inset-x-0 inset-y-0">
          <Map />
        </div>
      </div>
      {/* Add content here */}
      <div className="w-[70%] px-4 min-w-300px">
        <h4 className="text-yellow-m">Timetable</h4>
        <TimeTable />
      </div>
      <ZoneCard />
    </div>
  );
};

export default Processes;
