import clsx from "clsx";

import css from "./MobileMenu.module.css";
import { NavLink } from "react-router";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={clsx(css.modal__overlay, isOpen && css.is__open)}>
      <aside className={clsx(css.modal, isOpen && css.modalOpen)}>
        <nav className={css.mobile__nav}>
          <NavLink to="/" className={css.nav__link} onClick={onClose}>
            Home
          </NavLink>
          <NavLink to="/portfolio" className={css.nav__link} onClick={onClose}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" className={css.nav__link} onClick={onClose}>
            Contact me
          </NavLink>
        </nav>
      </aside>
    </div>
  );
};

export default MobileMenu;
