import React from "react";
import "./styles.scss";
import LeftMenu from "./components/leftMenu/leftMenu";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="wrapper">
        {/* <h1>Hello, React with Webpack and TypeScript!</h1> */}
        <LeftMenu />
      </div>
    </div>
  );
};

export default App;
