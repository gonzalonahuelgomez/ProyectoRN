import AppNavigator from "./navigation";
import { Provider } from "react-redux";
import React from "react";
// import store from './store/reducers'

const App = () => {
  return (
    // <Provider store={store}>
      <AppNavigator />
    // </Provider>
  );
};

export default App;
