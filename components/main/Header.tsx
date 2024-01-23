"use client";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  if (path === "/admin") {
    return <></>;
  }

  return (
    <div className="sticky top-0 z-50 flex min-h-[10dvh] items-center justify-center bg-white shadow-md">
      <div className="flex w-5/6 items-center justify-between">
        <div>LOGO</div>
      </div>
    </div>
  );
};

export default Header;
