import Image from "./Image";

const Gallery = ({ children, bookmark }) => (
  <div className="container">
    {children.map((data, i) => (
      <Image data={data} bookmark={bookmark} key={i} />
    ))}
  </div>
);

export default Gallery;
