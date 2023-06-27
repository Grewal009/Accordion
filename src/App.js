import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <>
      <h1 className="text-red-600 text-xl font-bold">Hello React</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
