import React from "react";

const Loading = () => {
  const loadingStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", 
    marginTop: '3rem'
  };

  const spinnerStyles = {
    border: "4px solid rgba(0, 0, 0, 0.3)",
    borderTop: "4px solid #3498db",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    animation: "spin 1s linear infinite",
  };

  return (
    <div style={loadingStyles}>
      <div style={spinnerStyles}></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
