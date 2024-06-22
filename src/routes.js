import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Paginas/Home';
import CriarVideo from './Paginas/CriarVideo';
import NavBar from './Componentes/NavBar';

function AppRoutes() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/CriarVideo" element={<CriarVideo/>} />
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
