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
  const [heightAuto, setHeightAuto] = useLocalState(0);

  const slider = React.createRef();
  const sliderChild = React.createRef();

  useEffect(() => {
    const handleMouseUp = () => {
      setPressed(false);
    };

    let heightSlider = sliderChild.current.getBoundingClientRect().height;
    setHeightAuto(heightSlider);

    slider.current.style.height = heightAuto + 20 + "px";

    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [pressed, heightAuto]);

  const startSlider = (e) => {
    if (e.type === "mousedown") {
      updateReusable(setPressed, true);
      updateReusable(setStartPosition, e.clientX - sliderChild.current.offsetLeft);
      slider.current.style.cursor = "grabbing";
    }
    if (e.type === "touchstart") {
      updateReusable(setPressed, true);
      updateReusable(setStartPosition, e.touches[0].clientX - sliderChild.current.offsetLeft);
    }
  };

  const updateReusable = (functions, value) => {
    functions(value);
  };

  const mouseTouchEnter = () => {
    setPressed(false);
    slider.current.style.cursor = "grab";
  };

  const moveSlider = (e) => {
    if (!pressed) return;
    if (e.type === "mousemove") {
      e.preventDefault();
      setXposition(e.clientX);
      sliderChild.current.style.left = Xposition - startPosition + "px";
      checkSize();
    }
    if (e.type === "touchmove") {
      setXposition(e.touches[0].clientX);
      sliderChild.current.style.left = Xposition - startPosition + "px";
      checkSize();
    }
  };

  const checkSize = () => {
    let outer = slider.current.getBoundingClientRect();
    let inner = sliderChild.current.getBoundingClientRect();
    if (parseInt(sliderChild.current.style.left) > 0) {
      sliderChild.current.style.left = 0 + "px";
    } else if (inner.right < outer.right) {
      sliderChild.current.style.left = outer.width - inner.width + "px";
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
          classesChild={["cardImage", "cardContent"]}
          img={
            "https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/shoes.svg?alt=media&token=083024f6-3fbd-4c8b-ad7e-57cb1b4332a5"
          }
        />
        <Card
          classe="sliderCard"
          classesChild={["cardImage", "cardContent"]}
          img={
            "https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/shoes.svg?alt=media&token=083024f6-3fbd-4c8b-ad7e-57cb1b4332a5"
          }
        />
        <Card classe="sliderCard" classesChild={["cardImage", "cardContent"]} />
        <Card
          classe="sliderCard"
          classesChild={["cardImage", "cardContent"]}
          img={
            "https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/shoes.svg?alt=media&token=083024f6-3fbd-4c8b-ad7e-57cb1b4332a5"
          }
        />
        <Card classe="sliderCard" classesChild={["cardImage", "cardContent"]} />
        <Card classe="sliderCard" classesChild={["cardImage", "cardContent"]} />
      </section>
    </div>
  );
}

const Card = (props) => {
  const [cardImage, cardContent] = props.classesChild;
  return (
    <aside className={props.classe}>
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
