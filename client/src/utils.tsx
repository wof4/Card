import React from "react";
import { IMaskInput } from "react-imask";
import { CustomProps } from "./types";

export const CardNumberMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  (props, ref) => {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="0000 0000 0000 0000"
        // @ts-ignore
        inputRef={ref}
        definitions={{
          "#": /[0-9]/,
        }}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);

export const DateMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  (props, ref) => {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="00/00"
        // @ts-ignore
        inputRef={ref}
        definitions={{
          "#": /[0-9]/,
        }}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);
export const AmountMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  (props, ref) => {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="0000000000000000000"
        // @ts-ignore
        inputRef={ref}
        definitions={{
          "#": /[0-9]/,
        }}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);

export const checkValidData = (name: string, value: string) => {
  if (name === "expDate") {
    const yearNow = new Date().getFullYear();
    const month = Number(value.substring(0, 2)) <= 12;
    const year = Number(value.substring(3, 5)) + 2000 < yearNow + 5;

    return month === true && year === true;
  }
  return true;
};
