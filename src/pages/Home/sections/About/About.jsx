import { Link } from "react-router";
import clsx from "clsx";
import ResponsiveImage from "../../../../components/images/ResponsiveImage/ResponsiveImage";
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver";

import css from "./About.module.css";

const About = () => {
  const {ref, isVisible} = useIntersectionObserver();

  return (
    <section className={clsx("section", isVisible ? "sectionVisible" : "sectionHiddenReverse")} id="about" ref={ref}>
      <div className={`container ${css.about__container}`}>
        <ResponsiveImage
          baseName="image-homepage-profile"
          alt="Portrait of the website owner with a side profile."
          folderName="homepage"
        />
        <div className={css.about_content}>
          <div className="decorative__line"></div>

          <article className={css.about__article}>
            <h2 className="section__title">About Me</h2>

            <p className={css.about__bio}>
              I’m a junior front-end developer looking for a new role in an
              exciting company. I focus on writing accessible HTML, using modern
              CSS practices and writing clean JavaScript. When writing
              JavaScript code, I mostly use React, but I can adapt to whatever
              tools are required. I’m based in London, UK, but I’m happy working
              remotely and have experience in remote teams. When I’m not coding,
              you’ll find me outdoors. I love being out in nature whether that’s
              going for a walk, run or cycling. I’d love you to check out my
              work.
            </p>

            <Link to="/portfolio" className="btn btn__secondary">
              Go to portfolio
            </Link>
          </article>

          <div className="decorative__line"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
