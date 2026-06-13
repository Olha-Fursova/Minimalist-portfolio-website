import css from "./SocialLinksList.module.css";

const SocialLinksList = ({ iconColor }) => {
  return (
    <ul className={css.social__list}>
      <li className={css.social__item}>
        <a className={css.social__link} href="https://solvixcode.com">
          <svg className={css.social__icon} style={{ "fill": iconColor }}>
            <use href="/icons.svg#icon-github" />
          </svg>
        </a>
      </li>
      <li className={css.social__item}>
        <a className={css.social__link} href="https://solvixcode.com">
          <svg className={css.social__icon} style={{ "fill": iconColor }}>
            <use href="/icons.svg#icon-twitter" />
          </svg>
        </a>
      </li>
      <li className={css.social__item}>
        <a className={css.social__link} href="https://solvixcode.com">
          <svg className={css.social__icon} style={{ "fill": iconColor }}>
            <use href="/icons.svg#icon-linkedin" />
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinksList;
