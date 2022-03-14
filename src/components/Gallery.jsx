import React from "react";
import Image from "./Image";

const Gallery = ({ images, bookmark }) => (
  <div className="container">
    {images.map((data, i) => (
      <Image data={data} bookmark={bookmark} key={i} />
    ))}
  </div>
);

export default Gallery;
