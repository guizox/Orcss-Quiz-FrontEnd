import React, { Component } from "react";
import { Provider } from "react-redux";
// import Loadable from "react-loadable";
import store from "./store";

// COMPONENTS
import Auth from "./auth";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Auth />
        </Provider>
      </div>
    );
  }
}

export default App;
