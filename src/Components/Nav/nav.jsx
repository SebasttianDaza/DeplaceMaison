import "./nav.css";

const Nav = () => {
    return (
      <nav className="Nav">
        <section className="titleMain">
          <div className="titlePrincipal">
            <h1>DEPLACE MAISON</h1>
          </div>
          <div>
            <h1>DEPLACE MAISON</h1>
          </div>
          <div>
            <ul>
              <li>SHOP</li>
              <li>COLLECTIONS</li>
              <li>ABOUT</li>
            </ul>
          </div>
        </section>
        <section className="titleNav">
            <h3>WK MODE</h3>
        </section>
        <section className="cartNav">
            <p> Cart 0</p>
        </section>
      </nav>
    );
}

export default Nav;