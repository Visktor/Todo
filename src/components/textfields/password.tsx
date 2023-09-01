import { TextField } from "@mui/material";

export default function TextFieldPassword({
  setPassword,
  error,
  password,
  onBlur,
}: {
  password: string;
  error: boolean;
  setPassword: (password: string, error: boolean) => unknown;
  onBlur?: () => unknown;
}) {
  return (
    <TextField
      label="Password"
      value={password}
      error={error}
      onChange={(e) => {
        const error = !e.target.value || e.target.value.length < 8;
        setPassword(e.target.value, error);
      }}
      onBlur={() => {
        if (onBlur) {
          onBlur();
        }
      }}
    />
  );
}
