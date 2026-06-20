import { Link } from "react-router";
import clsx from "clsx";
import css from "./CTA.module.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const CTA = () => {
  const {ref, isVisible} = useIntersectionObserver();
  return (
    <section className={clsx("section", isVisible ? "sectionVisible" : "sectionHidden")} ref={ref}>
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

export default CTA;
