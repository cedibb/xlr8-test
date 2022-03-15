import "./Image.css";

const Image = ({ data, bookmark }) => {
  const { image_id, title, url, bookmarked, visible } = data;

  const handleBookmark = () => {
    bookmark(image_id);
  };

  return (
    <div
      className={`image ${visible ? "" : "hidden"}`}
      onClick={handleBookmark}
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className={`info ${bookmarked ? "highlighted" : ""}`}>
        <div>{bookmarked ? "🡆" : "➯"}</div>
        <span className="truncate">{title}</span>
      </div>
    </div>
  );
};

export default Image;
