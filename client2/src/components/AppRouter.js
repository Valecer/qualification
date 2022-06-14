import React from "react";
import {Route, Routes} from "react-router-dom";
import { authRoutes,publicRoutes } from "../routes";

export const AppRouter = () => {
    const isAuth = false
    
    return(
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} />
            )}
        </Routes>
    );
}

