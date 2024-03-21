import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useState } from "react";
import "./Slideshow.sass";

const SlideShow = (props: { pictures: string[] }) => {
  const [indexImg, setIndexImg] = useState(0);

  const decrImg = () => {
    setIndexImg((prevIndex) => {
      if (prevIndex === 0) {
        return props.pictures.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const incrImg = () => {
    setIndexImg((prevIndex) => {
      if (prevIndex === props.pictures.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const currentImg = props.pictures[indexImg];

  return (
    <div className="slideshow-container">
      {props.pictures.length > 1 && (
        <CaretLeft
          className="CaretLeft"
          size={32}
          weight="bold"
          color="white"
          onClick={decrImg}
        />
      )}
      <img className="slideshow-image" src={currentImg} alt=""></img>
      {props.pictures.length > 1 && (
        <CaretRight
          className="CaretRight"
          size={32}
          weight="bold"
          color="white"
          onClick={incrImg}
        />
      )}
    </div>
  );
};

export default SlideShow;
