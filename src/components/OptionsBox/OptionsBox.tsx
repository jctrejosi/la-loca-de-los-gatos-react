import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { contentLink } from "contents/generic";
import ItemBox from "./ItemBox";
import type { item } from "./types";

interface props {
  listItems: item[];
}

function OptionsBox({ listItems }: props): ReactElement {
  const items = listItems.slice(0, 6).map((option) => (
    <li key={option.id} className="px-8 w-[33%] min-w-[25rem] mb-16">
      <ItemBox
        id={option.id}
        description={option.description}
        image={option.image}
        name={option.name}
      />
    </li>
  ));
  return (
    <div className="max-w-[100rem] mx-auto my-16 text-center">
      <ul className="flex justify-center flex-wrap">{items}</ul>
      <NavLink to="/adopciones" className="link-default">
        {contentLink}
      </NavLink>
    </div>
  );
}

export default OptionsBox;
