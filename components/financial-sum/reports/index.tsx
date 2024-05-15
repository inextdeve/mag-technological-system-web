import Filter from "./filter";
import CollapsibleTable from "./table";

const Reports = () => {
  return (
    <div>
      <div className="flex items-center gap-24 mb-6">
        <h4 className="text-xl text-yellow-m">Transactions</h4>
        <Filter />
      </div>
      <CollapsibleTable />
    </div>
  );
};

export default Reports;
