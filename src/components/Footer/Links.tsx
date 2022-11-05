import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import type { link } from "./types";

interface props {
  list: link[];
}

function Links({ list }: props): ReactElement {
  const listDiv = list.map((item) => (
    <li>
      <NavLink
        to={item.route}
        className="font-custom hover:underline hover:text-custom-color"
      >
        {item.text}
      </NavLink>
    </li>
  ));
  return <ul>{listDiv}</ul>;
}

export default Links;
