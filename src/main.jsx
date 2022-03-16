import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./index.css";
import Nav from "./Components/Nav/nav";
import Header from "./Components/Header/header";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

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
