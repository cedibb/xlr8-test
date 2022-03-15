import { useEffect, useState } from "react";
import "./Tabs.css";

const Tabs = ({ showAllImages, showBookmarkedImages, data }) => {
  const [bottom, setBottom] = useState("");

  const [isBookmarkTabActive, activateBookmarkedImagesTab] = useState(false);

  const { all, bookmarked } = data;

  useEffect(() => {
    window.addEventListener("scroll", () => setBottom(window.pageYOffset > 60));
  });

  const handleShowAllTab = () => {
    activateBookmarkedImagesTab(false);
    showAllImages();
  };

  const handleShowBookmarkedTab = () => {
    activateBookmarkedImagesTab(true);
    showBookmarkedImages();
  };

  return (
    <header className={bottom ? "bottom" : ""}>
      <button
        className={`tab ${!isBookmarkTabActive && "active"}`}
        onClick={handleShowAllTab}
      >
        All: {all}
      </button>
      <button
        className={`tab ${isBookmarkTabActive && "active"}`}
        onClick={handleShowBookmarkedTab}
      >
        Bookmarked: {bookmarked}
      </button>
    </header>
  );
};

export default Tabs;
