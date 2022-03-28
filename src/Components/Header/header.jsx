import "./header.css";
import Button from "../button/button.jsx";

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
        <div className="imageClothes">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/secondImage.jpeg?alt=media&token=e5435af3-9b4b-463e-8b35-713272b28f2a"
            alt="avatar"
          />
        </div>
        <div className="imageClothesPosition">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/imageIndex.svg?alt=media&token=0ad451ce-fd34-4550-9860-06a1499e256f"
            alt="Image extra"
          />
        </div>
        <div className="imageClothes">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/fitrstImage.jpeg?alt=media&token=f55663e1-fbd9-4aa5-b200-04bd1a2b5fbd"
            alt="avatar"
          />
        </div>
      </section>
      <Button name="Explore" class={false} />
    </header>
  );
};

export default Header;
