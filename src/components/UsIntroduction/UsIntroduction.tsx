import { ReactElement } from "react";

interface props {
  paragraph: string;
  image: string;
  title: string;
}

function UsIntroduction({ paragraph, image, title }: props): ReactElement {
  return (
    <div className="container-base flex-wrap">
      <h1 className="title-base w-full mb-8 text-center md:text-left">
        {title}
      </h1>
      <p className="order-1 md:order-none min-w-full md:min-w-0 md:pr-14 p-base flex-[2]">
        {paragraph}
      </p>
      <img
        className="md:min-w-[20rem] mx-auto md:flex-1 md:max-w-[25rem] mb-8 md:mb-0"
        src={image}
        alt="imagen-introducción"
      />
    </div>
  );
}

export default UsIntroduction;
