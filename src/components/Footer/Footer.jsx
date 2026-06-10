import { NavLink } from "react-router";

import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footer__container}>
        <NavLink to="/" className={css.logo}>
          <svg className={css.logo__icon}>
            <use href="/icons.svg#icon-logo" />
          </svg>
        </NavLink>

        <nav className={css.nav}>
          <NavLink to="/" className={css.nav__link}>
            Home
          </NavLink>
          <NavLink to="/portfolio" className={css.nav__link}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" className={css.nav__link}>
            Contact me
          </NavLink>
        </nav>

        <ul className={css.social__list}>
          <li className={css.social__item}>
            <a className={css.social__link} href="https://solvixcode.com">
              <svg className={css.social__icon}>
                <use href="/icons.svg#icon-github" />
              </svg>
            </a>
          </li>
          <li className={css.social__item}>
            <a className={css.social__link} href="https://solvixcode.com">
              <svg className={css.social__icon}>
                <use href="/icons.svg#icon-twitter" />
              </svg>
            </a>
          </li>
          <li className={css.social__item}>
            <a className={css.social__link} href="https://solvixcode.com">
              <svg className={css.social__icon}>
                <use href="/icons.svg#icon-linkedin" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
