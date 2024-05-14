import { CardFinance1 } from "../home/financial-sum/card-finance1";
import { CardFinance2 } from "../home/financial-sum/card-finance2";
import { CardFinance3 } from "../home/financial-sum/card-finance3";
import { CardFinance4 } from "../home/financial-sum/card-finance4";

const GeneralStatus = () => {
  return (
    <div className="flex w-full items-start justify-between">
      <CardFinance1 />
      <CardFinance2 />
      <CardFinance3 />
      <CardFinance4 />
    </div>
  );
};

export default GeneralStatus;
