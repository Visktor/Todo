import { Box, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import TextFieldEmail from "../../components/textfields/email";
import TextFieldPassword from "../../components/textfields/password";

export default function Login() {
  const [stateLogin, setStateLogin] = useState({
    email: { value: "", error: false },
    password: { value: "", error: false },
  });

  useEffect(() => {
        console.log("componente login")
      }, [])
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box component={Paper} height="40%" width="50%">
        <TextFieldEmail
          email={stateLogin.email.value}
          error={stateLogin.email.error}
          setEmail={(email, error) => {
            setStateLogin((prev) => ({
              ...prev,
              email: { value: email, error: error },
            }));
          }}
        />
        <TextFieldPassword
          password={stateLogin.password.value}
          error={stateLogin.password.error}
          setPassword={(password, error) => {
            setStateLogin((prev) => ({
              ...prev,
              password: {
                value: password,
                error: error,
              },
            }));
          }}
        />
      </Box>
    </Box>
  );
}
