import React, { useEffect, useState } from "react";
import Gallery from "./Gallery";
import Tabs from "./Tabs";
import getImages from "../getImages";

const images = getImages().map((img) => ({
  ...img,
  bookmarked: false,
  visible: true,
}));

const App = () => {
  const [images, setimages] = useState(images);

  const handleBookmark = (id) => {
    const images = { ...images };
    const putMarker = images.find((img) => img.image_id === id);
    putMarker.bookmarked = !putMarker.bookmarked;
    setimages(images);
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
    const images = { ...images };
    images = images.map((img) => ({ ...img, visible: true }));
    setimages(images);
  };

  const handleShowBookmarked = () => {
    const images = { ...images };
    images = images.map((img) => ({ ...img, visible: img.bookmarked }));
    setimages(images);
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
