import { ReactElement } from "react";
import ImagesCarousel from "#/ImagesCarousel/ImagesCarousel";
import OptionsBox from "#/OptionsBox/OptionsBox";
import UsIntroduction from "#/UsIntroduction/UsIntroduction";
import {
  imagesCarousel,
  itemsBox,
  titleOptionsBox,
  limitOptionsBox,
  paragraphUs,
  imageUs,
  titleUs,
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
      <UsIntroduction image={imageUs} paragraph={paragraphUs} title={titleUs} />
    </div>
  );
}

export default Home;
