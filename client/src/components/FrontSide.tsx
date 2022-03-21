import React, { ElementType } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { Alert } from "@mui/material";
import { FormattedNumberChangeType } from "../types";
import { CardNumberMaskCustom, DateMaskCustom } from "../utils";

type PropsType = {
  handleFormattedNumberChange: FormattedNumberChangeType;
  loading: boolean;
  cardNumber: string;
  expDate: string;
  error: string;
};

const FrontSide = (props: PropsType) => {
  const { handleFormattedNumberChange, loading, cardNumber, expDate, error } =
    props;

  return (
    <Card
      sx={{
        width: 400,
        height: 250,
        borderRadius: 4,
        display: "flex",
        alignItems: "end",
        zIndex: "200",
        marginTop: "-190px",
        marginRight: "94px",
        backgroundImage:
          "linear-gradient(45deg, rgb(223, 248, 255) 12%, rgb(249, 249, 249) 52%, rgb(233, 246, 253) 92%);",
      }}
    >
      <CardContent>
        <TextField
          label="НОМЕР КАРТЫ"
          value={cardNumber}
          onChange={handleFormattedNumberChange}
          name="cardNumber"
          id="cardNumber"
          placeholder="0000 0000 0000 0000"
          disabled={loading}
          multiline
          InputProps={{
               // @ts-ignore: Unreachable code error
            inputComponent: CardNumberMaskCustom,
          }}
        />
        <Box>
          <TextField
            sx={{ width: 70, marginTop: "10px" }}
            label="ДАТА"
            value={expDate}
            onChange={handleFormattedNumberChange}
            name="expDate"
            id="expDate"
            disabled={loading}
            size="small"
            placeholder="мм/гг"
            multiline
            error={error.length > 0}
            InputProps={{
                 // @ts-ignore: Unreachable code error
              inputComponent: DateMaskCustom,
            }}
          />
          {error.length > 0 && (
            <Alert sx={{ position: "absolute" }} severity="error">
              {error}
            </Alert>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default FrontSide;
