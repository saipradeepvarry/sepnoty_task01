import "./index.css";

const Allcards = (props) => {
  const { details } = props;
  const { name, discription, imageUrl } = details;

  return (
    <div className="card-container">
      <img src={imageUrl} alt="cloud app" class="card-image" />
      <p className="title">{name}</p>
      <p className="card-discription">{discription}</p>
      <p className="learn-more">Learn More</p>
    </div>
  );
};

export default Allcards;