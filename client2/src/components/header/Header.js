import React from 'react'
import {NavLink} from 'react-router-dom';
import userimg from '../../image/user.png';
import {Navbar, Dropdown,Flowbite, DarkThemeToggle, Avatar, Button} from 'flowbite-react';


export const Header = () => {
    return (
        <Navbar fluid={true} rounded={true}>
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
                <Navbar.Toggle />
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar alt="User settings" img={userimg} rounded={true}/>}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Гость
                        </span>
                        <span className="block truncate text-sm font-medium">
                            -
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        <NavLink to="/settings">
                            Настройки
                        </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <NavLink to="/upload">
                            Загрузка снимков
                        </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                    <div className="aut-btn space-y-2">
                    <Button outline={true} gradientDuoTone="purpleToBlue">Регистрация</Button>
                    <Button outline={true} gradientDuoTone="cyanToBlue">Войти</Button>
                    </div>
                    </Dropdown.Item>
                </Dropdown>
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