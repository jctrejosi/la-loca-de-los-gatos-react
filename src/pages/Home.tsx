import { ReactElement } from "react";
import ImagesCarousel from "#/ImagesCarousel/ImagesCarousel";
import OptionsBox from "#/OptionsBox/OptionsBox";
import {
  imagesCarousel,
  itemsBox,
  titleOptionsBox,
  limitOptionsBox,
} from "contents/home";

function Home(): ReactElement {
  return (
    <div>
      <ImagesCarousel images={imagesCarousel} />
      <OptionsBox
        listItems={itemsBox}
        title={titleOptionsBox}
        limit={limitOptionsBox}
      />
    </div>
  );
}

export default Home;
