import "./footer.css";
import {ErrorBoundary} from "react-error-boundary";

import Button from "../button/button.jsx";
import ErrorFallback from "../../Errors/ErrorFallback.jsx";

const Footer = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <footer className="footer">
        <section className="sectionEmail">
          <div className="emailInfoContent">
            <p>suscribe to newsletter</p>
            <div className="emailImage">
              <img src="https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/imageEmail.svg?alt=media&token=0921b593-adcd-442e-950f-d805559d9e37" />
            </div>
          </div>
          <div className="emailFormContent">
            <form className="formContent">
              <label htmlFor="email">Subsribe to our newsletter</label>
              <div className="contentInput">
                <input type="email" id="email" placeholder="email address" />
                <input type="submit" value="SUBMIT" />
              </div>
            </form>
          </div>
        </section>
        <section className="mainFooter">
          <div className="mainChild">
            <ul className="mainChildUrdonest">
              <h6>info</h6>
              <li>faq</li>
              <li>returns</li>
              <li>contact</li>
            </ul>

            <p>Credits</p>
          </div>
          <div className="mainChild">
            <ul className="mainChildUrdonest">
              <h6>policy</h6>
              <li>terms</li>
              <li>privacy</li>
              <li>cookie</li>
            </ul>

            <p>© 2020 déplacé maison.</p>
          </div>
        </section>
        <section className="btnUpDown">
          <div id="contentBtnUpDown">
            <Button name="up" class={true} />
          </div>
          <div className="contentSocialMedia">
            <a href="#">
              <img src="https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/facebookIcon.svg?alt=media&token=12bcc4c5-cf6d-4121-87ae-1ca386632cf1" />
            </a>
            <a href="#">
              <img src="https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/instagramIcon.svg?alt=media&token=192e3a27-6cea-4ab9-af56-b208baa2a19f" />
            </a>
          </div>
        </section>
      </footer>
    </ErrorBoundary>
  );
};

export default Footer;
