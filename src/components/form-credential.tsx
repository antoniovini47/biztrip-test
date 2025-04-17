import type { Credential, FormInputs, ValidServiceType } from "../types/credential.types";
import { styled } from "@stitches/react";
import { theme } from "../../stitches.config";
import { useForm, SubmitHandler } from "react-hook-form";
import InputStyled from "./ui/InputStyled";
import ButtonStyled from "./ui/ButtonStyled";
import { useState } from "react";

const FormStyled = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: theme.gap.sm,
  justifyContent: "center",
  placeItems: "center",
});

const LabelStyled = styled("span", {
  textAlign: "left",
  width: "90%",
});

type FormCredentialProps = {
  credential?: Credential;
};

const FormCredential = ({ credential }: FormCredentialProps) => {
  const [initialData] = useState<FormInputs>({
    provider: credential?.provider.name,
    credentialName: credential?.description,
    serviceType: credential?.service_type as ValidServiceType,
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  console.log(watch());

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <LabelStyled>Fornecedor</LabelStyled>
      <InputStyled
        placeholder="Fornecedor"
        defaultValue={initialData.provider}
        {...register("provider", { required: true })}
      />
      {errors.provider && <span>Escolha um fornecedor</span>}
      <LabelStyled>Nome da credencial</LabelStyled>
      <InputStyled
        defaultValue={initialData.credentialName}
        placeholder="Nome da credencial"
        {...register("credentialName", { required: true })}
      />
      {errors.credentialName && <span>This field is required</span>}
      <LabelStyled>Tipo de serviço</LabelStyled>
      <InputStyled
        defaultValue={initialData.serviceType}
        placeholder="Tipo de serviço"
        {...register("serviceType", { required: true })}
      />
      <ButtonStyled type="submit">Add Credential</ButtonStyled>
    </FormStyled>
  );
};

export default FormCredential;
