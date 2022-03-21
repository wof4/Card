import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import CustomAlert from "../components/CustomAlert";
import BackSide from "../components/BackSide";
import FrontSide from "../components/FrontSide";
import { FormattedNumberChangeType } from "../types";
import { AmountMaskCustom, checkValidData } from "../utils";
import MainApi from "../api/mainApi";

const CardPage = () => {
  const [values, setValues] = React.useState({
    cardNumber: "",
    expDate: "",
    cvv: "",
    amount: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState({
    status: null,
    message: "",
    data: null,
  });
  const [error, setError] = React.useState({ data: "", amount: "" });

  const validData =
    values.cardNumber.length === 19 &&
    values.expDate.length === 5 &&
    values.cvv.length === 3 &&
    values.amount.length > 0;

  const sendCardData = async () => {
    setLoading(true);

    const data = {
      ...values,
      cardNumber: values.cardNumber.split(" ").join(""),
    };

    const response = await MainApi.sendData(data);
    setResult(response);

    setValues({
      cardNumber: "",
      expDate: "",
      cvv: "",
      amount: "",
    });
    setLoading(false);
  };

  const handleFormattedNumberChange: FormattedNumberChangeType = useCallback(
    (event) => {
      setError({ ...error, data: "" });
      const { value, name } = event.target;
      const isValid = checkValidData(name, value);

      if (isValid) {
        setValues({ ...values, [name]: value });
      } else {
        setError({ ...error, data: "Введите корректную дату" });
      }
    },
    [values]
  );

  const handleNumberChange = useCallback(
    (
      name: string,
      event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      const { value } = event.target;
      setValues({ ...values, [name]: value });
    },
    [values]
  );

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {result && (
        <CustomAlert
          setResult={setResult}
          message={result.message}
          status={result.status}
        />
      )}

      <BackSide
        handleNumberChange={handleNumberChange}
        loading={loading}
        value={values.cvv}
      />

      <FrontSide
        handleFormattedNumberChange={handleFormattedNumberChange}
        loading={loading}
        cardNumber={values.cardNumber}
        expDate={values.expDate}
        error={error.data}
      />

      <Box sx={{ marginTop: "30px", display: "flex" }}>
        <TextField
          disabled={loading}
          sx={{ width: 250, marginRight: "10px" }}
          variant="outlined"
          placeholder="Сумма"
          value={values.amount}
          onChange={(e) => handleNumberChange("amount", e)}
          InputProps={{
            // @ts-ignore: Unreachable code error
            inputComponent: AmountMaskCustom,
          }}
        />
        <LoadingButton
          size="medium"
          color="primary"
          onClick={sendCardData}
          loading={loading}
          loadingPosition="start"
          startIcon={<SendIcon />}
          variant="contained"
          disabled={!validData}
        >
          ОПЛАТИТЬ
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default CardPage;
