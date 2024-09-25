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
  SidePolicyPar = () => {
    const message = this.createChatBotMessage("", {
      widget: "SidePolicyParWidget",
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
  SideContractDetailsPar = () => {
    const message = this.createChatBotMessage("", {
      widget: "SideContractDetailsParWidget",
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
  SideInsuranceBeneficiaryPar = () => {
    const message = this.createChatBotMessage("", {
      widget: "SideInsuranceBeneficiaryParWidget",
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
  SideBeneficiaryPar = () => {
    const message = this.createChatBotMessage("", {
      widget: "SideBeneficiaryParWidget",
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
  
  MarketingConsentPar = () => {
    const message = this.createChatBotMessage("", {
      widget: "MarketingConsentParWidget",
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
  AfterInsuranceContracts = () => {
    const message = this.createChatBotMessage("", {
      widget: "InsuranceContractsWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  // // Updated AfterInsuranceContracts method
  // AfterInsuranceContracts = () => {
  //   // Clear previous content and set up both afterOptionsWidget and InsuranceContractsWidget
  //   this.setState({
  //     messages: [], // Clear all previous messages
  //     currentWidget: "", // No need to set a specific widget here
  //     widgetKey: Date.now(), // Generate a new key to force re-render
  //   });
  //   // Create messages for both widgets
  //   const afterOptionsMessage = this.createChatBotMessage("", {
  //     widget: "afterOptionsWidget",
  //     withAvatar: false,
  //   });
  //   const insuranceContractsMessage = this.createChatBotMessage("", {
  //     widget: "InsuranceContractsWidget",
  //     withAvatar: false,
  //   });
  //   // Update the chatbot state with both widgets
  //   this.setState((prev) => ({
  //     ...prev,
  //     messages: [
  //       ...prev.messages,
  //       afterOptionsMessage,
  //       insuranceContractsMessage,
  //     ], // Add both messages
  //   }));
  // };
  // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  resetState = (newWidget) => {
    // Reset messages and trigger re-render by changing the widget key
    const newKey = Date.now(); // 새로운 key 값 생성
    this.setState({
      messages: [],
      currentWidget: newWidget,
      widgetKey: newKey, // key 값을 갱신하여 강제 리렌더링
    });
  };
  // AfterInsuranceContracts = () => {
  //   // Clear previous content and set up both afterOptionsWidget and InsuranceContractsWidget
  //   this.setState({
  //     messages: [], // Clear all previous messages
  //     currentWidget: "", // No need to set a specific widget here
  //     widgetKey: Date.now(), // Generate a new key to force re-render
  //   });
  //   // Create messages for both widgets
  //   const afterOptionsMessage = this.createChatBotMessage("", {
  //     widget: "afterOptionsWidget",
  //     withAvatar: false,
  //   });
  //   const insuranceContractsMessage = this.createChatBotMessage("", {
  //     widget: "InsuranceContractsWidget",
  //     withAvatar: false,
  //   });
  //   // Update the chatbot state with both widgets
  //   this.setState((prev) => ({
  //     ...prev,
  //     messages: [
  //       ...prev.messages,
  //       afterOptionsMessage,
  //       insuranceContractsMessage,
  //     ], // Add both messages
  //   }));
  // };
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
  initialize = () => {
    const message = this.createChatBotMessage("", {
      widget: "optionsWidget",
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

  InsureAnotherPerson = () => {
    const message = this.createChatBotMessage("", {
      widget: "InsureAnotherPersonWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  InsurancePolicy = () => {
    const message = this.createChatBotMessage("", {
      widget: "InsurancePolicyWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  InsureAnotherPerson1 = () => {
    const message = this.createChatBotMessage("", {
      widget: "InsureAnotherPerson1Widget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  InsurancePreparations1 = () => {
    const message = this.createChatBotMessage("", {
      widget: "InsurancePreparations1Widget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  InsurancePreparations12 = () => {
    const message = this.createChatBotMessage("", {
      widget: "InsurancePreparations12Widget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  InsureAnotherPerson12 = () => {
    const message = this.createChatBotMessage("", {
      widget: "InsureAnotherPerson12Widget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  InsurancePolicy1 = () => {
    const message = this.createChatBotMessage("", {
      widget: "InsurancePolicy1Widget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  InsurancePolicy12 = () => {
    const message = this.createChatBotMessage("", {
      widget: "InsurancePolicy12Widget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  InsurancePolicyAfterPurchase1 = () => {
    const message = this.createChatBotMessage("", {
      widget: "InsurancePolicyAfterPurchase1Widget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  InsurancePolicyAfterPurchase12 = () => {
    const message = this.createChatBotMessage("", {
      widget: "InsurancePolicyAfterPurchase12Widget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  InsurancePolicyAfterPurchase = () => {
    const message = this.createChatBotMessage("", {
      widget: "InsurancePolicyAfterPurchaseWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  SpecifyingBeneficiaries1 = () => {
    const message = this.createChatBotMessage("", {
      widget: "SpecifyingBeneficiaries1Widget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  SpecifyingBeneficiaries12 = () => {
    const message = this.createChatBotMessage("", {
      widget: "SpecifyingBeneficiaries12Widget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  SpecifyingBeneficiaries = () => {
    const message = this.createChatBotMessage("", {
      widget: "SpecifyingBeneficiariesWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  AmountInsurance1 = () => {
    const message = this.createChatBotMessage("", {
      widget: "AmountInsurance1Widget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  AmountInsurance12 = () => {
    const message = this.createChatBotMessage("", {
      widget: "AmountInsurance12Widget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  AmountInsurance = () => {
    const message = this.createChatBotMessage("", {
      widget: "AmountInsuranceWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  Uninsured = () => {
    const message = this.createChatBotMessage("", {
      widget: "UninsuredWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  Uninsured1 = () => {
    const message = this.createChatBotMessage("", {
      widget: "Uninsured1Widget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  Uninsured12 = () => {
    const message = this.createChatBotMessage("", {
      widget: "Uninsured12Widget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  WhenPurchaseInsurance = () => {
    const message = this.createChatBotMessage("", {
      widget: "WhenPurchaseInsuranceWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  WhenPurchaseInsurance1 = () => {
    const message = this.createChatBotMessage("", {
      widget: "WhenPurchaseInsurance1Widget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  WhenPurchaseInsurance12 = () => {
    const message = this.createChatBotMessage("", {
      widget: "WhenPurchaseInsurance12Widget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  LimitInsurance = () => {
    const message = this.createChatBotMessage("", {
      widget: "LimitInsuranceWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  LimitInsurance1 = () => {
    const message = this.createChatBotMessage("", {
      widget: "LimitInsurance1Widget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  LimitInsurance12 = () => {
    const message = this.createChatBotMessage("", {
      widget: "LimitInsurance12Widget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  SideInsuranceBeneficiaryConsent = () => {
    const message = this.createChatBotMessage("", {
      widget: "SideInsuranceBeneficiaryConsentWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  LegalBeneficiary = () => {
    const message = this.createChatBotMessage("", {
      widget: "LegalBeneficiaryWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  MarketingConsentCancel = () => {
    const message = this.createChatBotMessage("", {
      widget: "MarketingConsentCancelWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  AfterSideContractDetails = () => {
    const message = this.createChatBotMessage("", {
      widget: "AfterSideContractDetailsWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  AutomaticWithdrawal = () => {
    const message = this.createChatBotMessage("", {
      widget: "AutomaticTransferWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  InsurancePremiumPayment = () => {
    const message = this.createChatBotMessage("", {
      widget: "InsurancePremiumPaymentWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  InsurancePremiumPaymentPar = () => {
    const message = this.createChatBotMessage("", {
      widget: "InsurancePremiumPaymentParWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  WhenInsurancePremiumPayment = () => {
    const message = this.createChatBotMessage("", {
      widget: "WhenInsurancePremiumPaymentWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  ChangeAutomaticTransfer = () => {
    const message = this.createChatBotMessage("", {
      widget: "ChangeAutomaticTransferWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  ChangeAutomaticTransfer1 = () => {
    const message = this.createChatBotMessage("", {
      widget: "ChangeAutomaticTransfer1Widget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  ChangeAutomaticTransfer12 = () => {
    const message = this.createChatBotMessage("", {
      widget: "ChangeAutomaticTransfer12Widget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  TerminationAutomaticTransfer = () => {
    const message = this.createChatBotMessage("", {
      widget: "TerminationAutomaticTransferWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  TerminationAutomaticTransfer1 = () => {
    const message = this.createChatBotMessage("", {
      widget: "TerminationAutomaticTransfer1Widget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  TerminationAutomaticTransfer12 = () => {
    const message = this.createChatBotMessage("", {
      widget: "TerminationAutomaticTransfer12Widget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  ReserveFund = () => {
    const message = this.createChatBotMessage("", {
      widget: "ReserveFundWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  ReserveFundPar = () => {
    const message = this.createChatBotMessage("", {
      widget: "ReserveFundParWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  ReserveCancellationRefund = () => {
    const message = this.createChatBotMessage("", {
      widget: "ReserveCancellationRefundWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  InsuranceClaims = () => {
    const message = this.createChatBotMessage("", {
      widget: "InsuranceClaimsWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  InsuranceClaimsPar = () => {
    const message = this.createChatBotMessage("", {
      widget: "InsuranceClaimsParWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  DocumentsInsuranceClaim = () => {
    const message = this.createChatBotMessage("", {
      widget: "DocumentsInsuranceClaimWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  PaymentReceivedMail = () => {
    const message = this.createChatBotMessage("", {
      widget: "PaymentReceivedMailWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  PaymentReceivedMailPar = () => {
    const message = this.createChatBotMessage("", {
      widget: "PaymentReceivedMailParWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  MailAcceptance = () => {
    const message = this.createChatBotMessage("", {
      widget: "MailAcceptanceWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  MaturityInsuranceMoney = () => {
    const message = this.createChatBotMessage("", {
      widget: "MaturityInsuranceMoneyWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  MaturityInsuranceMoneyPar = () => {
    const message = this.createChatBotMessage("", {
      widget: "MaturityInsuranceMoneyParWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  ApplicationMaturityInsurance = () => {
    const message = this.createChatBotMessage("", {
      widget: "ApplicationMaturityInsuranceWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  CancellationRefund = () => {
    const message = this.createChatBotMessage("", {
      widget: "CancellationRefundWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  CancellationRefundPar = () => {
    const message = this.createChatBotMessage("", {
      widget: "CancellationRefundParWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  WhereCancellationRefund = () => {
    const message = this.createChatBotMessage("", {
      widget: "WhereCancellationRefundWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  Cancellation = () => {
    const message = this.createChatBotMessage("", {
      widget: "CancellationWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  CancellationPar = () => {
    const message = this.createChatBotMessage("", {
      widget: "CancellationParWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  HowCancellation = () => {
    const message = this.createChatBotMessage("", {
      widget: "HowCancellationWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  IntermediateWithdrawal = () => {
    const message = this.createChatBotMessage("", {
      widget: "IntermediateWithdrawalWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  IntermediateWithdrawalPar = () => {
    const message = this.createChatBotMessage("", {
      widget: "IntermediateWithdrawalParWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  HowIntermediateWithdrawal = () => {
    const message = this.createChatBotMessage("", {
      widget: "HowIntermediateWithdrawalWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  WithdrawalSubscription = () => {
    const message = this.createChatBotMessage("", {
      widget: "WithdrawalSubscriptionWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  WithdrawalSubscriptionPar = () => {
    const message = this.createChatBotMessage("", {
      widget: "WithdrawalSubscriptionParWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  PossibleWithdrawalSubscription = () => {
    const message = this.createChatBotMessage("", {
      widget: "PossibleWithdrawalSubscriptionWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  ImPossibleWithdrawalSubscription = () => {
    const message = this.createChatBotMessage("", {
      widget: "ImPossibleWithdrawalSubscriptionWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  PersonalInformations = () => {
    const message = this.createChatBotMessage("", {
      widget: "PersonalInformationsWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  PersonalInformationsPar = () => {
    const message = this.createChatBotMessage("", {
      widget: "PersonalInformationsParWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  WherePersonalInformation = () => {
    const message = this.createChatBotMessage("", {
      widget: "WherePersonalInformationWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  Certificate = () => {
    const message = this.createChatBotMessage("", {
      widget: "CertificateWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  CertificatePar = () => {
    const message = this.createChatBotMessage("", {
      widget: "CertificateParWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  WhereCertificate = () => {
    const message = this.createChatBotMessage("", {
      widget: "WhereCertificateWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  handleOption1 = () => {
    const message = this.createChatBotMessage("", {
      widget: "pdfViewer",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleOption2 = () => {
    const message = this.createChatBotMessage("", {
      widget: "cancellationRefundWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleOption3 = () => {
    const message = this.createChatBotMessage("You selected IM 무배당 3.");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleOption4 = () => {
    const message = this.createChatBotMessage("You selected IM 무배당 4.");
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
    const message = this.createChatBotMessage("", {
      widget: "InsuranceContractsWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  InsurancePayment = () => {
    const message = this.createChatBotMessage("", {
      widget: "InsurancePaymentWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  InsuranceTerminate = () => {
    const message = this.createChatBotMessage("", {
      widget: "InsuranceTerminateWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  PersonalInformation = () => {
    const message = this.createChatBotMessage("", {
      widget: "PersonalInformationWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  Error1 = () => {
    const message = this.createChatBotMessage("", {
      widget: "Error1Widget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}
export default ActionProvider;
