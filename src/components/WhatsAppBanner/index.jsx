import React from 'react'

import whatsappImage from '../../assets/images/wpp.png'

import '../../assets/styles/WhatsappBanner.css'

const WhatsappBanner = () => {
    return (
        <div className="container-fluid col-lg-12 col-sm-2">
            <div className="row">
                <div className="col">
                    <img src={whatsappImage} alt="" className="img-fluid whatsapp"/>
                </div>
                <div className="col">
                    <p className="whatsapp-section"> Solicite seu orçamento pelo whatsapp</p>
                    <p className="whatsapp-subtitle"> Venda exclusiva para lojistas</p>
                    <button className="btn-green"> Converse com a gente</button>
                </div>
            </div>
        </div>
    )
}

export default WhatsappBanner
