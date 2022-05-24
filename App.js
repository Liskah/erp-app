import React from "react";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from "react-redux";
import AppNavigator from "./navigator/AppNavigator";

const initialState = {
  action: "",
  name: ""
}

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case "OPEN_MENU": 
      return { action: "openMenu"};
    case "CLOSE_MENU":
      return { action: "closeMenu" };
      case "UPDATE_NAME":
        return { name: action.name };
    default:
      return state;
  }
};

const store = configureStore({ reducer })

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
)

export default App;