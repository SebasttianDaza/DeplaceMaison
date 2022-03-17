import "./draggable.css";
import PropTypes from "prop-types";
import React, {useState, useEffect} from "react";

function Dragable() {
  const [pressed, setPressed] = useState(false);
  const [startX, setStartX] = useState(0);
  const [x, setX] = useState(0);
  //Reference to the element
  const nodeChild = React.useRef(null);

  const mouseSlider = (e) => {
    setPressed(true);
    setStartX(e.clientX);
    e.target.style.cursor = "grabbing";
  };

  const mouseEnter = (e) => {
    e.target.style.cursor = "grab";
  };

  useEffect(() => {
    const mouseup = () => {
      setPressed(false);
    };
    window.removeEventListener("mouseup", mouseup);
    window.addEventListener("mouseup", mouseup);
    return () => {
      window.removeEventListener("mouseup", mouseup);
    };
  });

  const mouseMove = (e) => {
    e.preventDefault();
    if (!pressed) return;
    setX(e.clientX - startX);
    nodeChild.current.style.left = `${x}px`;
    checkBoundary(e);
  };

  const checkBoundary = (e) => {
    let outer = e.target.getBoundingClientRect();
    let inner = nodeChild.current.getBoundingClientRect();

    if (parseInt(nodeChild.current.style.left) > 0) {
      nodeChild.current.style.left = 0;
    } else if (inner.right < outer.right) {
      nodeChild.current.style.left = `-${outer.right - inner.right}px`;
    }
  };

  return (
    <section
      className="draggableSlider"
      onMouseDown={(e) => mouseSlider(e)}
      onMouseEnter={(e) => mouseEnter(e)}
      onMouseMove={(e) => mouseMove(e)}
    >
      <div className="slider" ref={nodeChild}>
        <Card classe="sliderCard" />
        <Card classe="sliderCard" />
        <Card classe="sliderCard" />
        <Card classe="sliderCard" />
        <Card classe="sliderCard" />
      </div>
    </section>
  );
}

const Card = (props) => {
  return (
    <aside className={props.classe}>
      <div>
        <img src="" alt="" />
      </div>
      <div>
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
};

export default Dragable;
