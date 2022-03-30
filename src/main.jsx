import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./index.css";
import Nav from "./Components/Nav/nav";
import Header from "./Components/Header/header";
import Draggable from "./Components/Draggable/draggable";
import Button from "./Components/button/button.jsx";
import Comments from "./Components/Comments/comments.jsx";
import Footer from "./Components/Footer/footer.jsx";
import Cursor from "./Components/GooeyCursor/gooey.jsx";

class Main extends React.Component {
  childElementsSend() {
    const element = [
      {
        imgPrincipal:
          "https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/shoes.svg?alt=media&token=083024f6-3fbd-4c8b-ad7e-57cb1b4332a5",
        imageSecondary:
          "https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/imageMark.svg?alt=media&token=478f8bea-a50f-472a-8526-21477705acaa",
      },
      {
        imgPrincipal:
          "https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/shoes.svg?alt=media&token=083024f6-3fbd-4c8b-ad7e-57cb1b4332a5",
        imageSecondary:
          "https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/imageMark.svg?alt=media&token=478f8bea-a50f-472a-8526-21477705acaa",
      },
      {
        imgPrincipal:
          "https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/shoes.svg?alt=media&token=083024f6-3fbd-4c8b-ad7e-57cb1b4332a5",
        imageSecondary:
          "https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/imageMark.svg?alt=media&token=478f8bea-a50f-472a-8526-21477705acaa",
      },
      {
        imgPrincipal:
          "https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/shoes.svg?alt=media&token=083024f6-3fbd-4c8b-ad7e-57cb1b4332a5",
        imageSecondary:
          "https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/imageMark.svg?alt=media&token=478f8bea-a50f-472a-8526-21477705acaa",
      },
      {
        imgPrincipal:
          "https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/shoes.svg?alt=media&token=083024f6-3fbd-4c8b-ad7e-57cb1b4332a5",
        imageSecondary:
          "https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/imageMark.svg?alt=media&token=478f8bea-a50f-472a-8526-21477705acaa",
      },
      {
        imgPrincipal:
          "https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/shoes.svg?alt=media&token=083024f6-3fbd-4c8b-ad7e-57cb1b4332a5",
        imageSecondary:
          "https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/imageMark.svg?alt=media&token=478f8bea-a50f-472a-8526-21477705acaa",
      },
    ];
    return element;
  }

  render() {
    return (
      <div>
        <Cursor />
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
        <Draggable elementsRender={this.childElementsSend.bind(this)} />
        <section className="sectionBtn">
          <Button name="SHOP ALL" class={false} />
        </section>
        <section className="sectionComments">
          <Comments />
        </section>
        <section className="sectionFooter">
          <Footer />
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
