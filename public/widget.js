// widget.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import DraggableModalButton from "../src/components/chatbot/DraggableModalButton";

window.initializeChatbot = function ({ elementId }) {
  const externalRoot = document.getElementById(elementId);
  if (externalRoot) {
    ReactDOM.createRoot(externalRoot).render(
      <Provider store={store}>
        <DraggableModalButton />
      </Provider>,
    );
  }
};
