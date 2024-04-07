import "./Card.sass";

const Card = (props: { img: string; title: string }) => {
  const img = props.img;
  const title = props.title;
  return (
    <div className="card">
      <img className="card-image" src={img} alt="" />
      <h1 className="card-title">{title}</h1>
    </div>
  );
};

export default Card;
