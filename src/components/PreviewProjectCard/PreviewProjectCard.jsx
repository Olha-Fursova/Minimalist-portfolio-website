import { Link } from "react-router-dom";
import clsx from "clsx";

import css from "./PreviewProjectCard.module.css";

import ResponsiveImage from "../images/ResponsiveImage/ResponsiveImage";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const PreviewProjectCard = ({ project, index }) => {
  const {ref, isVisible} = useIntersectionObserver();
  return (
    <li
      ref={ref}
      className={clsx(
        css.project__card,
        (index % 2 !== 0) && css.card__reverse,
        (index % 2 !== 0) ? "sectionHiddenReverse" : "sectionHidden",
        isVisible ? "sectionVisible" : "sectionHidden",
      )}
    >
      <ResponsiveImage
        baseName={project.image__name}
        alt={project.image__alt}
        folderName={"portfolio"}
      />
      <div className={css.project__content}>
        <div className="decorative__line"></div>
        <article className={css.project__text}>
          <h3 className="section__title">{project.name}</h3>
          <p className={css.project__description}>{project.description}</p>

          <Link className="btn btn__secondary" to={`/portfolio/${project.id}`}>
            View Project
          </Link>
        </article>

        <div className="decorative__line"></div>
      </div>
    </li>
  );
};

export default PreviewProjectCard;
