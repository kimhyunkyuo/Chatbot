import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import DraggableModalButton from "./components/chatbot/DraggableModalButton";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);

// Expose the chatbot as a global function for external embedding
window.initializeChatbot = function ({ elementId }) {
  const externalRoot = document.getElementById(elementId);

  if (externalRoot) {
    // Render the chatbot in the specified element on the external site
    ReactDOM.createRoot(externalRoot).render(
      <Provider store={store}>
        <DraggableModalButton />
      </Provider>,
    );
  }
};
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
