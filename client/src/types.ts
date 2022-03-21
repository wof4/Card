export type cardDataType = {
  cardNumber: string;
  expDate: string;
  cvv: string;
  amount: string;
};
export type responseDataType = {
  requestId: string;
  amount: string;
  status: number;
};
export type CustomProps = {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  mask: string;
};

export type FormattedNumberChangeType = (
  event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
) => void;
export type CardNumberMaskCustomType = React.ForwardRefExoticComponent<
  CustomProps & React.RefAttributes<HTMLElement>
>;
