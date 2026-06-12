import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./AppBar.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css["nav__link"], isActive && css.active);
};

const AppBar = ({ isOpen, onToggle }) => {
  return (
    <header className={css.header}>
      <div className={css.header__container}>
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
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/portfolio" className={buildLinkClass}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" className={buildLinkClass}>
            Contact me
          </NavLink>

          {!isOpen ? (
            <button
              className={css.modal__button}
              type="button"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="open menu"
              onClick={onToggle}
            >
              <svg className={css.mobile__btn}>
                <use href="/icons.svg#icon-mobile-menu-open" />
              </svg>
            </button>
          ) : (
            <button
              className={css.modal__button}
              type="button"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="close menu"
              onClick={onToggle}
            >
              <svg className={`${css.mobile__btn} ${css.mobile__close}`}>
                <use href="/icons.svg#icon-mobile-menu-close" />
              </svg>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default AppBar;
