import css from "./Portfolio.module.css";

import { projectsPreviews } from "../../data/projectsPreview";
import PreviewProjectList from "../../components/PreviewProjectList/PreviewProjectList";
import CTA from "../../components/CTA/CTA";

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
