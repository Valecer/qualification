import React, {Fragment} from 'react'
import {Cards} from "../../components/cards/Cards.js";

export const Home = () => {
    return (
            <Fragment>
                <div className="px-5 pt-5 pb-5 md:max-w-max">
                    <Cards/>
                </div>
            </Fragment>
        
    )
}