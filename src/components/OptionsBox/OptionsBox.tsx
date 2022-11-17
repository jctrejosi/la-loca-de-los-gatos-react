import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { contentLink } from "contents/generic";
import ItemBox from "./ItemBox";
import type { item } from "./types";

interface props {
  listItems: item[];
  title: string;
  limit: number;
}

function OptionsBox({ listItems, title, limit }: props): ReactElement {
  const items = listItems.slice(0, limit).map((option) => (
    <li
      key={`item-box-${option.id}`}
      className="px-8 w-[33%] min-w-[25rem] mb-16"
    >
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
      <h1 className="title-base w-full text-center mb-8">{title}</h1>
      <ul className="flex justify-center flex-wrap">{items}</ul>
      <NavLink to="/adopciones" className="link-default">
        {contentLink}
      </NavLink>
    </div>
  );
}

export default OptionsBox;
