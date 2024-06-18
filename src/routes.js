import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Componentes/NavBar";


function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes