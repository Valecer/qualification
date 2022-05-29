import React from 'react'
import {NavLink} from 'react-router-dom';
import userimg from '../../image/user.png';
import {Navbar, Dropdown,Flowbite, DarkThemeToggle, Avatar} from 'flowbite-react';

export const Header = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="/">
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                    WildFire
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <div className="pr-4 md:pr-6">
                    <Flowbite >
                        <DarkThemeToggle />
                    </Flowbite>
                </div>
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar alt="User settings" img={userimg} rounded={true}/>}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Борисов Марк
                        </span>
                        <span className="block truncate text-sm font-medium">
                            mark.borisoff2017@yandex.ru
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        Настройки
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Загрузка снимков
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Выход
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link active={true}>
                    <NavLink to="/">
                        <p className="text-base">Главная</p>
                    </NavLink>
                </Navbar.Link>
                <Navbar.Link active={false}>
                    <NavLink to="/fire">
                        <p className="text-base">Гари</p> 
                    </NavLink>
                </Navbar.Link>
                <Navbar.Link active={false}>
                    <NavLink to="/smoke">
                        <p className="text-base">Дымы</p> 
                    </NavLink>
                </Navbar.Link>
                <Navbar.Link active={false}>
                    <NavLink to="/meter">
                        <p className="text-base">Метеорология</p> 
                    </NavLink>                   
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}