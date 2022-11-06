import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

interface props {
  url: string;
  image: string;
  slogan: string;
}

function Icon({ url, image, slogan }: props): ReactElement {
  return (
    <NavLink to={url} className="flex items-center">
      <img
        className="max-w-[8rem] hover:opacity-60 hover:border border-blue-color rounded-xl transition-all duration-150"
        alt="imagen"
        src={image}
      />
      <p className="font-custom text-xl max-w-md">{slogan}</p>
    </NavLink>
  );
}

export default Icon;
