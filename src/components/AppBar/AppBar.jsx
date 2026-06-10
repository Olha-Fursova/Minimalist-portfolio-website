import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./AppBar.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css["nav__link"], isActive && css.active);
};

const AppBar = ({ isOpen, onOpen }) => {
  return (
    <header className={css["header-container"]}>
      <NavLink to="/" className={css.logo}>
          <svg className={css["logo__icon"]}>
            <use href="/icons.svg#icon-logo" />
          </svg>
      </NavLink>

      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
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
            <use href="/img/icons.svg#icon-mobile-menu-button" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default AppBar;