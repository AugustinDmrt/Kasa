import "./Banner.sass";

const Banner = (props: { img: string; text: string }) => {
  const img = props.img;
  const text = props.text;
  if (text === "") {
    return (
      <div className="banner-container">
        <img className="banner-img" src={img} alt="" />
      </div>
    );
  } else {
    return (
      <div className="banner-container">
        <img className="banner-img" src={img} alt="" />
        <div className="banner-text-container">
          <h1 className="banner-text">{text}</h1>
        </div>
      </div>
    );
  }
};

export default Banner;
