import Header from "@/components/Header";
import BluePlusIcon from "@/components/icons/LastRecords/BluePlusIcon";
import PlusIcon from "@/components/icons/headerIcons/PlusIcon";
import { Category } from "./utils/recordCategory";
import RangeSlider from "@/components/Slider";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
export default function Records() {
  return (
    <div className="max-w-[1420px] m-auto ">
      <Header />
      <div className="w-1420px h-[1208px] bg-[#F3F4F6] px-[108px] py-[28px] flex gap-6">
        <div className="inline-flex w-[282px] h-[1080px] items-start flex-col rounded-[12px] bg-[#F9FAFB] px-6 py-6 gap-6">
          <div className="flex flex-col items-start gap-6 justify-center">
            <p className="text-[24px] text-black font-normal">Records</p>
            <button className="flex justify-center items-center bg-[#0166FF] rounded-[20px] gap-1 h-[32px] p-3 w-[240px]">
              <PlusIcon />
              <p className="text-white text-[16px]">Add</p>
            </button>
          </div>
          <div className="form-control flex w-[240px] max-w-[320px] flex-col h-[32px] ">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto rounded-[10px] bg-[#F3F4F6]"
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <div className="form-control">
              <label className="label cursor-pointer gap-2">
                <input
                  type="radio"
                  name="theme-radios"
                  className="radio theme-controller"
                  value="default"
                />
                <span className="label-text text-[16px]">All</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer gap-2">
                <input
                  type="radio"
                  name="theme-radios"
                  className="radio theme-controller"
                  value="retro"
                />
                <span className="label-text text-[16px]">Income</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer gap-2">
                <input
                  type="radio"
                  name="theme-radios"
                  className="radio theme-controller"
                  value="cyberpunk"
                />
                <span className="label-text text-[16px]">Expense</span>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start ">
            <div className="flex justify-between items-center w-[230px]">
              <h1 className="text-[16px] text-[black]">Category</h1>

              <button className="rounded-[20px] gap-1 flex justify-center">
                <p className=" text-[16px] text-[#1F2937] opacity-20">Clear</p>
              </button>
            </div>
            {Category.map((e, index) => {
              return (
                <div key={index} className="flex flex-col items-start gap-2 ">
                  <div className="flex justify-between items-center w-[230px]">
                    <button className="flex items-center gap-2 ">
                      {e.icon}
                      {e.text}
                    </button>
                    <button>{e.rightArrow}</button>
                  </div>
                </div>
              );
            })}
            <button className="flex items-center gap-2">
              <BluePlusIcon />
              <p>Add Category</p>
            </button>
          </div>
          <div className="flex flex-col items-start gap-4 mt-7">
            <h1 className="text-[16px] text-[#1F2937]">Amount Range</h1>
            <div className="flex flex-col items-center gap-4">
              <RangeSlider />
            </div>
          </div>
        </div>

        <div className="flex w-[900px] flex-col items-start gap-6 ">
          <div className="flex justify-between items-center w-[900px]">
            <div className="inline-flex items-center gap-4  ">
              <button className="flex w-[32px] h-[32px] justify-center gap-1 items-center rounded-[8px] ">
                <MdKeyboardArrowLeft />
              </button>
              <p className="text-[16px] text-[#000]">Last 30 Days</p>
              <button className="flex w-[32px] h-[32px] justify-center gap-1 items-center rounded-[8px] ">
                <MdKeyboardArrowRight />
              </button>
            </div>
            <select className="select select-bordered w-[180px] ">
              <option selected>Newest first</option>
              <option>Oldest first</option>
              <option>Lower first</option>
              <option>Highest first</option>
            </select>
          </div>

          <div className="flex px-6 py-3 justify-between items-center rounded-[12px] border border-[#E5E7EB] bg-[#FFF] w-[900px] h-[48px]">
            <div className="flex items-center gap-4">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="checkbox" default className="checkbox " />
                </label>
              </div>
              <p className="text-[16px] text-[#000]">Select all</p>
            </div>
            <div className="flex items-center gap-2">
              <p>-</p>
              <p>35,500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
