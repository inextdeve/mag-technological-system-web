import Analytics from "./analytics";
import GeneralStatus from "./general-status";
import ProgressLevel from "./progress-level";
import Transactions from "./transactions";

const FinancialSummaries = () => {
  return (
    <div>
      {/*Genral Status  */}
      <GeneralStatus />
      {/* Analytics */}
      <Analytics />
      <div className="grid grid-cols-5 gap-4 items-stretch mt-4">
        <div className="md:col-span-3 col-span-full">
          <Transactions />
        </div>
        <div className="md:col-span-2 col-span-full">
          <ProgressLevel />
        </div>
      </div>
    </div>
  );
};

export default FinancialSummaries;
