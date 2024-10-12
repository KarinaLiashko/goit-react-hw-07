import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import App from "./App.jsx";
import { fetchContacts } from "./redux/contactOps.js";
import "./index.css";

const Root = () => {
  useEffect(() => {
    store.dispatch(fetchContacts());
  }, []);

  return <App />;
};
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </StrictMode>
);
