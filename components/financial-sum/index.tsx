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
        <div className="col-span-3">
          <Transactions />
        </div>
        <div className="col-span-2">
          <ProgressLevel />
        </div>
      </div>
    </div>
  );
};

export default FinancialSummaries;
