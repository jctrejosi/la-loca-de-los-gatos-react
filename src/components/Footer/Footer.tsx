import { ReactElement } from "react";
import Links from "./Links";
import Logo from "./Logo";
import Icons from "./Icons";
import type { link, icon } from "./types";

interface props {
  linkList: link[];
  logo: string;
  route: string;
  paragraph: string;
  iconsSocial: icon[];
  titleSocial: string;
  iconsAllieds: icon[];
  titleAllieds: string;
}

function Footer({
  linkList,
  logo,
  route,
  paragraph,
  iconsSocial,
  titleSocial,
  iconsAllieds,
  titleAllieds,
}: props): ReactElement {
  return (
    <footer className="bg-circle bg-center bg-fixed bg-cover grid grid-cols-3 p-8 gap-x-4">
      <Logo logo={logo} url={route} paragraph={paragraph} />
      <div>
        <Icons icons={iconsSocial} title={titleSocial} sizeIcons="w-[3rem]" />
        <Icons icons={iconsAllieds} title={titleAllieds} sizeIcons="w-[6rem]" />
      </div>
      <Links list={linkList} />
    </footer>
  );
}

export default Footer;
