import { useLocation, Link } from "react-router-dom";

import ResponsiveImage from "../images/ResponsiveImage/ResponsiveImage";

import css from "./PreviewProjectList.module.css";

const PreviewProjectList = ({ projects }) => {
  const location = useLocation();
  return (
    <ul className={css.project__list}>
      {projects.map((project, index) => (
        <li
          className={`${css.project__card} ${
            index % 2 !== 0 ? css.card__reverse : ""
          }`}
          key={project.id}
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

              <Link
                className="btn btn__secondary"
                to={`/portfolio/${project.id}`}
                state={location}
              >
                View Project
              </Link>
            </article>

            <div className="decorative__line"></div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PreviewProjectList;
