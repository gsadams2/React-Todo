import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
    </header>
  );
}

const headerStyle = {
  background: "orange",
  color: "black",
  textAlign: "center",
  padding: "5px"
};

export default Header;
