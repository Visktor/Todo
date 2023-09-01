import { Box, Typography } from "@mui/material";

export default function footer() {
  return (
    <Box minHeight={"150px"} height={"10dvh"}>
      <Typography variant="h6" color="primary">
        Vitor Barros
      </Typography>
      <Typography variant="caption" color="primary">
        All rights reserved. ©
      </Typography>
    </Box>
  );
}
