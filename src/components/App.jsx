import React, { useState } from "react";
import Gallery from "./Gallery";
import Tabs from "./Tabs";
import getImages from "../getImages";

const img = getImages().map((img) => ({
  ...img,
  bookmarked: false,
  visible: true,
}));

const App = () => {
  const [images, setImages] = useState(img);

  const handleBookmark = (id) => {
    const imagesCopy = [...images];
    const putMarker = imagesCopy.find((img) => img.image_id === id);
    putMarker.bookmarked = !putMarker.bookmarked;
    setImages(imagesCopy);
  };

  const getStats = () => {
    const all = images.length;
    const bookmarked = images.filter((img) => img.bookmarked).length;
    return {
      all,
      bookmarked,
    };
  };

  const handleShowAll = () => {
    let imagesCopy = [...images];
    imagesCopy = imagesCopy.map((img) => ({ ...img, visible: true }));
    setImages(imagesCopy);
  };

  const handleShowBookmarked = () => {
    let imagesCopy = [...images];
    imagesCopy = imagesCopy.map((img) => ({ ...img, visible: img.bookmarked }));
    setImages(imagesCopy);
  };

  return (
    <div className="App">
      <Tabs
        data={getStats()}
        showAll={handleShowAll}
        showBookmarked={handleShowBookmarked}
      />
      <Gallery images={images} bookmark={handleBookmark} />
    </div>
  );
};

export default App;
