import { TextField } from "@mui/material";
import isValidEmail from "../../utils/isValidEmail";

export default function TextFieldEmail({
  setEmail,
  error,
  email,
  onBlur,
}: {
  email: string;
  error: boolean;
  setEmail: (email: string, error: boolean) => unknown;
  onBlur?: () => unknown;
}) {
  return (
    <TextField
      label="Email"
      value={email}
      error={error}
      onChange={(e) => {
        const error = !isValidEmail(e.target.value);
        setEmail(e.target.value, error);
      }}
      onBlur={() => {
        if (onBlur) {
          onBlur();
        }
      }}
    />
  );
}
