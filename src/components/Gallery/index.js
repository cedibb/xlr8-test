import Image from "../Image";

const Gallery = ({ children, bookmarkImage }) => {
  const imageComponents = children.map((data, i) => (
    <Image data={data} bookmark={bookmarkImage} key={i} />
  ));

  return <div className="container">{imageComponents}</div>;
};

export default Gallery;
