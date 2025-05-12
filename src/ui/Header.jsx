import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="font-serif flex items-center justify-between bg-red-600 uppercase px-4 py-3 border-b border-stone-200 sm:px-6">
      <Link to={"/"} className="tracking-widest">
        Kupa Pizza{" "}
      </Link>
      <SearchOrder />
      <Username className="text-sm font-semibold " />
    </header>
  );
}

export default Header;
