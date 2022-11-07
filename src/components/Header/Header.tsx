import { ReactElement } from "react";
import Navbar from "./Navbar";
import Icon from "./Icon";
import type { iconProps } from "./types";

function Header({ url, image, slogan }: iconProps): ReactElement {
  return (
    <div className="bg-primary flex justify-around min-h-[4rem] items-center">
      <Icon url={url} image={image} slogan={slogan} />
      <Navbar />
    </div>
  );
}

export default Header;
