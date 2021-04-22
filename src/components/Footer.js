import React from 'react';
import logoFooter from '../img/logo2.png';
import telefoneIcon from '../img/Telefone.svg';
import emailIcon from '../img/Email.svg';
import locationIcon from '../img/Location.svg';
import up from '../img/up.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container py-5">
                <div className="row" id="linhaFooter">
                    <div className="col-sm-3">

                    </div>
                    <div className="col-sm-3">
                        <img className="logo-cinza" src={logoFooter} alt="logo..." />
                    </div>

                    <div className="col-sm-6" id="footer-wraper">
                        <img className="logo-telefone" id="iconFooter" src={telefoneIcon} alt="logo..." /><label><b>+55 (87) 3312.4057</b></label><br />
                        <img className="logo-email" id="iconFooter" src={emailIcon} alt="logo..." /><label id="email"><b>contato@babakery.com.br</b><div id="linha2"></div></label><br />
                        <img className="logo-location" id="iconFooter" src={locationIcon} alt="logo..." /><label id="endereco">R. Hermílio Arantes, 1040 - Vila dos <br /> Coqueiros.  Graças, Recife - PE.</label><br />
                        <a href="#topo">
                            <img type="button" className="logo-up" src={up} alt="logo..." />
                        </a>
                    </div>
                </div>
                <hr />
                <p>Stanley Dias - Copyright 2021 © Todos os direitos reservados.</p>
            </div>
        </div>
    )
}

export default Footer
