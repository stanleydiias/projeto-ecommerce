import React,{useEffect} from 'react';
import Aos from 'aos';
import imglocal from '../img/imgLocal.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

const Local = () => {

    
    //Effect with scroll
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
    
    return (
        <div className="local" id="local">
            <div className="container py-5">
                <div className="row" id="row-local">
                    <div id="box-form" data-aos="fade-right" data-aos-duration="600" data-aos-offset="300" className="col-lg-6 col-xm-12">
                        <h1>Se interessou pelos nossos serviços? Manda uma mensagem pra gente. :)</h1>
                        <form action="enviaContato.php" method="post">
                            <div class="row"><span id="span" className="col-sm-2">NOME</span>
                                <div class="col-sm-8"><input id="nome" class="form-control shadow-none" name="nome" required="" type="text" placeholder="Ex: Renata Lopes" /></div>
                            </div>
                            <div class="row"><span id="span" className="col-sm-2">TELEFONE</span>
                                <div class="col-sm-8"><input id="telefone" class="form-control shadow-none" name="telefone" required="" type="text" placeholder="(XX) X XXXX-XXXX" /></div>
                            </div>
                            <div class="row"><span id="span" className="col-sm-2">EMAIL</span>
                                <div class="col-sm-8"><input id="email" class="form-control shadow-none" name="email" required="" type="text" placeholder="exemplo@exemplo.com.br" /></div>
                            </div>
                            <div className="row"><span id="span" className="col-sm-2">MENSAGEM</span>
                                <div class="col-sm-8"><textarea className="form-control shadow-none" name="" id="textarea" cols="47" rows="3" placeholder="Digite aqui sua mensagem"></textarea></div>
                            </div>
                            <div className="row"><span className="col-sm-2"></span>
                                <div class="col-sm-8"><button type="button" class="btn btn-light" id="btn-enviar">ENVIAR</button></div>
                            </div>

                        </form>

                    </div>
                    <div data-aos="fade-up" data-aos-duration="800" data-aos-offset="300" className="col-lg-6 col-xm-12">
                        <div className="container">
                            <div className="box-local"><br />
                                <h3>Você também pode <br /> nos fazer uma visita.</h3>
                                <img className="local-img" src={imglocal} alt="local..." />
                                <p className="local-icon"><FontAwesomeIcon className="icon" icon={faMapMarker} size="1x" /> R. Hermílio Arantes, 1040 - Vila dos Coqueiros. <br /> Graças, Recife - PE.</p>
                                <button type="button" class="btn btn-light" >Traçar rota</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Local
