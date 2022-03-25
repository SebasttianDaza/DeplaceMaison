import "./comments.css";

const Comments = () => {
  return (
    <article className="Article">
      <section className="articleContentImage">
        <div className="contentImageArt">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/deplacemaison-2f33d.appspot.com/o/imagComments.svg?alt=media&token=a844cc68-24a6-4df6-8052-0453c5e81058"
            alt=""
          />
        </div>
        <div className="contentTextArt">
          <h5>willian gibson</h5>
        </div>
      </section>
      <section className="articleContentText">
        <p>
          Déplacé Maison is a convincer for anticipation. The urban trekking as nevers seen before.
          An exceptional product that has no equal alongside a great team represent the brand
          professionally.
        </p>
      </section>
    </article>
  );
};

export default Comments;
