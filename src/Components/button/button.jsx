import "./button.css";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <section className="contentBtn">
      <div className="linkExplore">
        <a href="">{props.name}</a>
      </div>
      <div className="linkImage">
        <a href="">
          <img
            className="btnImagePosition"
            src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/btn.svg?alt=media&token=e1d97347-0a75-412e-9149-419ae771d7b4"
            alt="avatar"
          />
          <img
            className="btnImageRelative"
            src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/btnContent.svg?alt=media&token=c0a8e476-0798-47e1-a34c-a8d9b393ae01"
            alt="avatar"
          />
        </a>
      </div>
    </section>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
