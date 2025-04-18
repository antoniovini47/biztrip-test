import { Credential, FormInputs } from "../types/credential.types";
import { styled } from "@stitches/react";
import { theme } from "../../stitches.config";
import { useForm, SubmitHandler } from "react-hook-form";
import InputStyled from "./ui/InputStyled";
import ButtonStyled from "./ui/ButtonStyled";
import SelectStyled from "./ui/SelectStyled";
import { useGetProviders } from "../queries/providers.queries";
import FormCredentialFields from "./form-credential-fields";

const FormStyled = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: theme.gap.sm,
  justifyContent: "center",
  placeItems: "center",
  width: "100%",
  padding: theme.gap.sm,
});

type FormCredentialProps = {
  credential?: Credential;
};

const FormCredential = ({ credential }: FormCredentialProps) => {
  const { data: providers, isLoading } = useGetProviders();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  if (isLoading) {
    return <div>Fetching providers...</div>;
  }

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <span>Fornecedor</span>
      <SelectStyled
        defaultValue={credential?.provider.name || ""}
        {...register("provider", { required: true })}>
        {providers?.map((provider) => (
          <option key={provider.uuid} value={provider.uuid}>
            {provider.name}
          </option>
        ))}
      </SelectStyled>
      {errors.provider && <span>Escolha um fornecedor</span>}
      <span>Nome da credencial</span>
      <InputStyled
        defaultValue={credential?.description || ""}
        placeholder="Nome da credencial"
        {...register("credentialName", { required: true })}
      />
      {errors.credentialName && <span>This field is required</span>}

      {watch("provider") && (
        <FormCredentialFields register={register} providerUuid={watch("provider") as string} />
      )}

      <ButtonStyled type="submit">{credential ? "Edit Credential" : "Add Credential"}</ButtonStyled>
    </FormStyled>
  );
};

export default FormCredential;
