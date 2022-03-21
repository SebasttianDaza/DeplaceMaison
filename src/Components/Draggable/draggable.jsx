import "./draggable.css";
import PropTypes from "prop-types";
import React, {useState, useEffect} from "react";

function useLocalState(defaultValue = 0) {
  const [state, setState] = useState(defaultValue);
  return [state, setState];
}

function Dragable() {
  const [pressed, setPressed] = useLocalState(false);
  const [startPosition, setStartPosition] = useLocalState(0);
  const [Xposition, setXposition] = useLocalState(0);
  const [animate, setAnimate] = useLocalState(false);

  const slider = React.createRef();
  const sliderChild = React.createRef();

  const startSlider = (e) => {
    if (e.type === "mousedown") {
      setPressed(true);
      setStartPosition(e.clientX - slider.current.offsetLeft);
      slider.current.style.cursor = "grabbing";
    }
    if (e.type === "touchstart") {
      setPressed(true);
      setStartPosition(e.touches[0].clientX - slider.current.offsetLeft);
    }
  };

  const mouseTouchEnter = () => {
    setPressed(false);
    slider.current.style.cursor = "grab";
  };

  const moveSlider = (e) => {
    if (!pressed) return;
    e.preventDefault();
    if (e.type === "mousemove") {
      setXposition(e.clientX - startPosition);
    }
    if (e.type === "touchmove") {
      setXposition(e.touches[0].clientX - startPosition);
    }
    sliderChild.current.style.left = Xposition + "px";
    checkSize();
  };

  const checkSize = () => {
    let outer = slider.current.getBoundingClientRect();
    let inner = sliderChild.current.getBoundingClientRect();
    if (parseInt(sliderChild.current.style.left) > 0) {
      sliderChild.current.style.left = 0 + "px";
    } else if (inner.right < outer.right) {
      sliderChild.current.style.left = `-${outer.width - inner.width}px`;
    }
  };

  return (
    <div
      className="draggableSlider"
      ref={slider}
      onMouseDown={(e) => startSlider(e)}
      onTouchStart={(e) => startSlider(e)}
      onMouseEnter={() => mouseTouchEnter()}
      onMouseUp={() => mouseTouchEnter()}
      onTouchEnd={() => mouseTouchEnter()}
      onMouseMove={(e) => moveSlider(e)}
      onTouchMove={(e) => moveSlider(e)}
    >
      <section className="slider" ref={sliderChild}>
        <Card
          classe="sliderCard"
          classesAnimation={animate ? "animate" : undefined}
          classesChild={["cardImage", "cardContent"]}
          img={
            "https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/shoes.svg?alt=media&token=083024f6-3fbd-4c8b-ad7e-57cb1b4332a5"
          }
        />
        <Card
          classe="sliderCard"
          classesAnimation={animate ? "animate" : undefined}
          classesChild={["cardImage", "cardContent"]}
          img={
            "https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/shoes.svg?alt=media&token=083024f6-3fbd-4c8b-ad7e-57cb1b4332a5"
          }
        />
        <Card
          classe="sliderCard"
          classesAnimation={animate ? "animate" : undefined}
          classesChild={["cardImage", "cardContent"]}
        />
        <Card
          classe="sliderCard"
          classesAnimation={animate ? "animate" : undefined}
          classesChild={["cardImage", "cardContent"]}
          img={
            "https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/shoes.svg?alt=media&token=083024f6-3fbd-4c8b-ad7e-57cb1b4332a5"
          }
        />
        <Card
          classe="sliderCard"
          classesAnimation={animate ? "animate" : undefined}
          classesChild={["cardImage", "cardContent"]}
        />
        <Card
          classe="sliderCard"
          classesAnimation={animate ? "animate" : undefined}
          classesChild={["cardImage", "cardContent"]}
        />
      </section>
    </div>
  );
}

const Card = (props) => {
  const [cardImage, cardContent] = props.classesChild;
  return (
    <aside className={props.classe + " " + props.classesAnimation}>
      <div className={cardImage}>
        <img src={props.img} alt="" />
      </div>
      <div className={cardContent}>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h5>duran</h5>
          <p>$230EUR</p>
          <h4>$120EUR</h4>
        </div>
      </div>
    </aside>
  );
};

Card.propTypes = {
  classe: PropTypes.string.isRequired,
  classesAnimation: PropTypes.string,
  classesChild: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string,
};

export default Dragable;
