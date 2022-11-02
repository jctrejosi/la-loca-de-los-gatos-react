import { ReactElement, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import ItemNavbar from "./ItemNavbar";
import type { itemNavbar } from "./types";

interface props {
  list: itemNavbar[];
}

function Navbar({ list }: props): ReactElement {
  const items = list.map((item) => <ItemNavbar key={item.text} item={item} />);

  const [showDropdown, setShow] = useState(false);
  return (
    <nav>
      <Bars3Icon
        className={`h-8 w-8 flex md:hidden cursor-pointer transition-all duration-300 hover:text-custom-color ${
          showDropdown ? "text-custom-color" : "text-dark-color"
        }`}
        onClick={() => setShow(!showDropdown)}
      />
      <ul
        className={`flex absolute flex-col w-full items-center max-w-full translate-y-16 right-0 bg-secondary md:translate-y-0
        md:top-auto md:right-auto md:bg-[transparent] md:flex md:flex-row md:relative ${
          showDropdown ? "flex" : "hidden"
        }`}
      >
        {items}
      </ul>
    </nav>
  );
}

export default Navbar;
