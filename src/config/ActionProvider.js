class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleQuickGuide = () => {
    const quickGuideMessage = this.createChatBotMessage("", {
      widget: "quickGuide",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, quickGuideMessage],
    }));
  };

  handleProductIntro = () => {
    const productIntroMessage = this.createChatBotMessage("", {
      widget: "productIntroWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, productIntroMessage],
    }));
  };

  handleSimulation = () => {
    const simulationMessage = this.createChatBotMessage("", {
      widget: "simulationWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, simulationMessage],
    }));
  };

  SideContracts = () => {
    const message = this.createChatBotMessage("", {
      widget: "SideContractsWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  SidePolicy = () => {
    const message = this.createChatBotMessage("", {
      widget: "SidePolicyWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  SideContractDetails = () => {
    const message = this.createChatBotMessage("", {
      widget: "SideContractDetailsWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  SideInsuranceBeneficiary = () => {
    const message = this.createChatBotMessage("", {
      widget: "SideInsuranceBeneficiaryWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  SideBeneficiary = () => {
    const message = this.createChatBotMessage("", {
      widget: "SideBeneficiaryWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  MarketingConsent = () => {
    const message = this.createChatBotMessage("", {
      widget: "MarketingConsentWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  InsurancePreparations = () => {
    const message = this.createChatBotMessage("", {
      widget: "InsurancePreparationsWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  ReApplicationInsurancePolicy = () => {
    const message = this.createChatBotMessage("", {
      widget: "ReApplicationInsurancePolicyWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleInsuranceList = () => {
    const message = this.createChatBotMessage(
      "You selected Internet Insurance Products List.",
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  // Helper function to set the currently selected widget without affecting other UI elements
  setCurrentWidget = (widgetName) => {
    this.setState((prevState) => ({
      ...prevState,
      currentWidget: widgetName, // Track the selected widget
    }));
  };

  InsuranceContracts = () => {
    this.setCurrentWidget("InsuranceContractsWidget");
  };

  InsurancePayment = () => {
    this.setCurrentWidget("InsurancePaymentWidget");
  };

  InsuranceTerminate = () => {
    this.setCurrentWidget("InsuranceTerminateWidget");
  };

  PersonalInformation = () => {
    this.setCurrentWidget("PersonalInformationWidget");
  };

  resetState = (newWidget) => {
    // Reset messages and trigger re-render by changing the widget key
    const newKey = Date.now(); // 새로운 key 값 생성

    this.setState({
      messages: [],
      currentWidget: newWidget,
      widgetKey: newKey, // key 값을 갱신하여 강제 리렌더링
    });
  };
  // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  // Function to reset the chatbot and render afterOptionsWidget only
  // AfterInsuranceContracts = () => {
  //   // Clears previous content and renders only the afterOptionsWidget
  //   this.setState({
  //     messages: [], // Clear all previous messages
  //     currentWidget: "afterOptionsWidget", // Set the new widget
  //     widgetKey: Date.now(), // Generate a new key to force re-render
  //   });

  //   // Create a new message for the afterOptionsWidget
  //   const message = this.createChatBotMessage("", {
  //     widget: "afterOptionsWidget",
  //     withAvatar: false,
  //   });

  //   // Update the chatbot state with the new widget
  //   this.setState((prev) => ({
  //     ...prev,
  //     messages: [...prev.messages, message],
  //   }));
  // };

  // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

  // Updated AfterInsuranceContracts method
  AfterInsuranceContracts = () => {
    // Clear previous content and set up both afterOptionsWidget and InsuranceContractsWidget
    this.setState({
      messages: [], // Clear all previous messages
      currentWidget: "", // No need to set a specific widget here
      widgetKey: Date.now(), // Generate a new key to force re-render
    });

    // Create messages for both widgets
    const afterOptionsMessage = this.createChatBotMessage("", {
      widget: "afterOptionsWidget",
      withAvatar: false,
    });

    const insuranceContractsMessage = this.createChatBotMessage("", {
      widget: "InsuranceContractsWidget",
      withAvatar: false,
    });
    // Update the chatbot state with both widgets
    this.setState((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        afterOptionsMessage,
        insuranceContractsMessage,
      ], // Add both messages
    }));
  };
  // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

  AfterInsurancePayment = () => {
    this.resetState("InsurancePaymentWidget"); // Clears previous content and sets pdfViewer widget
    const message = this.createChatBotMessage("", {
      widget: "InsurancePaymentWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  AfterInsuranceTerminate = () => {
    this.resetState("InsuranceTerminateWidget"); // Clears previous content and sets pdfViewer widget
    const message = this.createChatBotMessage("", {
      widget: "InsuranceTerminateWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  AfterPersonalInformation = () => {
    this.resetState("PersonalInformationWidget"); // Clears previous content and sets pdfViewer widget
    const message = this.createChatBotMessage("", {
      widget: "PersonalInformationWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleResetOption1 = () => {
    this.resetState("InsuranceContractsWidget");
  };

  handleResetOption2 = () => {
    this.resetState("InsurancePaymentWidget");
  };

  handleResetOption3 = () => {
    this.resetState("InsuranceTerminateWidget");
  };

  handleResetOption4 = () => {
    this.resetState("PersonalInformationWidget");
  };
}

export default ActionProvider;
