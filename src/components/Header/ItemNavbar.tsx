import { ReactElement, useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import type { itemNavbar } from "./types";

interface props {
  item: itemNavbar;
}

function ItemNavbar({ item }: props): ReactElement {
  let itemDiv;

  if (item.dropdown) {
    const [openDropdown, showDropdown] = useState(false);

    const options = item.dropdown.map((option) => (
      <li
        className="block hover:bg-yellow-color-hover cursor-pointer transition-all duration-150 border-b-[.01rem] border-b- last:border-b-0 hover:underline"
        key={`option-navbar-header-${option.text}`}
      >
        <NavLink
          to={option.route || "/"}
          className="block mx-5 font-custom font-bold text-lg py-2"
        >
          {option.text}
        </NavLink>
      </li>
    ));

    itemDiv = (
      <div>
        <button
          type="button"
          className={`flex items-center w-full text-left font-custom font-bold text-lg cursor-pointer transition-all duration-150 hover:text-custom-color hover:underline hover:bg-light-color px-4 py-1 md:py-[4.5rem] ${
            openDropdown ? "bg-light-color text-custom-color underline" : ""
          }`}
          onMouseEnter={() => showDropdown(true)}
          onMouseLeave={() => showDropdown(false)}
        >
          {item.text}
          <ChevronDownIcon className="h-4 w-4 ml-1" />
        </button>
        <ul
          className={`relative md:absolute w-full block right-0 overflow-hidden bg-yellow-color transition-all duration-300 rounded-sm ${
            openDropdown ? "max-h-full" : "max-h-0"
          }`}
          onMouseEnter={() => showDropdown(true)}
          onMouseLeave={() => showDropdown(false)}
        >
          {options}
        </ul>
      </div>
    );
  } else {
    itemDiv = (
      <NavLink
        to={item.route || "/"}
        className="font-custom block w-full text-lg font-bold cursor-pointer transition-all duration-150 hover:text-custom-color hover:underline hover:bg-light-color px-4 py-1 md:py-[4.5rem]"
      >
        {item.text}
      </NavLink>
    );
  }

  return (
    <li className="mx-2 my-1 first:my-0 md:my-0 w-full first:bg-blue-color">
      {itemDiv}
    </li>
  );
}

export default ItemNavbar;
