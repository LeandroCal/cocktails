import React from "react";
import Header from "../../components/Header";

import "./Layout.scss";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <main className="pt-20">{children}</main>
    </div>
  );
}
