import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";
import { useSelector } from "react-redux";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to={"/"} className="font-semibold tracking-widest">
        Fast Pizza co.
      </Link>
      <SearchOrder />
      <div className="flex">
        <CartIcon />
        <UserName />
      </div>
    </header>
  );
}

function CartIcon() {
  const items = useSelector((store) => store.cart.cart.length);
  return (
    <Link
      to={"/cart"}
      className="relative cursor-pointer text-xl text-stone-800"
    >
      <FaCartShopping />
      {items > 0 && (
        <span className="absolute -right-2 -top-2 w-4 rounded-full bg-red-600 text-center text-xs font-semibold text-white">
          {items}
        </span>
      )}
    </Link>
  );
}

export default Header;
