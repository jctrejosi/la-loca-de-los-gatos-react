import { ReactElement } from "react";
import type { icon } from "./types";

interface props {
  icons: icon[];
  title: string;
  sizeIcons: string;
}

function openUrl(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function Icons({ icons, title, sizeIcons }: props): ReactElement {
  const list = icons.map((item) => (
    <li className="mx-2">
      <button
        type="button"
        onClick={() => openUrl(item.url)}
        className="flex items-center"
      >
        <img
          className={`${sizeIcons}`}
          alt="icono-red-social-externa"
          src={item.image}
        />
      </button>
    </li>
  ));
  return (
    <div className="mb-4">
      <h1 className="font-custom font-semibold text-center">{title}</h1>
      <ul className="flex justify-center flex-wrap">{list}</ul>
    </div>
  );
}

export default Icons;
