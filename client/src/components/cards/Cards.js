import React from 'react'
import Cloud from '../../image/Cloud.gif'
import FFire from '../../image/FFire.jpg'
import './Cards.scss'

export const Cards = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col mh-50">
                <div className="card wrap-image">
                    <img src={FFire} className="card-img-top rounded" alt="Возгорание" />
                    <div className="card-body">
                        <h4 className="card-title">Возгорания</h4>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card wrap-image">
                    <img src={FFire} className="card-img-top rounded" alt="Гари"/>
                        <div className="card-body">
                            <h4 className="card-title">Гари</h4>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card wrap-image">
                    <img src={FFire} className="card-img-top rounded" alt="Дымы"/>
                        <div className="card-body">
                            <h4 className="card-title">Дымы</h4>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card wrap-image">
                    <img src={Cloud} className="card-img-top rounded" alt="Метеорология"/>
                        <div className="card-body">
                            <h4 className="card-title">Метеорология</h4>
                        </div>
                </div>
            </div>
        </div>
    )
}

