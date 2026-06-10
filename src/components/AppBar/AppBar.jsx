import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./AppBar.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css["nav__link"], isActive && css.active);
};

const AppBar = ({ isOpen, onOpen }) => {
  return (
    <header className={css.header}>
      <div className={css["header__container"]}>
        <NavLink to="/" className={css.logo}>
          <svg className={css["logo__icon"]}>
            <use href="/icons.svg#icon-logo" />
          </svg>
        </NavLink>

        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/portfolio" className={buildLinkClass}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" className={buildLinkClass}>
            Contact me
          </NavLink>

          <button
            className={css["modal__button"]}
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="open menu"
            onClick={onOpen}
          >
            <svg className={css["mobile__btn"]}>
              <use href="/icons.svg#icon-mobile-menu-open" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default AppBar;
