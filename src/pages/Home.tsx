import { ReactElement } from "react";
import ImagesCarousel from "#/ImagesCarousel/ImagesCarousel";
import OptionsBox from "#/OptionsBox/OptionsBox";
import { imagesCarousel, itemsBox, titleOptionsBox } from "contents/home";

function Home(): ReactElement {
  return (
    <div>
      <ImagesCarousel images={imagesCarousel} />
      <OptionsBox listItems={itemsBox} title={titleOptionsBox} />
    </div>
  );
}

export default Home;
