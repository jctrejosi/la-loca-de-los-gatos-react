import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

interface props {
  logo: string;
  url: string;
  paragraph: string;
}

function Logo({ logo, url, paragraph }: props): ReactElement {
  return (
    <div>
      <NavLink to={url}>
        <img src={logo} alt="Logo de la compañía" className="max-w-[5rem]" />
      </NavLink>
      <p className="font-custom">{paragraph}</p>
    </div>
  );
}

export default Logo;
