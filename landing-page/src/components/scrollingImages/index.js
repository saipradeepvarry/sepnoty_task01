import "./styledComponents.js";
import {Slide,SlideImg} from "./styledComponents"

const ScrollingImagesContent = (props) => {
  const { details } = props;
  const { imageUrl, alt } = details;

  return (
    <Slide>
      <SlideImg src={imageUrl} alt={alt} />
    </Slide>
  );
};

export default ScrollingImagesContent;