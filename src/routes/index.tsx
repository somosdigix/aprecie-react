import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";
import {Pagina}  from '../pages/login/Pagina';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pagina-inicial" element={<Pagina />} />




                <Route path="*" element={<Navigate to="pagina-inicial" />} />

            </Switch>
        </BrowserRouter>
    );
}