import React from "react";
import styles from "./NavHeader.module.scss";
import Button from "../Button";

const NavSpacer = () => <span class="mh3 f5 f4-ns">/</span>;

const NavItem = ({ text, href, children }) => (
  <a class="link dim f5 f4-ns dib" href={href}>
    {text || children}
  </a>
);

const NavMenu = () => (
  <nav class="v-mid mono">
    <NavItem text={"About"} href={"#"} />
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
        <h1 className={`f1 ${styles.brand}`}>NOLES.DEV</h1>
        <NavMenu />
      </header>
    </div>
  );
};

export default NavHeader;
export { NavMenu, NavItem, NavSpacer };
