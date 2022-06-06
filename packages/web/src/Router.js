import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './paginas/Home';
import Singin from './paginas/Singin';

export default function Router() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/singin" element={<Singin />} />
        </Routes>

    );
}