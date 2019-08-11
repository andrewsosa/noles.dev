import React from "react";
import { Link } from "gatsby";
import styles from "./NavHeader.module.scss";

const NavSpacer = () => <span className="f5 f4-ns spacer">/</span>;

const NavItem = ({ text, href, children }) => (
  <span className="link dim ph3">
    <Link to={href}>{text || children}</Link>
  </span>
);

const NavMenu = () => (
  <nav className="v-mid graphik f6 f5-ns fw7">
    <NavItem text={"Members"} href={"/developers"} />
    <NavSpacer />
    <NavItem text={"Jobs"} href={"#"} />
    <NavSpacer />
    <NavItem text={"Join"} href={"#"} />
  </nav>
);

const NavHeader = () => {
  return (
    <div className={styles.nav}>
      <header className="pv4 mw8 center border-box flex flex-column items-center">
        <Link to="/">
          <h1 className="f2 fw7 graphik">NOLES.DEV</h1>
        </Link>

        <NavMenu />
      </header>
    </div>
  );
};

export default NavHeader;
export { NavMenu, NavItem, NavSpacer };
