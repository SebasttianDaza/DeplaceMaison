import React from "react";
import ReactDOM from "react-dom";

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
        <section className="contentMarketing">
          <div className="tapeMarketing">
            <div className="contentTape">
              <div className="contentChildTape">
                <div className="contentAnimation">
                  <div className="childAnimation">
                    <h4>
                      Deplace Shop <span>.</span> Do not scroll
                    </h4>
                  </div>
                  <div className="childAnimation">
                    <h4>
                      Deplace Shop <span>.</span> Do not scroll
                    </h4>
                  </div>
                  <div className="childAnimation">
                    <h4>
                      Deplace Shop <span>.</span> Do not scroll
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root"),
);
