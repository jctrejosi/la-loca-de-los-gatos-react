import { ReactElement } from "react";
import type { iconProps } from "./types";

function Icon({ url, image, slogan }: iconProps): ReactElement {
  return (
    <a href={url} className="flex items-center">
      <img className="max-w-[8rem]" alt="imagen" src={image} />
      <p className="font-custom text-xl">{slogan}</p>
    </a>
  );
}

export default Icon;
