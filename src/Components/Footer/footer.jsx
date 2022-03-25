import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="sectionEmail">
        <div>
          <p>suscribe to newsletter</p>
          <img src="https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/imageEmail.svg?alt=media&token=0921b593-adcd-442e-950f-d805559d9e37" />
        </div>
        <div>
          <form>
            <label />
            <div>
              <input type="email" placeholder="email address" />
              <input type="submit" value="SUBMIT" />
            </div>
          </form>
        </div>
      </section>
      <section>
        <div>
          <h6>info</h6>
          <ul>
            <li>faq</li>
            <li>returns</li>
            <li>contact</li>
          </ul>

          <p>Credits</p>
        </div>
        <div>
          <h6>info</h6>
          <ul>
            <li>faq</li>
            <li>returns</li>
            <li>contact</li>
          </ul>

          <p>Credits</p>
        </div>
      </section>
      <section>Hola</section>
    </footer>
  );
};

export default Footer;
