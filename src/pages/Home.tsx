import { ReactElement } from "react";
import ImagesCarousel from "#/ImagesCarousel/ImagesCarousel";
import { imagesCarousel } from "contents/home";

function Home(): ReactElement {
  return (
    <div>
      <ImagesCarousel images={imagesCarousel} />
    </div>
  );
}

export default Home;
