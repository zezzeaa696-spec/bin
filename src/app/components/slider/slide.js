'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
      <Image src="/quat.png" alt="Product 1" width={600} height={300} />
      </div>
      <div>
      <Image src="/may.png" alt="Product 1" width={600} height={300} />
      </div>
      <div>
      <Image src="/nuoc.png" alt="Product 1" width={600} height={300} />
      </div>
      <div>
      <Image src="/tu.png" alt="Product 1" width={600} height={300} />
      </div>
      <div>
      <Image src="/cc.png" alt="Product 1" width={600} height={300} />

      </div>
      <div>
      <Image src="/cl.png" alt="Product 1" width={600} height={300} />
      </div>
    </Slider>
  );
}
