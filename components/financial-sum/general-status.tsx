import { CardFinance1 } from "../home/financial-sum/card-finance1";
import { CardFinance2 } from "../home/financial-sum/card-finance2";
import { CardFinance3 } from "../home/financial-sum/card-finance3";
import { CardFinance4 } from "../home/financial-sum/card-finance4";

const GeneralStatus = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex w-full items-start justify-between gap-4">
      <CardFinance1 />
      <CardFinance2 />
      <CardFinance3 />
      <CardFinance4 />
    </div>
  );
};

export default GeneralStatus;
