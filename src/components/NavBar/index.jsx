
import React from 'react'

import '../../assets/styles/NavBar.css'

export default function Header() {
    return (

            <>
                <div class="container-fluid p-0">
                    <div className="row">
                        <div className="up-side">
                            <ul className="up-header">
                                <li>  Entre em Contato conosco <span class="fa fa-arrow-right"></span></li>
                                <li>  (31) 3333-3333 </li> <i class="circle fa fa-circle"></i>
                                <li>  (31) 93333-3333 </li> <i class="circle fa fa-circle"></i>
                                <li>  comercial@comercial.com.br </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-0">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg red-light-nav">
                            <h1> Logotipo </h1>
                             <ul>
                                <li><a href="#"> Quem somos</a></li>
                                <li><a href="#"> Gôndolas </a><i class="fa fa-caret-down"></i></li>
                                <li><a href="#"> Móveis de aço</a><i class="fa fa-caret-down"></i></li>
                                <li><a href="#"> Armazenagem</a><i class="fa fa-caret-down"></i></li>
                                <li><a href="#"> Contato</a></li>
                             </ul>
                             <div className="square">
                                <i class="fa fa-search"></i>
                             </div>
                        </nav>
                    </div>   
                </div>
            </>
    )
}

