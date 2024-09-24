import MainContractsOptions from "../mainOption/MainContractsOptions";
import MainPaymentOptions from "../mainOption/MainPaymentOptions";
import MainTerminateOptions from "../mainOption/MainTerminateOptions";
import MainPersonalOptions from "../mainOption/MainPersonalOptions";

import {
  insuranceContractsOptions,
  insurancePaymentOptions,
  insuranceTerminateOptions,
  personalInformationOptions,
} from "./optionsConfig";

export const renderWidgetByState = (currentWidget, props) => {
  switch (currentWidget) {
    case "InsuranceContractsWidget":
      return (
        <MainContractsOptions {...props} options={insuranceContractsOptions} />
      );
    case "InsurancePaymentWidget":
      return (
        <MainPaymentOptions {...props} options={insurancePaymentOptions} />
      );
    case "InsuranceTerminateWidget":
      return (
        <MainTerminateOptions {...props} options={insuranceTerminateOptions} />
      );
    case "PersonalInformationWidget":
      return (
        <MainPersonalOptions {...props} options={personalInformationOptions} />
      );
    default:
      return null;
  }
};
