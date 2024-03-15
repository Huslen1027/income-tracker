import Balance from "./Balance";
import Income from "./Income";
import Expense from "./Expense";
import BarchartIncome from "./BarChartIncome";
import DoughnutandPie from "./DoughnutandPie";
import LastRecord from "./LastRecords";
export default function Dashboard() {
  return (
    <div className="px-[120px] bg-[#F3F4F6] min-h-[100vh] py-[31px] flex gap-5 flex-col">
      <div className="flex gap-5">
        <Balance />
        <Income />
        <Expense />
      </div>
      <div className="flex gap-3">
        <BarchartIncome />
        <DoughnutandPie />
      </div>
      <LastRecord />
    </div>
  );
}
