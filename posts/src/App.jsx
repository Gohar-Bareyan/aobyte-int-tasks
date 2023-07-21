import React from "react";

import "./index.scss";

import MainContainer from "./containers/Main";
import DataProvider from "./contexts/DataProvider";

class App extends React.Component {
  render() {
    return (
      <DataProvider>
        <MainContainer />
      </DataProvider>
    );
  }
}

export default App;
