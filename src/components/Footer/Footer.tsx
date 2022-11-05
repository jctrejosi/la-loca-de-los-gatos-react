import { ReactElement } from "react";
import Links from "./Links";
import Logo from "./Logo";
import Waves from "./Waves";
import type { link } from "./types";

interface props {
  linkList: link[];
  logo: string;
  route: string;
  paragraph: string;
}

function Footer({ linkList, logo, route, paragraph }: props): ReactElement {
  return (
    <footer>
      <Logo logo={logo} url={route} paragraph={paragraph} />
      <Links list={linkList} />
      <Waves />
    </footer>
  );
}

export default Footer;
