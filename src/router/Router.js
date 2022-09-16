import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from './../pages/Home/HomePage';
import { CursosPage } from './../pages/Cursos/CursosPage';
import { ShowCursos } from './../pages/ShowCursos/ShowCursos';
import { ParceirosPage } from './../pages/Parceiros/ParceirosPage';
import { TransparenciaPage } from './../pages/Transparencia/TransparenciaPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/cursos/:id" element={<CursosPage/>}/>
                <Route path="/cursos" element={<ShowCursos/>}/>
                <Route path="/parceiros" element={<ParceirosPage/>}/>
                <Route path="/transparencia" element={<TransparenciaPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router 