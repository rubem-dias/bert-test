import React from 'react'

import '../../assets/styles/Form.css'

const Form = () => {
    return (
        <>
            <div className="container-fluid px-0 col-lg-12 form-block">
                <div className="">
                    <p className="text-section"> Seja um revendedor <br />e <span className="red-p">obtenha <br /> grandes lucros</span> <br/>em suas vendas!</p>
                    <p className="sub-text"> Cadastre-se usando <br /> o formulário ao lado </p>

                    <form action="">
                        <div className="form-row-s">
                            <div class="form-group col-md-4">
                                <label for="inputEmail4">Nome</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder=""></input>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputPassword4">Sobrenome</label>
                                <input type="password" class="form-control" id="inputPassword4" placeholder=""></input>
                            </div>
                        </div>


                        <div className="form-row-sec">
                            <div class="form-group col-md-12" style={{width: 315}}>
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder=""></input>
                            </div>
                        </div>

                        <div className="form-row-th">
                            <div class="form-group col-md-4">
                                <label for="inputEmail4">Telefone</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder=""></input>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputEmail4">Curriculum</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder=""></input>
                            </div>
                        </div>
                    </form>

                    <div className="col">
                        <button className="sendRegister"> Enviar meu Cadastro</button>
                    </div>
               </div>
            </div>
        </>
    )
}

export default Form
