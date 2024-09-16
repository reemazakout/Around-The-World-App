import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed left-0 right-0 top-0 z-[100] bg-white">
        <Header />
      </div>
      <div className="flex-grow overflow-y-auto pt-[88px]">
        <Outlet />
      </div>
    </div>
  );
}
