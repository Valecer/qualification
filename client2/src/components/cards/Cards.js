import React from 'react'
import FFire from '../../image/FFire.jpg'
import Cloud from '../../image/Cloud.gif'
import Smoke from '../../image/ai.PNG'
import { NavLink } from 'react-router-dom'
import './cards.css'

import { Card } from 'flowbite-react';

export const Cards = () => {
    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            <NavLink to="/fire" className="cardsh filter transition ease-in-out duration-250  hover:shadow-xl hover:brightness-125">
                <Card imgSrc={Smoke} className="cardsh">
                    <h5 className="select-none text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ТВВ и гари
                    </h5>
                    <p className="select-none font-normal text-gray-700 dark:text-gray-400">
                        ТВВ – точка вероятного возгорания детектируется на спутниковом снимке как обнаруженный очаг пламени и отображается как точка в центре пикселя с высокой степенью вероятности. Кроме того, на вероятность обнаружения пожара влияют такие факторы как разностная температура и размер пожара. Гари – лесная территория с древостоем, погибшим от пожара. Модуль позволяет просматривать и скачивать файлы по территории Республики Саха (Якутия) 2002 – 2021гг. содержащие карты пожарной активности и выгоревших областей, статистические данные по пожарам за пожароопасный сезон.
                    </p>
                </Card>
            </NavLink>
            <NavLink to="/smoke" className="cardsh filter transition ease-in-out duration-250 hover:shadow-xl hover:brightness-125">
                <Card imgSrc={FFire}  className="cardsh">
                        <h5 className="select-none text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Дымовые шлейфы
                        </h5>
                        <p className="select-none font-normal text-gray-700 dark:text-gray-400">
                            Дымовые шлейфы от лесных пожаров – один из сильнейших источников газов, аэрозолей и различных химических соединений, выбрасываемых в атмосферу. Оксид и монооксид углерода, черные и коричневые частицы углерода, прекурсоры озона, такие как летучие органические соединения, и оксиды азота, распространяющиеся в виде дымового шлейфа на большие расстояния. Модуль позволяет просматривать и скачивать файлы по территории Республики Саха (Якутия) 2002 – 2021гг, содержащие данные по таким характеристикам дымового шлейфа как AAI(Absorbing Aerosol Index), AOD(Aerosol Optical Depth) и CO (Carbon Monoxide).
                        </p>
                </Card>    
            </NavLink>
            <NavLink to="/meter" className="cardsh filter transition ease-in-out duration-250 hover:shadow-xl hover:brightness-125">
                <Card imgSrc={Cloud} className="cardsh">
                    <h5 className="select-none text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Метеорологическая ситуация
                    </h5>
                    <p className="select-none font-normal text-gray-700 dark:text-gray-400">
                        Метеорологические, погодные условия - это состояния атмосферы в определенный промежуток времени, которое характеризуется совокупностью метеорологических факторов. К метеорологическим факторам относятся: давление, температура и влажность воздуха, ветер, облачность, атмосферные осадки, видимость, туман, гроза, метель и др. Модуль позволяет просматривать и скачивать файлы по территории Республики Саха (Якутия) 2002 – 2021гг. при прохождении циклонов, антициклонов, делать предпросмотр области за указанные периоды над территорией действующих пожаров.
                    </p>
                </Card>
            </NavLink>
        </div>
    )
}

