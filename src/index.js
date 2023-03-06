import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Context from "./context/Context";

let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);
