import { useParams } from "react-router-dom";

import css from "./ProjectDetailsPage.module.css";
import ResponsiveImage from "../../components/images/ResponsiveImage/ResponsiveImage";
import { projectsPreviews } from "../../data/projects-preview";
import ProjectMainDetails from "../../components/ProjectMainDetails/ProjectMainDetails";
import CTA from "../../components/CTA/CTA";
import NextPrevProjectToggle from "../../components/NextPrevProjectToggle/NextPrevProjectToggle";

const ProjectDetailsPage = () => {
  const { projectId } = useParams();

  const currentProject = projectsPreviews.find(
    (project) => project.id === projectId,
  );
  const currentIndex = projectsPreviews.findIndex(
    (project) => project.id === projectId,
  );

  const prevIndex =
    currentIndex === 0 ? projectsPreviews.length - 1 : currentIndex - 1;
  const nextIndex =
    currentIndex === projectsPreviews.length - 1 ? 0 : currentIndex + 1;

  const prevProject = projectsPreviews[prevIndex];

  const nextProject = projectsPreviews[nextIndex];

  return (
    <>
      <div className="section">
        <div className="container">
          <div className={css.project__container}>
            <ResponsiveImage
              baseName={currentProject.static__previews.image__main}
              alt={`${currentProject.name} landing page preview as a hero image.`}
              folderName="details"
            />

            <div className={css.previews__container}>
              <ProjectMainDetails project={currentProject} />

              <div className={css.content__container}>
                <article className={css.bg__info}>
                  <h2 className={css.previews__title}>Project Background</h2>
                  <p className={css.info__text}>
                    This project was a front-end challenge from Frontend Mentor.
                    It’s a platform that enables you to practice building
                    websites to a design and project brief. Each challenge
                    includes mobile and desktop designs to show how the website
                    should look at different screen sizes. Creating these
                    projects has helped me refine my workflow and solve
                    real-world coding problems. I’ve learned something new with
                    each project, helping me to improve and adapt my style.
                  </p>
                </article>

                <div className={css.static__info}>
                  <h2 className={css.previews__title}>Static Previews</h2>

                  <div className={css.images__container}>
                    <ResponsiveImage
                      baseName={currentProject.static__previews.image__1}
                      alt={`${currentProject.name} landing page desktop version static image.`}
                      folderName="details"
                    />
                    <ResponsiveImage
                      baseName={currentProject.static__previews.image__2}
                      alt={`${currentProject.name} landing page mobile version static image.`}
                      folderName="details"
                    />
                  </div>
                </div>
              </div>
            </div>

            <NextPrevProjectToggle
              prevProject={prevProject}
              nextProject={nextProject}
            />
          </div>
        </div>
      </div>

      <CTA />
    </>
  );
};

export default ProjectDetailsPage;
