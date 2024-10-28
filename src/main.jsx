import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./index.css";
import "modern-normalize";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {/* <HelmetProvider> */}
          <App />
          {/* </HelmetProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
