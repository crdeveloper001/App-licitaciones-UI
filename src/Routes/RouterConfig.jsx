
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../Components/Login/Login'
export const RouterConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Login' element={<Login />} />

            </Routes>

        </BrowserRouter>
    )
}
