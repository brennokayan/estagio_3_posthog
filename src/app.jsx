import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Login1Control } from "./pages/login1-control";
import { Login1Test } from "./pages/login1-test";
import { Login2Test } from "./pages/login2-teste";
import { Login2Control } from "./pages/login2-control";
import { LoginsControlls } from "./pages/loginsControlls";


export function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginsControlls/>}/>
                <Route path="/login1/test" element={<Login1Test/>}/>
                <Route path="/login1/control" element={<Login1Control/>}/>
                <Route path="/login2/test" element={<Login2Test/>}/>
                <Route path="/login2/control" element={<Login2Control/>}/>
            </Routes>
        </BrowserRouter>
    )
}