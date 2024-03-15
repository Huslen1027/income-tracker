import Piechart from "./Chart/DoughnutPie";
import { DonutData } from "@/pages/utils/DoughnutData";
export default function DoughnutandPie() {
  return (
    <div className="w-[580px] h-[284px] rounded-[12px] bg-[#FFF] flex flex-col items-start">
      <div className="w-[580px] h-[56px] flex items-center border-b gap-2 p-4 justify-between">
        <p className="text-black font-normal">Income-Expense</p>
        <p>Jun 1 - Nov 30</p>
      </div>
      <div className="flex py-8 px-6 flex-col items-start ">
        <div className="flex items-start gap-[40px] ">
          <div className="w-[170px] h-[170px]">
            <Piechart />
          </div>
          <div>
            {DonutData.map((e, index) => {
              return (
                <div key={index} className="flex flex-col items-start ">
                  <div className="flex items-center gap-8 mt-3">
                    <div className="flex items-center gap-2 w-[103px]">
                      {e.color}
                      <p className="text-[14px] text-[#0F172A] ">
                        {e.productName}
                      </p>
                    </div>
                    <p className="text-[14px] text-[#0F172A] w-[100px]">
                      {e.expenses}
                    </p>
                    <p className="text-[14px] text-[#0F172A]">{e.percent}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
