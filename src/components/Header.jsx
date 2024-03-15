import HeaderIcon from "./icons/headerIcons/HeaderIcon";
import PlusIcon from "./icons/headerIcons/PlusIcon";
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex w-full px-[120px]  bg-[#FFF] justify-between items-center py-4">
      <div className="navbar ">
        <div className="flex-1">
          <HeaderIcon />
          <Link href={"/"}>
            <p className="btn btn-ghost text-xl">Dashboard</p>
          </Link>
          <Link href={"/records"}>
            <p className="btn btn-ghost text-xl">Records</p>
          </Link>
        </div>
        <div className="flex-none gap-4">
          <button className="flex bg-[#0166FF] w-[99px] h-[32px] rounded-[20px] justify-center items-center gap-1">
            <PlusIcon />
            <p className="text-[16px] text-[#FFFFFF]">Record</p>
          </button>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
