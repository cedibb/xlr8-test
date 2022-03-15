import { useEffect, useState } from "react";

const Tabs = ({ showAll, showBookmarked, data }) => {
  const [bottom, setBottom] = useState("");
  const [bookmarkTabActive, activateBookmarkTab] = useState(false);

  const { all, bookmarked } = data;

  const showAllTab = () => {
    activateBookmarkTab(false);
    showAll();
  };

  const showBookmarkedTab = () => {
    activateBookmarkTab(true);
    showBookmarked();
  };

  useEffect(() => {
    window.addEventListener("scroll", () => setBottom(window.pageYOffset > 60));
  });

  return (
    <header className={bottom ? "bottom" : ""}>
      <button
        className={`tab ${bookmarkTabActive ? "" : "active"}`}
        onClick={showAllTab}
      >
        All: {all}
      </button>
      <button
        className={`tab ${bookmarkTabActive ? "active" : ""}`}
        onClick={showBookmarkedTab}
      >
        Bookmarked: {bookmarked}
      </button>
    </header>
  );
};

export default Tabs;
