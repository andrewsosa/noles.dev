import React from "react";
import { Link } from "gatsby";
import styles from "./NavHeader.module.scss";

const NavSpacer = () => <span className="f5 f4-ns spacer"></span>;

const NavItem = ({ text, href, children, external }) => {
  const item = external ? (
    <a href={href}>{text || children}</a>
  ) : (
    <Link to={href}>{text || children}</Link>
  );

  return <span className="link dim ph3">{item}</span>;
};

const NavMenu = () => (
  <nav className="v-mid graphik f6 f5-ns fw7">
    <NavItem text={"About"} href={"/#about"} />
    <NavSpacer />

    <NavItem text={"Members"} href={"/developers"} />
    <NavSpacer />
    {/* <NavItem text={"Jobs"} href={"#"} />
    <NavSpacer /> */}
    <NavItem
      text={"Join"}
      href={`${process.env.GATSBY_API_PREFIX}/oauth-init`}
      external
    />
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
