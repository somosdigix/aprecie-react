import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";
import {Pagina}  from '../Pagina';
import {Perfil} from '../Perfil';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pagina-inicial" element={<Pagina />} />
                <Route path="*" element={<Navigate to="pagina-inicial" />} />

                <Route path="/pagina-perfil" element={<Perfil />} />
                <Route path="*" element={<Navigate to="pagina-perfil" />} />


            </Switch>
        </BrowserRouter>
    );
}