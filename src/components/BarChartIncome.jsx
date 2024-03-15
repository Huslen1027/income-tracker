import BarChart from "./Chart/BarChart";
export default function BarchartIncome() {
  return (
    <div className="w-[588px] h-[284px] rounded-[12px] bg-[#FFF] flex flex-col items-start">
      <div className="w-[588px] h-[56px] flex items-center border-b gap-2 p-4">
        <p className="text-black font-medium">Income-Expense</p>
      </div>
      <div className="flex jusitfy-center items-center w-[580px] h-[284px] pl-2">
        <BarChart />
      </div>
    </div>
  );
}
