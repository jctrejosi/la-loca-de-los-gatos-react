import { ReactElement } from "react";

interface props {
  url: string;
  image: string;
  slogan: string;
}

function Icon({ url, image, slogan }: props): ReactElement {
  return (
    <a href={url} className="flex items-center">
      <img className="max-w-[8rem]" alt="imagen" src={image} />
      <p className="font-custom text-xl max-w-md">{slogan}</p>
    </a>
  );
}

export default Icon;
