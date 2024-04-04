
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../Components/Login/Login';
import { Dashboard } from '../Components/App/Dashboard/Dashboard';
import { NuevaLicitacion } from '../Components/App/NuevaLicitacion/NuevaLicitacion';
import { Usuarios } from '../Components/App/Usuarios/Usuarios';
import { Perfil } from '../Components/App/Perfil/Perfil';
import { VerClientes } from '../Components/App/VerClientes/VerClientes';
import { VerLicitaciones } from '../Components/App/VerLicitaciones/VerLicitaciones'
export const RouterConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route exact path='/Dashboard' element={<Dashboard />} />
                <Route exact path='/Nueva-Licitacion' element={<NuevaLicitacion />} />
                <Route exact path='/Perfil' element={<Perfil />} />
                <Route exact path='/Usuarios' element={<Usuarios />} />
                <Route exact path='/Clientes' element={<VerClientes />} />
                <Route exact path='/Licitaciones-Actuales' element={<VerLicitaciones />} />
            </Routes>

        </BrowserRouter>
    )
}
