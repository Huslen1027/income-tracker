import BalanceIcon from "./icons/BalanceIcons/Balanceicon";
import BalanceNet from "./icons/BalanceIcons/BalanceNet";
import BalanceShape from "./icons/BalanceIcons/BalanceShape";
export default function Balance() {
  return (
    <div className="w-[384px] h-[216px] rounded-[18px] bg-[#0166FF] relative ">
      <div className="flex flex-col items-start px-[32px]">
        <div className="flex gap-2 justify-center items-center absolute top-[30px]">
          <BalanceIcon />
          <p className="text-[18px] text-white font-semibold ">Geld</p>
        </div>
        <div className="flex items-start justify-start flex-col absolute top-[120px] ">
          <p className="opacity-0.5 text-[16px]">Cash</p>
          <p className="text-white text-[24px]">10,000,000</p>
        </div>
        <div className="absolute left-[148px] top-[20px]">
          <BalanceShape />
        </div>
        <div className="absolute top-[155px] left-[320px]">
          <BalanceNet />
        </div>
      </div>
    </div>
  );
}
