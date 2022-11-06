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
      <NavLink to={url} className="justify-center flex mb-2">
        <img
          src={logo}
          alt="Logo de la compañía"
          className="max-w-[8rem] hover:opacity-60 hover:border border-blue-color rounded-xl transition-all duration-150 relative z-10"
        />
      </NavLink>
      <p className="p-base">{paragraph}</p>
    </div>
  );
}

export default Logo;
