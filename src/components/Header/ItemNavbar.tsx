import { ReactElement, useState } from "react";
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
        key={option.text}
      >
        <a
          href={option.url || option.route || "/"}
          className="block mx-5 font-custom font-bold text-lg"
        >
          {option.text}
        </a>
      </li>
    ));

    itemDiv = (
      <div>
        <button
          type="button"
          className={`flex items-center text-left font-custom font-bold text-lg cursor-pointer transition-all duration-150 hover:text-custom-color hover:underline hover:bg-light-color px-4 py-[4.5rem] ${
            openDropdown ? "bg-light-color text-custom-color underline" : ""
          }`}
          onClick={() => showDropdown(!openDropdown)}
        >
          {item.text}
          <ChevronDownIcon className="h-4 w-4 ml-1" />
        </button>
        <ul
          className={`absolute overflow-hidden bg-yellow-color transition-all duration-300 rounded-sm ${
            openDropdown ? "max-h-full" : "max-h-0"
          }`}
        >
          {options}
        </ul>
      </div>
    );
  } else {
    itemDiv = (
      <a
        href={`${item.url || item.route || "/"}`}
        className="font-custom text-lg font-bold cursor-pointer transition-all duration-150 hover:text-custom-color hover:underline hover:bg-light-color px-4 py-[4.5rem]"
      >
        {item.text}
      </a>
    );
  }

  return <li className="mx-2 my-1">{itemDiv}</li>;
}

export default ItemNavbar;
