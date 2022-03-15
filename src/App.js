import { useState } from "react";
import Gallery from "./components/Gallery";
import Tabs from "./components/Tabs";
import getImages from "./getImages";

const img = getImages().map((img) => ({
  ...img,
  bookmarked: false,
  visible: true,
}));

const App = () => {
  const [images, setImages] = useState(img);

  const getStats = () => {
    const all = images.length;
    const bookmarked = images.filter((img) => img.bookmarked).length;
    return {
      all,
      bookmarked,
    };
  };

  const bookmarkImage = (id) => {
    const imagesCopy = [...images];
    const putMarker = imagesCopy.find((img) => img.image_id === id);
    putMarker.bookmarked = !putMarker.bookmarked;
    setImages(imagesCopy);
  };

  const showAllImages = () => {
    let imagesCopy = [...images];
    imagesCopy = imagesCopy.map((img) => ({ ...img, visible: true }));
    setImages(imagesCopy);
  };

  const showBookmarkedImages = () => {
    let imagesCopy = [...images];
    imagesCopy = imagesCopy.map((img) => ({ ...img, visible: img.bookmarked }));
    setImages(imagesCopy);
  };

  return (
    <div className="App">
      <Tabs
        data={getStats()}
        showAllImages={showAllImages}
        showBookmarkedImages={showBookmarkedImages}
      />
      <Gallery bookmarkImage={bookmarkImage}>{images}</Gallery>
    </div>
  );
};

export default App;
