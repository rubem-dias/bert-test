import React from 'react'
import {BsDot} from 'react-icons/bs'

import '../../assets/styles/Footer.css'

function Footer() {
    return (
        <>
            <footer>
                <div className="container-fluid px-0 footer ">
                        <div className="row text-center">
                            <div className="col first-col text-start">
                                <p className="logo-footer"> Logotipo </p>
                            </div>
                        </div>

                        <div className="row d-flex text-center">
                                <div className="col">
                                    <ul>
                                        <li> Quem Somos</li>
                                        <li> Gôndolas </li>
                                        <li> Móveis de aço</li>
                                        <li> Armazenagem </li>
                                        <li> Contato </li>
                                    </ul>
                        </div>
                        <div className="col">
                                <p> Faça seu orçamento <br/>
                                    Seja um colaborador
                                </p>
                                <p className="highlight-footer"> Siga-nos nas redes</p>
                                <span> <i class="fa fa-instagram"></i></span>
                                <span> <i class="fa fa-facebook-square"></i> </span>
                        </div>

                        <div className="col col-last">
                                    <p className=""> Loja <BsDot /> BH (a 5km do centro!) </p>
                                    <p className="address-footer"> Av.Professor Mário Werneck, 26 - 2 Andar <br/>
                                        Belo Horizonte - MG, CEP: 30455-610 <br />
                                        comercial@comercial.com.br
                                    </p>
                                    <p className="number-footer">
                                        <i class="fa fa-phone"></i> (31)3333-3333 <br />
                                        <i class="fa fa-whatsapp"> </i> (31) 93333-3333
                                    </p>
                        </div>

                        <div className="col col-last">
                                    <p className=""> Loja <BsDot /> BH (a 5km do centro!) </p>
                                    <p className="address-footer"> Av.Professor Mário Werneck, 26 - 2 Andar <br/>
                                        Belo Horizonte - MG, CEP: 30455-610 <br />
                                        comercial@comercial.com.br
                                    </p>
                                    <p className="number-footer">
                                        <i class="fa fa-phone"></i> (31)3333-3333 <br />
                                        <i class="fa fa-whatsapp"> </i> (31) 93333-3333
                                    </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0 footer-black">
                    <div className="row text-center">
                        <div className="col">
                            <small><a href="#">VERSATTI WEB:</a> Você escolhe as funcionalidades do seu site de acordo com as necessidades de sua empresa.</small>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
