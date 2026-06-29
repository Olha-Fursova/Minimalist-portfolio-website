import clsx from "clsx";
import { useRef, useEffect } from "react";

import css from "./MobileMenu.module.css";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ isOpen, onClose }) => {
  const firstLinkRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      firstLinkRef.current?.focus();
    }
  }, [isOpen])
  return (
    <div className={clsx(css.modal__overlay, isOpen && css.is__open)}>
      <aside
        className={clsx(css.modal, isOpen && css.modalOpen)}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className={css.mobile__nav}>
          <NavLink to="/" className={css.nav__link} onClick={onClose} ref={firstLinkRef}>
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
