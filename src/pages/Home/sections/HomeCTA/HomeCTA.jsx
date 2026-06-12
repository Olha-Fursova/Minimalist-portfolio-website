import { Link } from "react-router";
import css from "./HomeCTA.module.css";

const HomeCTA = () => {
  return (
    <section className="section">
      <div className={`container ${css.cta__container}`}>
        <h2 className={`section__title ${css.cta__header}`}>
          Interested in doing a project together?
        </h2>

        <div className={css.decorative__line}></div>

        <Link to="/contact" className="btn btn__secondary">
          Contact me
        </Link>
      </div>
    </section>
  );
};

export default HomeCTA;
