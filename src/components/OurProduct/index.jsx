import React from 'react'

import gond1 from '../../assets/images/gond1.png'
import gond2 from '../../assets/images/gond2.png'
import gond3 from '../../assets/images/gond3.png'
import gond4 from '../../assets/images/gond4.png'

import {AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

import '../../assets/styles/OurProducts.css'

const OurProducts = () => {


    return (
        <>
            <div className="container our-product px-0 text-center col-lg-12 col-sm-2">
                <p className="title-our-product"> Nossos Produtos </p>
                <AiOutlineArrowLeft className="arrow-left"/>
                <AiOutlineArrowRight className="arrow-right"/>
                <div className="row block-products">
                    <div className="col box-image">
                        <img src={gond1} alt="" className="img-fluid"/>
                        <p className="subtitle">GÔNDOLA <br/>XYZ</p>
                        <p className="price"> R$199,00 </p>
                        <small> ou 6x de R$49,90 </small>
                    </div>
                    <div className="col box-image">
                        <img src={gond2} alt="" className="img-fluid"/>
                        <p className="subtitle">GÔNDOLA <br/>XYZ</p>
                        <p className="price"> R$199,00 </p>
                        <small> ou 6x de R$49,90 </small>
                    </div>
                    <div className="col box-image">
                        <img src={gond3} alt="" className="img-fluid"/>
                        <p className="subtitle">GÔNDOLA <br/>XYZ</p>
                        <p className="prevPrice"> R$149,00</p> <p className="price"> R$199,00 </p>
                        <small> ou 6x de R$49,90 </small>
                    </div>
                    <div className="col box-image">
                        <img src={gond4} alt="" className="img-fluid"/>
                        <p className="subtitle">GÔNDOLA <br/>XYZ</p>
                        <p className="price"> R$199,00 </p>
                        <small> ou 6x de R$49,90 </small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurProducts
