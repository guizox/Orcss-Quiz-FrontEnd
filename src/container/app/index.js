import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Test from "../../component/Test";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Test />
      </Provider>
    );
  }
}

export default App;
