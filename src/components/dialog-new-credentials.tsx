import DialogStyled from "./ui/DialogStyled";
import InputStyled from "./ui/InputStyled";
import { styled } from "@stitches/react";
import { theme } from "../../stitches.config";

const FormStyled = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: theme.gap.sm,
});

const LabelStyled = styled("p", {
  textAlign: "left",
  marginLeft: "10%",
});

type DialogNewCredentialsProps = {
  trigger: React.ReactNode;
};

const DialogNewCredentials = ({ trigger }: DialogNewCredentialsProps) => {
  const title = "New Credentials";

  const DialogNewCredentialsContent = () => {
    return (
      <FormStyled>
        <div>
          <LabelStyled>Fornecedor</LabelStyled>
          <InputStyled placeholder="Selecione o fornecedor" />
        </div>
        <div>
          <LabelStyled>Nome da Credencial</LabelStyled>
          <InputStyled placeholder="Nome da Credencial" />
        </div>
        <div>
          <LabelStyled>Tipo de Serviço</LabelStyled>
          <InputStyled placeholder="Selecione o tipo de serviço" />
        </div>
      </FormStyled>
    );
  };

  return (
    <DialogStyled
      title={title}
      trigger={trigger}
      content={DialogNewCredentialsContent()}
      onClick={() => {
        console.log("Clicked!");
      }}
      onClickText="Add Credential"
    />
  );
};

export default DialogNewCredentials;
