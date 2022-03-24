import "./draggable.css";
import PropTypes from "prop-types";
import React, {useState, useEffect} from "react";

function useLocalState(defaultValue = 0) {
  const [state, setState] = useState(defaultValue);
  return [state, setState];
}

function Dragable(props) {
  const [pressed, setPressed] = useLocalState(false);
  const [startPosition, setStartPosition] = useLocalState(0);
  const [Xposition, setXposition] = useLocalState(0);

  const slider = React.createRef();
  const sliderChild = React.createRef();

  useEffect(() => {
    const handleMouseUp = () => {
      setPressed(false);
    };

    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [pressed, setPressed, sliderChild]);

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
      sliderChild.current.style.left = `${Xposition - startPosition}px`;
      checkSize();
    }
    if (e.type === "touchmove") {
      setXposition(e.touches[0].clientX);
      sliderChild.current.style.left = `${Xposition - startPosition}px`;
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
        {props.elementsRender().map((item, index) => {
          return (
            <Card
              key={index}
              classe="sliderCard"
              classesChild={[
                "cardImage",
                "cardContent",
                "contentImageCard",
                "contentImageInformation",
              ]}
              img={[item.imgPrincipal, item.imageSecondary]}
            />
          );
        })}
      </section>
    </div>
  );
}

const Card = (props) => {
  const [cardImage, cardContent, ...rest] = props.classesChild;
  const [first, second] = props.img;
  return (
    <aside className={props.classe}>
      <div className={cardImage}>
        <img src={first} alt="" />
      </div>
      <div className={cardContent}>
        <div className={rest[0]}>
          <img src={second} alt="" />
        </div>
        <div className={rest[1]}>
          <h5>duran</h5>
          <p>$230EUR</p>
          <h4>$120EUR</h4>
        </div>
      </div>
    </aside>
  );
};

Dragable.propTypes = {
  elementsRender: PropTypes.func.isRequired,
};

Card.propTypes = {
  classe: PropTypes.string.isRequired,
  classesAnimation: PropTypes.string,
  classesChild: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.arrayOf(PropTypes.string),
};

export default Dragable;
