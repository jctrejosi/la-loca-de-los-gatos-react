import { ReactElement } from "react";

interface iconProps {
  url: string;
  image: string;
  slogan: string;
}

function Icon({ url, image, slogan }: iconProps): ReactElement {
  return (
    <a href={url} className="flex items-center">
      <img className="max-w-[8rem]" alt="imagen" src={image} />
      <p className="font-custom text-xl">{slogan}</p>
    </a>
  );
}

export default Icon;
