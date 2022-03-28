import "./nav.css";
import {BsGripHorizontal} from "react-icons/bs";
import React, {useEffect} from "react";

const Nav = () => {
  const menu = React.createRef();
  const titleNav = React.createRef();
  const titlePrincipal = React.createRef();
  const titleSecondary = React.createRef();

  const changeStyle = (element, classses) => {
    element.current.classList.add(classses);
  };

  const removeStyle = (element, classses) => {
    element.current.classList.remove(classses);
  };

  useEffect(() => {
    const handleScroll = () => {
      const WINDOW = window.scrollY;
      if ((WINDOW > 600 && WINDOW < 800) || (WINDOW > 1100 && WINDOW < 1700) || WINDOW >= 2027) {
        changeStyle(menu, "scrollAnimation");
      } else {
        removeStyle(menu, "scrollAnimation");
      }

      if ((WINDOW > 1100 && WINDOW < 1400) || (WINDOW > 1602 && WINDOW < 2254) || WINDOW >= 2327) {
        changeStyle(titlePrincipal, "scrollAnimation");
      } else {
        removeStyle(titlePrincipal, "scrollAnimation");
      }

      if (WINDOW >= 2) {
        changeStyle(titleNav, "scrollAnimations");
      } else {
        removeStyle(titleNav, "scrollAnimations");
      }

      if (WINDOW > 1227) {
        changeStyle(titleSecondary, "scrollAnimationParagraph");
      } else {
        removeStyle(titleSecondary, "scrollAnimationParagraph");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menu, titlePrincipal, titleSecondary, titleNav]);

  return (
    <nav className="Nav">
      <section className="titleMain">
        <div ref={titlePrincipal} className="titlePrincipal">
          <div className="sawImage">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/log.svg?alt=media&token=2f336c3d-a366-4bd9-be0d-e635970d7822"
              alt="logo"
            />
          </div>
        </div>

        <div ref={menu} className="menu">
          <ul>
            <li>SHOP</li>
            <li>COLLECTIONS</li>
            <li>ABOUT</li>
          </ul>
        </div>
      </section>
      <section className="titleNav">
        <h3 ref={titleNav}>WK MODE</h3>
        <div className="btnMenu">
          <BsGripHorizontal />
        </div>
      </section>
      <section ref={titleSecondary} className="cartNav">
        <p> Cart 0</p>
      </section>
    </nav>
  );
};

export default Nav;
