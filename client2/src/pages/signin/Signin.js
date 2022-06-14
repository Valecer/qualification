import React from 'react'
import { NavLink } from 'react-router-dom'

import { Card } from 'flowbite-react';

export const Signin = () => {
    return (
        <div className="min-h-full flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
            <Card>
                <div className="max-w-md w-full space-y-10">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">Войдите в свой аккаунт</h2>
                        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
                            <NavLink to="/signup">
                            Или зарегистрируйтесь, для этого,
                                <h3 className="font-medium text-indigo-500 hover:text-indigo-400">
                                 нажмите сюда.
                                </h3>
                            </NavLink>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Электронная почта
                                </label>
                                <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300  placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Электронная почта"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Пароль
                                </label>
                                <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Пароль"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center mt-8 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                </span>
                                Войти
                            </button>
                        </div>
                    </form>
                </div>
            </Card>  
        </div>

    )
}