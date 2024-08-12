import { Link } from "react-router-dom";
import VersionInfo from "./VersionInfo";
import useSidebar from "../../hooks/common/sidebar/useSidebar";

function HeadElement() {
  const { isOpen } = useSidebar();

  return (
    <div className="py-2 px-2 border-b border-gray-300 bg-white h-[80px] flex items-center justify-center flex-col">
      <Link className="hover:!bg-transparent" to="/">
        <img
          src={isOpen ? "/logo/drdroid-logo-full.png" : "/logo/logo.png"}
          alt="Logo"
          className="main_logo_option w-40"
        />
      </Link>
      <VersionInfo />
    </div>
  );
}

export default HeadElement;
