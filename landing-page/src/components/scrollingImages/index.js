import "./index.css";

const ScrollingImagesContent = (props) => {
  const { details } = props;
  const { imageUrl, alt } = details;

  return (
    <div className="slide">
      <img src={imageUrl} alt={alt} />
    </div>
  );
};

export default ScrollingImagesContent;