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
