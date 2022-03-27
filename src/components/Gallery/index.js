import Image from "../Image";
import Container from "../Container";

const Gallery = ({ children, bookmarkImage }) => {
  const imageComponents = children.map((data, i) => (
    <Image data={data} bookmark={bookmarkImage} key={i} />
  ));

  return <Container>{imageComponents}</Container>;
};

export default Gallery;
