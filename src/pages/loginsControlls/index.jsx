import { Box } from "@mui/material";
import { Link } from "react-router-dom";
export function LoginsControlls() {
  const logins = [
    {
      name: "Login1 Control",
      path: "/login1/control",
    },
    {
      name: "Login2 Test",
      path: "/login2/test",
    },
  ];
  return (
    <>
      <Box
        height={"100vh"}
        width={"100vw"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <h1>Logins Controlls</h1>
        {logins.map((login, index) => (
          <Box key={index} display={"flex"}>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                padding: "10px",
                border: "1px solid black",
                borderRadius: "5px",
                width: "150px",
                textAlign: "center",
                margin: "4px",
              }}
              to={login.path}
            >
              {login.name}
            </Link>
          </Box>
        ))}
      </Box>
    </>
  );
}
