import { LoginSchema } from "../schema/auth.schema";
import * as yup from "yup";

export type LoginParams = yup.InferType<typeof LoginSchema>;

export type LoginResponse = {
  token: {
    type: string;
    value: string;
    created_at: string;
  };
  user: {
    uuid: string;
    name: string;
    email: string;
    phone: string;
    context: string;
    is_expense_approver: boolean;
    agency: {
      uuid: string;
      company_name: string;
      trading_name: string;
      cnpj: string;
      phone: string;
      zip_code: string;
      address: string;
      number: string;
      district: string;
      is_active: boolean;
      email: string;
      state_registration: string;
      city_uuid: string;
      logo_url: string;
      agency_employee: {
        uuid: string;
        name: string;
      };
    };
    avatar_url: string;
  };
};
