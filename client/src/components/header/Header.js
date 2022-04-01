import React from 'react'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <nav
            className="d-flex flex-wrap align-items-center justify-content-center py-3 mb-4 border-bottom navbar-dark bg-dark navbar-expand-sm ">
            <a href="/"
               className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none text-light navbar-brand">WildFire</a>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 navbar-nav">
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/"
                        exact
                    >
                        Главная
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/fire"
                    >
                        Гари
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link link-secondary"
                        to="/smoke"
                    >
                        Дымы
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link link-secondary"
                        to="/meter"
                    >
                        Метеорология
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link link-secondary"
                        to="/fistf"
                    >
                        Возгорания
                    </NavLink>
                </li>
            </ul>
            <div className="col-md-3 text-end">
                <button className="btn btn-outline-primary me-2">Войти</button>
                <button className="btn btn-primary">Регистрация</button>
            </div>
        </nav>
    )
}