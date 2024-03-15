import { lastrecord } from "@/pages/utils/LastRecords";
export default function LastRecord() {
  return (
    <div className="flex flex-col items-start rounded-[12px] w-[1185px] bg-[#FFF]">
      <div className="flex items-center p-4 gap-2 border-b w-[1185px]">
        <p className="text-black text-[16px]">Last Records</p>
      </div>
      {lastrecord.map((e, index) => {
        return (
          <div key={index} className="flex flex-col items-start ">
            <div className="flex p-5 justify-between items-center border-b bg-[#FFF] w-[1185px]">
              <div className="flex items-center gap-4">
                {" "}
                <div className="w-[40px] h-[40px] rounded-full  bg-[#0166FF] flex justify-center items-center">
                  {e.icon}
                </div>
                <div className="flex flex-col justify-center items-start">
                  <p className="text-[16px] text-[#000]">{e.h1}</p>
                  <p className="text-[12px] text-[#6B7280]">{e.p}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-[#9f3131]]">{e.has}</p>
                <p className="text-[#9f3131]">{e.num}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
