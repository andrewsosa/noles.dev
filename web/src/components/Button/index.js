import React from "react";

const Button = ({ href, children, style, arrow }) => (
  <a
    className="db tc pv3 mb4 w-100 center white mono link ttu br1"
    href={href}
    style={style}
  >
    {children}
    {arrow && <span className="ph2 graphik">→</span>}
  </a>
);

export default Button;
