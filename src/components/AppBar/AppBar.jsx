import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./AppBar.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css["nav-link"], isActive && css.active);
};

const AppBar = ({ isOpen, onOpen }) => {
  return (
    <header className={css["header-container"]}>
      <nav className={css.nav}>
        <button
          className={css["modal-button"]}
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="open menu"
          onClick={onOpen}
        >
          <svg className={css["mobile-btn"]}>
            <use href="/img/icons.svg#icon-mobile-menu-button" />
          </svg>
        </button>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        {/* <NavLink to="/" className={css.logo}>
          <img
            className={css.logo}
            src="/img/MokkaLogo.png"
            alt="MokkaMokka logo cat lazy laying on top of name and next to a coffee cup"
          />
        </NavLink> */}
      </nav>
    </header>
  );
};

export default AppBar;