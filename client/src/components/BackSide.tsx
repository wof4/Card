import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";

type PropType = {
  // eslint-disable-next-line max-len
  handleNumberChange: (
    type: string,
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  loading: boolean;
  value: string;
};

const BackSide = (props: PropType) => {
  const { handleNumberChange, loading, value } = props;

  return (
    <Card
      sx={{
        width: 400,
        height: 250,
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        marginLeft: "94px",
        backgroundImage:
          "linear-gradient(45deg, rgb(223, 248, 255) 12%, rgb(249, 249, 249) 52%, rgb(233, 246, 253) 92%);",
      }}
    >
      <CardContent sx={{ padding: "0", width: "100%", textAlign: "end" }}>
        <Box sx={{ height: "60px", backgroundColor: "#7e7e7e" }} />
        <Box>
          <TextField
            sx={{ width: 60, margin: "20px" }}
            label="CVV"
            inputProps={{ maxLength: 3 }}
            value={value}
            disabled={loading}
            size="small"
            placeholder="000"
            multiline
            onChange={(e) => handleNumberChange("cvv", e)}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default BackSide;
