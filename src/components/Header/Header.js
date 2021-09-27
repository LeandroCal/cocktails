import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../lib/constants";

import "./Header.scss";

function Header() {
  const history = useHistory();
  const {
    location: { pathname },
  } = history;
  const [path, setPath] = useState(pathname);

  const changePath = (value) => {
    setPath(value);
    history.push(value);
  };

  if (path === "/") changePath(ROUTES.TAB1);

  return (
    <header className="header">
      <div
        className={`header-link ${path.includes("tab1") ? "active" : ""}`}
        onClick={() => changePath(ROUTES.TAB1)}
      >
        Tab 1
      </div>
      <div
        className={`header-link ${path.includes("tab3") ? "active" : ""}`}
        onClick={() => changePath(ROUTES.TAB3)}
      >
        Tab 3
      </div>
    </header>
  );
}

export default Header;
