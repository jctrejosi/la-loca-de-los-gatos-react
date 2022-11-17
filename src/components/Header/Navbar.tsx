import { ReactElement, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import ItemNavbar from "./ItemNavbar";
import type { itemNavbar } from "./types";

interface props {
  list: itemNavbar[];
}

function Navbar({ list }: props): ReactElement {
  const items = list.map((item) => (
    <ItemNavbar key={`item-navbar-header-${item.text}`} item={item} />
  ));

  const [showDropdown, setShow] = useState(false);
  return (
    <nav>
      <Bars3Icon
        className={`h-8 w-8 flex lg:hidden cursor-pointer transition-all duration-300 hover:text-custom-color ${
          showDropdown ? "text-custom-color" : "text-dark-color"
        }`}
        onClick={() => setShow(!showDropdown)}
      />
      <ul
        className={`flex absolute flex-col w-full items-center max-w-full translate-y-16 right-0 bg-secondary lg:translate-y-0
        top-16 lg:top-auto lg:right-auto lg:bg-[transparent] lg:flex lg:flex-row lg:relative ${
          showDropdown ? "flex" : "hidden"
        }`}
      >
        <button
          type="button"
          className="text-2xl hover:text-custom-color ml-auto mr-4 flex lg:hidden"
          onClick={() => setShow(!showDropdown)}
        >
          &times;
        </button>
        {items}
      </ul>
    </nav>
  );
}

export default Navbar;
