import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

type PropsType = {
  status: number | null;
  message: string | null;
  setResult: (data: any) => void;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

export default function CustomAlert(props: PropsType) {
  const { status, message, setResult } = props;
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(true);
  }, [message]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setResult(null);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      {message && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={status === 201 ? "success" : "error"}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      )}
    </Stack>
  );
}
