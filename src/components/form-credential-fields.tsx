import { UseFormRegister } from "react-hook-form";
import { useGetCredentialParameters } from "../queries/credential.queries";
import { FormInputs } from "../types/credential.types";
import InputStyled from "./ui/InputStyled";
import SelectStyled from "./ui/SelectStyled";

type FormCredentialFieldsProps = {
  providerUuid: string;
  register: UseFormRegister<FormInputs>;
};

const FormCredentialFields = ({ register, providerUuid }: FormCredentialFieldsProps) => {
  const { data: credentialParameters, isLoading } = useGetCredentialParameters(providerUuid);

  if (isLoading) {
    return <div>Fetching credential parameters...</div>;
  }

  return (
    <>
      {credentialParameters?.data.service_types.map((service) => (
        <SelectStyled key={service}>
          <option value={service}>{service}</option>
        </SelectStyled>
      ))}

      {credentialParameters?.data.parameters.map((parameter) => (
        <>
          <span>{parameter.title}</span>
          <InputStyled
            placeholder={parameter.description}
            type={parameter.input_type}
            key={parameter.uuid}
            {...register(`parameters.${parameter.title}`, { required: parameter.required })}
          />
        </>
      ))}
    </>
  );
};

export default FormCredentialFields;
