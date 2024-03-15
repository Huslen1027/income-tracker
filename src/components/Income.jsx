import LeadingIcon from "./icons/IncomeIcons/LeadingIcon";

export default function Income() {
  return (
    <div className="flex flex-col items-start w-[384px] h-[215px] rounded-[12px] bg-[#FFF]">
      <div className="flex gap-2 px-6 py-4 items-center border-b w-[384px]">
        <div className="w-[8px] h-[8px] bg-[#84CC16] rounded-full"></div>
        <p className="text-[16px] text-[#0F172A] font-semibold">Your Income</p>
      </div>
      <div className="flex flex-col items-start px-6 py-4 gap-2">
        <div className="flex flex-col items-start">
          <h1 className="text-[#000] text-[36px] font-normal">1,200,000</h1>
          <p className="text-[#64748B] text-[18px]">Your Income account</p>
        </div>

        <div className="flex items-center gap-2">
          <LeadingIcon />
          <p className="text-[#000] text-[18px]">32% from last month</p>
        </div>
      </div>
    </div>
  );
}
