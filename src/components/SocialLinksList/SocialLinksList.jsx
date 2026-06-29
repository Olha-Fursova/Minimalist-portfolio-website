import clsx from "clsx";

import css from "./SocialLinksList.module.css";

const SocialLinksList = ({ iconColor, variant }) => {
  return (
    <ul
      className={clsx(
        css.social__list,
        variant === "footer" && css.footer__social,
        variant === "contact" && css.contact__social,
      )}
    >
      <li className={css.social__item}>
        <a
          className={css.social__link}
          href="https://solvixcode.com"
          aria-label="GitHub"
        >
          <span
            className="visually__hidden"
            aria-hidden="true"
            focusable="false"
          >
            GitHub
          </span>
          <svg className={css.social__icon} style={{ fill: iconColor }}>
            <use href="/icons.svg#icon-github" />
          </svg>
        </a>
      </li>
      <li className={css.social__item}>
        <a
          className={css.social__link}
          href="https://solvixcode.com"
          aria-label="Twitter"
        >
          <span
            className="visually__hidden"
            aria-hidden="true"
            focusable="false"
          >
            Twitter
          </span>
          <svg className={css.social__icon} style={{ fill: iconColor }}>
            <use href="/icons.svg#icon-twitter" />
          </svg>
        </a>
      </li>
      <li className={css.social__item}>
        <a
          className={css.social__link}
          href="https://solvixcode.com"
          aria-label="LinkedIn"
        >
          <span
            className="visually__hidden"
            aria-hidden="true"
            focusable="false"
          >
            LinkedIn
          </span>
          <svg className={css.social__icon} style={{ fill: iconColor }}>
            <use href="/icons.svg#icon-linkedin" />
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinksList;
