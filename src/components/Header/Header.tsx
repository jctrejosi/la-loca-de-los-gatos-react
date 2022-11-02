import { ReactElement } from "react";
import Navbar from "./Navbar";
import Icon from "./Icon";
import type { itemNavbar } from "./types";

interface props {
  url: string;
  image: string;
  slogan: string;
  items: itemNavbar[];
}

function Header({ url, image, slogan, items }: props): ReactElement {
  return (
    <div className="bg-primary flex justify-around px-8 items-center">
      <Icon url={url} image={image} slogan={slogan} />
      <Navbar list={items} />
    </div>
  );
}

export default Header;
