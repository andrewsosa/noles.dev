import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavHeader.module.scss";
import Button from "../Button";

const NavSpacer = () => <span className="f5 f4-ns spacer">/</span>;

const NavItem = ({ text, href, children }) => (
  <span className="link dim ph3">
    <Link to={href}>{text || children}</Link>
  </span>
);

const NavMenu = () => (
  <nav class="v-mid graphik f6 f5-ns fw7">
    <NavItem text={"Members"} href={"/developers"} />
    <NavSpacer />
    <NavItem text={"Jobs"} href={"#"} />
    {/* <NavSpacer />
          <NavItem text={"Newsletter"} href={"#"} /> */}
    <NavSpacer />
    <NavItem text={"Join"} href={"#"} />
    {/* <NavItem href={"#"}>
            <Button
              text={"Join"}
              style={{
                padding: "0.5rem 1.5rem",
              }}
            />
          </NavItem> */}
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
