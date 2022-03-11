import "./nav.css";


const Nav = () => {
    return (
      <nav className="Nav">
        <section className="titleMain">
          <div className="titlePrincipal">
            <div className="sawImage">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/log.svg?alt=media&token=2f336c3d-a366-4bd9-be0d-e635970d7822"
                alt="logo"
              />
            </div>
  
          </div>

          <div className="menu">
            <ul>
              <li>SHOP</li>
              <li>COLLECTIONS</li>
              <li>ABOUT</li>
            </ul>
          </div>
        </section>
        <section className="titleNav">
          <h3>WK MODE</h3>
          <div className="btnMenu">
            <h1>DEPLACE MAISON</h1>
          </div>
        </section>
        <section className="cartNav">
          <p> Cart 0</p>
        </section>
      </nav>
    );
}

export default Nav;