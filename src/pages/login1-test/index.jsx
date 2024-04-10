import { Box, Button, TextField, Typography } from "@mui/material";
import teste from "../../assets/imgLogin.jpeg";
import { useEffect, useState } from "react";
import { usePostHog, useFeatureFlagVariantKey } from "posthog-js/react";

// Do something differently for this user

export function Login1Test() {
  const [cta, setCta] = useState("click-me");
  const posthog = usePostHog();
  const variantKey = useFeatureFlagVariantKey("teste-ab");
  posthog.featureFlags.override({ "teste-ab": "test" });
  useEffect(() => {
    if (variantKey === "test") {
      setCta("click-me");
      console.log(cta);
    }
  }, [variantKey]);
  const handleSubmit = (event) => {
    event.preventDefault();
    posthog.capture("login");
    posthog.featureFlags.override({ "teste-ab": "test" });
  };
  return (
    <>
      <Box
        height={"100vh"}
        width={"100vw"}
        display={"flex"}
        flexDirection={{ lg: "row", xs: "column" }}
        // bgcolor="black"
      >
        <Box
          height={"100%"}
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          gap={2}
          bgcolor={"#407BFF"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            p={4}
            bgcolor={"#f5f5f5"}
            borderRadius={2}
            height={{ lg: "70%", xs: "80%" }}
            width={{ lg: "50%", xs: "90%" }}
            sx={{ boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)" }}
            justifyContent={"center"}
          >
            <Typography variant="h4" align="center">
              Empresa 1
            </Typography>
            <form onSubmit={handleSubmit}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                gap={2}
              >
                <TextField fullWidth type="email" label="E-mail" required />
                <TextField fullWidth type="password" label="Senha" required />
                <Button
                  variant="contained"
                  id="btn-login"
                  type="submit"
                  onClick={() => {
                    posthog.capture("login event");
                  }}
                >
                  Login
                </Button>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  gap={1}
                  flexDirection={"column"}
                >
                  <Button
                    variant="text"
                    color="inherit"
                    sx={{ fontSize: "12px" }}
                  >
                    Esqueceu sua senha?
                  </Button>
                  <Button
                    variant="text"
                    color="inherit"
                    sx={{ fontSize: "12px" }}
                  >
                    Criar conta
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
        <Box
          visibility={{ lg: "visible", xs: "hidden" }}
          height={{ lg: "100%", xs: "0" }}
          width={{ lg: "100%", xs: "0" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img src={teste} alt="imagem login" height={"90%"} />
        </Box>
      </Box>
    </>
  );
}
