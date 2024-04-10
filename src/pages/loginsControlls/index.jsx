import {Box} from "@mui/material"
export function LoginsControlls(){
    const logins = [
        {
            name: "Login1 Test",
            path: "/login1/test"
        },
        {
            name: "Login1 Control",
            path: "/login1/control"
        },
        {
            name: "Login2 Test",
            path: "/login2/test"
        },
        {
            name: "Login2 Control",
            path: "/login2/control"
        },
     ]
    return(
        <>
            <Box>
                <h1>Logins Controlls</h1>
                {
                    logins.map((login, index) => (
                        <Box key={index}>
                            <a href={login.path}>{login.name}</a>
                        </Box>
                    ))
                }
            </Box>
        </>
    )
}