const Image = ({ data, bookmark }) => {
  const { image_id, title, url, bookmarked, visible } = data;
  return (
    <div
      className={`image ${visible ? "" : "hidden"}`}
      onClick={() => {
        bookmark(image_id);
      }}
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
