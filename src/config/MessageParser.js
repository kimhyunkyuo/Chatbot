class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    // Handle "Quick Guide", "Quick", or "Start"
    if (
      lowercase.includes("퀵 가이드") ||
      lowercase.includes("퀵") ||
      lowercase.includes("시작")
    ) {
      this.actionProvider.handleQuickGuide();
    }

    // Handle "Insurance Product" and "Introduction"
    else if (lowercase.includes("보험 상품") && lowercase.includes("소개")) {
      this.actionProvider.handleProductIntro();
    } else if (
      (lowercase.includes("마케팅동의") && lowercase.includes("철회")) ||
      (lowercase.includes("마케팅 동의") && lowercase.includes("철회"))
    ) {
      this.actionProvider.MarketingConsentPar();
    } else if (lowercase.includes("중도인출") && lowercase.includes("신청")) {
      this.actionProvider.IntermediateWithdrawalPar();
    } else if (
      (lowercase.includes("만기보험금") && lowercase.includes("신청")) ||
      (lowercase.includes("만기 보험금") && lowercase.includes("신청"))
    ) {
      this.actionProvider.MaturityInsuranceMoneyPar();
    } else if (lowercase.includes("지급금") && lowercase.includes("우편접수")) {
      this.actionProvider.PaymentReceivedMailPar();
    } else if (lowercase.includes("해약") && lowercase.includes("신청")) {
      this.actionProvider.CancellationPar();
    } else if (
      lowercase.includes("보험료") &&
      lowercase.includes("미인출") &&
      lowercase.includes("청구")
    ) {
      this.actionProvider.InsurancePremiumPaymentPar();
    } else if (
      lowercase.includes("자동이체") &&
      lowercase.includes("변경") &&
      lowercase.includes("신청") &&
      lowercase.includes("해지")
    ) {
      this.actionProvider.ChangeAutomaticTransfer1();
    } else if (
      lowercase.includes("자동이체") &&
      lowercase.includes("보험료납입") &&
      lowercase.includes("해지")
    ) {
      this.actionProvider.TerminationAutomaticTransfer1();
    } else if (
      lowercase.includes("적립금") &&
      lowercase.includes("해약환급금")
    ) {
      this.actionProvider.ReserveFundPar();
    } else if (lowercase.includes("해약환급금")) {
      this.actionProvider.CancellationRefundPar();
    } else if (lowercase.includes("보험증권") && lowercase.includes("신청")) {
      this.actionProvider.SidePolicyPar();
    } else if (lowercase.includes("계약")) {
      this.actionProvider.SideContractDetailsPar();
    } else if (lowercase.includes("개인정보") && lowercase.includes("변경")) {
      this.actionProvider.PersonalInformationsPar();
    } else if (lowercase.includes("증명서") && lowercase.includes("발급")) {
      this.actionProvider.CertificatePar();
    } else if (
      (lowercase.includes("보험금 청구") && lowercase.includes("신청서류")) ||
      (lowercase.includes("보험금청구") && lowercase.includes("신청서류"))
    ) {
      this.actionProvider.InsuranceClaimsPar();
    } else if (
      lowercase.includes("청약철회") &&
      lowercase.includes("신청") &&
      lowercase.includes("절차")
    ) {
      this.actionProvider.WithdrawalSubscriptionPar();
    } else if (
      lowercase.includes("보험가입") &&
      lowercase.includes("준비사항")
    ) {
      this.actionProvider.InsurancePreparations1();
    } else if (
      lowercase.includes("피보험자") ||
      lowercase.includes("피 보험자")
    ) {
      this.actionProvider.InsureAnotherPerson1();
    } else if (
      lowercase.includes("보험증권") &&
      lowercase.includes("보험가입")
    ) {
      this.actionProvider.InsurancePolicy1();
    } else if (lowercase.includes("보험가입") && lowercase.includes("보장")) {
      this.actionProvider.InsurancePolicyAfterPurchase1();
    }  else if (lowercase.includes("보험가입") && lowercase.includes("금액")) {
      this.actionProvider.AmountInsurance1();
    } else if (lowercase.includes("보험가입") && lowercase.includes("불가")) {
      this.actionProvider.Uninsured1();
    } else if (lowercase.includes("보험가입") && lowercase.includes("시간")) {
      this.actionProvider.WhenPurchaseInsurance1();
    } else if (
      lowercase.includes("보험가입") &&
      lowercase.includes("한도초과")
    ) {
      this.actionProvider.LimitInsurance1();
    } 
    else if (
      lowercase.includes("보험수익자") &&
      lowercase.includes("변경") &&
      lowercase.includes("약정동의")
    ) {
      this.actionProvider.SideInsuranceBeneficiaryPar();
    } else if (
      lowercase.includes("수익자") &&
      lowercase.includes("법정상속인") &&
      lowercase.includes("상속순위")
    ) {
      this.actionProvider.SideBeneficiaryPar();
    }else if (lowercase.includes("수익자")) {
      this.actionProvider.SpecifyingBeneficiaries1();
    }
     else {
      this.actionProvider.Error1();
    }
  }
}

export default MessageParser;
