import React from "react";

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "silver",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "5rem" }}>404</h1>
      <h1>The webpage you are looking for does not exist</h1>
    </div>
  );
}

export default NotFound;
