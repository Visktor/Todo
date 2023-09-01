import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100dvw",
        height: "100dvh",
      }}
    >
      <Outlet />
    </Container>
  );
}
