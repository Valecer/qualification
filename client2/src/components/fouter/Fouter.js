import React from 'react'
import {NavLink} from 'react-router-dom';
import {Footer} from 'flowbite-react';

export const Fouter = () => {
    return (
        <Footer className="fixed bottom-0">
            <Footer.Copyright
                href="/"
                by="WildFire™"
                year={2022}
            />
            <Footer.LinkGroup className="mt-3 flex-wrap items-center text-sm sm:mt-0">
                <Footer.Link>
                    <NavLink to="/">
                        Главная
                    </NavLink>
                </Footer.Link>
                <Footer.Link>
                    <NavLink to="/fire">
                        Гари
                    </NavLink>
                </Footer.Link>
                <Footer.Link>
                    <NavLink to="/smoke">
                        Дымы
                    </NavLink>
                </Footer.Link>
                <Footer.Link>
                    <NavLink to="/meter">
                        Метеорология
                    </NavLink>
                </Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    )
}