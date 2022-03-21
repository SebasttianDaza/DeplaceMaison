import "./draggable.css";
import PropTypes from "prop-types";
import React, {useState, useEffect} from "react";

function useLocalState(defaultValue = 0) {
  const [state, setState] = useState(defaultValue);

  return [state, setState];
}

function changeStyle(e, draggable = "") {
  e.target.classList.add(draggable);
}

function removeStyle(e, draggable = "") {
  e.target.classList.remove(draggable);
}

function Dragable() {
  const [animate, setAnimate] = useLocalState(false);

  const slider = React.createRef();
  const sliderChild = React.createRef();

  return (
    <div
      className="draggableSlider"
      ref={slider}
      onMouseDown={(e) => startSlider(e)}
      onMouseMove={(e) => startMove(e)}
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
