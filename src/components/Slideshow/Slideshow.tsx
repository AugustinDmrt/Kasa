import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useCallback, useEffect, useState } from "react";
import "./Slideshow.sass";

const SlideShow = (props: { pictures: string[] }) => {
  let indexImg = 0;
  const indexNow = props.pictures[indexImg];
  const [currentImg, setCurrentImg] = useState("");
  const loadImg = useCallback(() => {
    setCurrentImg(indexNow);
  }, [indexNow, setCurrentImg]);

  useEffect(() => {
    loadImg();
    console.log(indexImg);
  }, [indexImg, loadImg]);

  function decrImg() {
    indexImg--;
    loadImg();
  }

  function incrImg() {
    indexImg++;
    loadImg();
  }

  return (
    <div className="slideshow-container">
      <CaretLeft size={32} weight="bold" color="red" onClick={decrImg} />
      <img className="slideshow-image" src={currentImg} alt=""></img>
      <CaretRight size={32} weight="bold" color="red" onClick={incrImg} />
    </div>
  );
};
export default SlideShow;
