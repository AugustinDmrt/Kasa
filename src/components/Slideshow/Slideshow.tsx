import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import "./Slideshow.sass";

const SlideShow = (props: { pictures: string[] }) => {
  let indexImg = 0;
  const [currentImg, setCurrentImg] = useState("");
  useEffect(() => {
    loadImg();
    console.log(indexImg);
  }, []);

  function loadImg() {
    // mettre props.pictures dans une variable et appelé ici la variable
    setCurrentImg(props.pictures[indexImg]);
  }
  //faire des tests sur le min max du tableau avec .lenght pour revenir au debut ou fin du tableau
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
