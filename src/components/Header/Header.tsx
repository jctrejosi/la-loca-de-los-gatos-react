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
    <header className="bg-primary flex justify-between lg:justify-around px-8 items-center">
      <Icon url={url} image={image} slogan={slogan} />
      <Navbar list={items} />
    </header>
  );
}

export default Header;
