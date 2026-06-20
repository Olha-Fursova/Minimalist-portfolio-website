import { Link } from "react-router";
import clsx from "clsx";

import css from "./NextPrevProjectToggle.module.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const NextPrevProjectToggle = ({ prevProject, nextProject }) => {
  const { ref, isVisible } = useIntersectionObserver();
  return (
    <div
      className={clsx(
        css.change__container,
        isVisible ? "sectionVisible" : "sectionHiddenDown",
      )}
      ref={ref}
    >
      <Link
        to={`/portfolio/${prevProject.id}`}
        className={`${css.change__box} ${css.change__prev}`}
      >
        <svg className={css.change__icon}>
          <use href="/icons.svg#icon-prev" />
        </svg>
        <div className={css.change__content}>
          <h3 className={css.change__title}>{prevProject.name}</h3>
          <p className={css.change__text}>Previous Project</p>
        </div>
      </Link>

      <div className={css.decorative__vertical}></div>

      <Link
        to={`/portfolio/${nextProject.id}`}
        className={`${css.change__box} ${css.change__next}`}
      >
        <svg className={css.change__icon}>
          <use href="/icons.svg#icon-next" />
        </svg>
        <div className={css.change__content}>
          <h3 className={css.change__title}>{nextProject.name}</h3>
          <p className={css.change__text}>Next Project</p>
        </div>
      </Link>
    </div>
  );
};

export default NextPrevProjectToggle;
