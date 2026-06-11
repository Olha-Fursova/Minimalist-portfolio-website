import css from "./ResponsiveImage.module.css";

const ResponsiveImage = ({ baseName, alt, folderName }) => {
  return (
    <picture className={css.image__container}>
      <source
        media="(min-width: 90rem)"
        srcSet={`/${folderName}/desktop/${baseName}.jpg 1x, /${folderName}/desktop/${baseName}@2x.jpg 2x`}
      />

      <source
        media="(min-width: 48rem)"
        srcSet={`/${folderName}/tablet/${baseName}.jpg 1x, /${folderName}/tablet/${baseName}@2x.jpg 2x`}
      />

      <img
        className={css.section__image}
        src={`/${folderName}/mobile/${baseName}.jpg`}
        srcSet={`/${folderName}/mobile/${baseName}.jpg 1x, /${folderName}/mobile/${baseName}@2x.jpg 2x`}
        alt={alt}
      />
    </picture>
  );
};

export default ResponsiveImage;
