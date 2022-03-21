import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./index.css";
import Nav from "./Components/Nav/nav";
import Header from "./Components/Header/header";
import Draggable from "./Components/Draggable/draggable";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <section className="contentMarquee">
          <div className="tapeMarquee">
            <div className="contentMarqueeChild">
              <ChildMarque classe="childAnimation" />
              <ChildMarque classe="childAnimation" />
              <ChildMarque classe="childAnimation" />
              <ChildMarque classe="childAnimation" />
            </div>
          </div>
        </section>
        <section className="titleMarketing">
          <div className="titleContent">
            <div className="childTwo">
              <a href="">
                <span>who we are</span>
              </a>
              <h4>
                An independent <span>brand</span> of
              </h4>
            </div>
            <div className="childGeneral">
              <h4>urban trekking shoes and accessories</h4>
            </div>
            <div className="childGeneral">
              <h4>that comes from a convergence of </h4>
            </div>
            <div className="childGeneral">
              <h4>arts and personalities.</h4>
            </div>
          </div>
        </section>
        <Draggable />
      </div>
    );
  }
}

const ChildMarque = (props) => {
  return (
    <div className={props.classe}>
      <h4>
        <span>.</span>Deplace Shop <span>.</span> Do not scroll
      </h4>
    </div>
  );
};

ChildMarque.propTypes = {
  classe: PropTypes.string.isRequired,
};

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root"),
);
