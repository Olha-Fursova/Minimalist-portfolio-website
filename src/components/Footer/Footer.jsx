import { NavLink } from "react-router";

import css from "./Footer.module.css";
import SocialLinksList from "../SocialLinksList/SocialLinksList";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footer__container}>
        <NavLink to="/" className={css.logo__container}>
          <svg className={css.logo__icon}>
            <use href="/icons.svg#icon-logo" />
          </svg>

          <svg className={css.logo__decorative1}>
            <use href="/icons.svg#icon-logo" />
          </svg>
          
          <svg className={css.logo__decorative2}>
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

        <SocialLinksList iconColor="var(--color-bg)" variant="footer"/>
      </div>
    </footer>
  );
};

export default Footer;
