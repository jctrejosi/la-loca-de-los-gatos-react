import { ReactElement } from "react";
import { contentButton } from "contents/generic";
import type { item } from "./types";

function ItemBox({ description, image, name, id }: item): ReactElement {
  return (
    <div className="text-left">
      <img
        src={image}
        alt="imagen de mascota"
        className="w-full object-cover rounded-lg"
      />
      <h1 className="title-base-inner mt-4">
        {name}
        {id}
      </h1>
      <p className="mt-2 p-base">{description}</p>
      <button className="btn-secondary mt-4" type="button">
        {contentButton}
      </button>
    </div>
  );
}

export default ItemBox;
