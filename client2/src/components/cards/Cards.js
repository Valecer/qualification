import React from 'react'
import FFire from '../../image/FFire.jpg'
import { Card } from 'flowbite-react';

export const Cards = () => {
    return (
        <div className="md:flex ">
            <Card imgSrc={FFire}>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Гари
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                На вкладке гари вы можете посмотреть Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum a voluptates corrupti, itaque vero iusto maiores incidunt facere, optio autem ea repellendus delectus reprehenderit nisi quia ipsam dolor nesciunt.
                </p>
            </Card>
            <div className="md:mx-5">
                <Card imgSrc={FFire}>
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Дымы
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        На вкладке дымы вы можете посмотреть Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum a voluptates corrupti, itaque vero iusto maiores incidunt facere, optio autem ea repellendus delectus reprehenderit nisi quia ipsam dolor nesciunt.
                    </p>
                </Card>
            </div>       
            <Card imgSrc={FFire}>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Метеорология
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                На вкладке метеорология вы можете посмотреть Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum a voluptates corrupti, itaque vero iusto maiores incidunt facere, optio autem ea repellendus delectus reprehenderit nisi quia ipsam dolor nesciunt.
                </p>
            </Card>
        </div>
    )
}

