import React from 'react'

import '../../assets/styles/RowOptions.css'

const RowOptions = () => {
    return (   
        <div className="container-fluid px-0 col-lg-12 row-above">
            <div className="row text-center">
                <div className="col block-one">
                    <p className="block-title"> Quer ser um colaborador ou <br />representante? </p>
                    <button className="btn btn-primary"> Preencha Seus Dados</button>
                </div>
                <div className="col block-two">
                    <p className="block-title"> Venda excluiva para <br />lojista através do Whatsapp: </p>
                    <button className="btn btn-primary"> Converse com a gente </button>
                </div>
                <div className="col block-three">
                    <p className="block-title"> Gostou de algum dos <br />nossos produtos? </p>
                    <button className="btn btn-primary"> Faça seu orçamento </button>
                </div>
                <div className="col block-four">
                    <p className="block-title"> Seja um revendedor <br /> agora mesmo! </p>
                    <button className="btn btn-primary"> Faça seu cadastro </button>
                </div>
            </div>
        </div>
    )
}

export default RowOptions
