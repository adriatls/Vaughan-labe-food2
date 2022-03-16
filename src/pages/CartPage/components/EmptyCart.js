import { Typography } from "@mui/material";
import React from "react";
import { TotalContainer } from "./Styled";
import styled from "styled-components";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const PaymentInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export default function EmptyCart({ isEmpty }) {
  return (
    <PaymentInfoBox>
      <Typography sx={{ alignSelf: "flex-end" }}>Frete: R$ 00,00</Typography>
      <TotalContainer>
        <Typography>Total:</Typography>
        <Typography color="primary" sx={{ fontWeight: "bold" }}>
          R$ 00,00
        </Typography>
      </TotalContainer>
      <Typography sx={{ pb: "8px", borderBottom: "1px solid black" }}>
        Forma de pagamento
      </Typography>
      <FormGroup>
        <FormControlLabel disabled control={<Checkbox />} label="Dinheiro" />
        <FormControlLabel
          disabled
          control={<Checkbox />}
          label="Cartão de Crédito"
        />
      </FormGroup>

      <Button sx={{ mt: "5px" }} variant="contained" disabled>
        Confirmar
      </Button>
    </PaymentInfoBox>
  );
}