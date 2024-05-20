import Map from "./map";
import TimeTable from "./timetable";

const Processes = () => {
  return (
    <div className="absolute top-0 w-full h-fit left-0">
      <div className="relative w-full h-[70vh]">
        <div className="absolute inset-x-0 inset-y-0">
          <Map />
        </div>
      </div>
      {/* Add content here */}
      <div className="w-full">
        <TimeTable />
      </div>
    </div>
  );
};

export default Processes;
