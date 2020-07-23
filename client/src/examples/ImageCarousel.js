import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Divider } from "semantic-ui-react";

import CustomDotGroup from "../components/layout/CustomDotGroup";

const ImageCarousel = () => (

  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1}
    totalSlides={3}
  >
    <Slider>
      <Slide tag="a" index={0}>
        <Image  
            // style={{
            //     width: 1200,
            //     height: 1200,
            // }} 
            src="https://media.timeout.com/images/105577491/630/472/image.jpg"  />
      </Slide>
      <Slide tag="a" index={1}>
        <Image src="../img/fiveguys.png" />
      </Slide>
      <Slide tag="a" index={2}>
        <Image src="../img/fiveguys.png" />
      </Slide>
    </Slider>

    <Divider />
    <CustomDotGroup slides={3} />
  </CarouselProvider>
);

export default ImageCarousel;
