import { ReactElement } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./dots.css";
import { Carousel } from "react-responsive-carousel";

interface props {
  images: string[];
}

function ImagesCarousel({ images }: props): ReactElement {
  const listImages = images.map((item) => (
    <img
      key={`image-carousel-${item}`}
      src={item}
      alt="imagen-promocional"
      className="w-full h-full object-cover"
    />
  ));
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        transitionTime={1500}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        {listImages}
      </Carousel>
    </div>
  );
}

export default ImagesCarousel;
