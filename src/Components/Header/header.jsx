import "./header.css";

const Header = () => {
  return (
    <header className="Header">
      <section className="headerTitle">
        <div className="titleFirst">
          <h2>spring</h2>
        </div>
        <div className="secondFirst">
          <h2>Summer</h2>
          <div>
            <p>coll</p>
            <p>2022</p>
          </div>
        </div>
      </section>
      <section className="contentImage">
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/secondImage.jpeg?alt=media&token=e5435af3-9b4b-463e-8b35-713272b28f2a"
            alt="avatar"
          />
        </div>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/fitrstImage.jpeg?alt=media&token=f55663e1-fbd9-4aa5-b200-04bd1a2b5fbd"
            alt="avatar"
          />
        </div>
      </section>
      <section className="contentBtn">
        <div className="linkExplore">
          <a href="">Explore</a>
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
    </header>
  );
};

export default Header;
