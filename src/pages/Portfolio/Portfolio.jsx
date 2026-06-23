import css from "./Portfolio.module.css";

import { projectsPreviews } from "../../data/projectsPreview";
import {PreviewProjectList, CTA} from "../../components";

const Portfolio = () => {
  return (
    <>
      <div className="section">
        <div className={`container ${css.portfolio__container}`}>
          <PreviewProjectList projects={projectsPreviews} />
        </div>
      </div>
      <CTA />
    </>
  );
};

export default Portfolio;
