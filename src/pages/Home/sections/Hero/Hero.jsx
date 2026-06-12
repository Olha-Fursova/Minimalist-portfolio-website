import ResponsiveImage from "../../../../components/images/ResponsiveImage/ResponsiveImage";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <section className="section">
      <div className={`container ${css.hero__container}`}>
        <ResponsiveImage
          baseName="image-homepage-hero"
          alt="A monitor in the center of the image with open manage app on the screen and laptop on the table in front of it."
          folderName="homepage"
        />
        <div className={css.text__container}>
          <h1 className={css.home__header}>
            Hey, I’m Alex Spencer and I love building beautiful websites
          </h1>

          <a className={`btn__primary ${css.hero__cta}`} href="#about">
            <span className={css.icon__container}>
              <svg className={css.button__icon}>
                <use href="/icons.svg#icon-arrow-down" />
              </svg>
            </span>
            <p className="btn">
              About Me
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
