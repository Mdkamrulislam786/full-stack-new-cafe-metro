import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./route";
//REDUX
import store from "./store";
import { Provider } from "react-redux";


const App = () => {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
