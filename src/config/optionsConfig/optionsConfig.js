export const defaultOptions = [
  { text: "보험 계약 및 가입 관련", handler: "InsuranceContracts" },
  { text: "보험료 및 납입 관리", handler: "InsurancePayment" },
  { text: "보험료 지급 및 해지 처리", handler: "InsuranceTerminate" },
  { text: "개인정보 및 증명 서류", handler: "PersonalInformation" },
];

export const insuranceContractsOptions = [
  { text: "보험가입", handler: "SideContracts" },
  { text: "보험증권", handler: "SidePolicy" },
  { text: "계약사항", handler: "SideContractDetails" },
  { text: "보험수익자", handler: "SideInsuranceBeneficiary" },
  { text: "수익자", handler: "SideBeneficiary" },
  { text: "마케팅 동의", handler: "MarketingConsent" },
];

export const insurancePaymentOptions = [
  { text: "보험료 납입", handler: "InsuranceContracts" },
  { text: "자동이체", handler: "InsurancePayment" },
  { text: "적립금", handler: "InsuranceTerminate" },
];

export const insuranceTerminateOptions = [
  { text: "보험금 청구", handler: "InsuranceContracts" },
  { text: "지급금 우편접수", handler: "InsurancePayment" },
  { text: "만기보험금", handler: "InsuranceTerminate" },
  { text: "해약환급금", handler: "InsuranceTerminate" },
  { text: "해약", handler: "InsuranceTerminate" },
  { text: "중도인출", handler: "InsuranceTerminate" },
  { text: "청약철회", handler: "InsuranceTerminate" },
];

export const personalInformationOptions = [
  { text: "개인정보", handler: "InsuranceContracts" },
  { text: "증명서", handler: "InsurancePayment" },
];
