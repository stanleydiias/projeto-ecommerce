import React,{useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import img1 from '../img/produto1.png'
import img2 from '../img/produto2.png'
import img3 from '../img/produto3.png'
import img4 from '../img/produto4.png'
import img5 from '../img/produto5.png'
import img6 from '../img/produto6.png'




const Produtos = () => {

    //Effect with scroll
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (

        <div className="produtos" id="produtos">
            <div className="produtos-wraper">
                <div className="container">
                    <h1 data-aos="fade" data-aos-offset="300" className="py-5">Produtos</h1>
                    <div id="linha"></div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6" type="button" data-bs-toggle="modal" data-bs-target="#modal-01">
                            <div data-aos="fade-right" data-aos-duration="600" data-aos="zoom-in" data-aos-duration="600" className="box">
                                <img className="img-fluid" src={img1} alt="produto01" />
                                <h3>Macarons Diversos 90g</h3><br />
                                <p id="price1">R$9,00</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-4 col-sm-6" type="button" data-bs-toggle="modal" data-bs-target="#modal-02">
                            <div data-aos="zoom-in" data-aos-duration="800" className="box">
                                <img className="img-fluid" src={img2} alt="produto02" />
                                <h3>Tortilette de Laranja Lima com Amoras</h3>
                                <p>R$12,00</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-4 col-sm-6" type="button" data-bs-toggle="modal" data-bs-target="#modal-03">
                            <div data-aos="zoom-in" data-aos-duration="1000" className="box">
                                <img className="img-fluid" src={img3} alt="produto03" />
                                <h3>Fatia de Torta Gelada de Café com Chocolate Amargo</h3>
                                <p id="price2">R$14,00</p>
                            </div>
                        </div>
                    </div><br /><br />
                    <div class="collapse" id="collapseExample">
                        <div className="row" id="row-produtos-2" type="button" data-bs-toggle="modal" data-bs-target="#modal-04">
                            <div className="col-md-4 col-sm-6">
                                <div data-aos="zoom-in" data-aos-duration="600" className="box">
                                    <img className="img-fluid" src={img4} alt="produto04" />
                                    <h3>Cupcake de Morango Glaceado</h3>
                                    <p>R$11,00</p>
                                </div>
                            </div>
                            {/* - */}
                            <div className="col-md-4 col-sm-6" type="button" data-bs-toggle="modal" data-bs-target="#modal-05">
                                <div data-aos="zoom-in" data-aos-duration="800" className="box">
                                    <img className="img-fluid" src={img5} alt="produto05" />
                                    <h3>Rosquinha de Morango com Coco</h3>
                                    <p>R$6,00</p>
                                </div>
                            </div>
                            {/* - */}
                            <div className="col-md-4 col-sm-6" type="button" data-bs-toggle="modal" data-bs-target="#modal-06">
                                <div data-aos="zoom-in" data-aos-duration="1000" className="box">
                                    <img className="img-fluid" src={img6} alt="produto06" />
                                    <h3>Fatia de Torta Gelada de Frutas Vermelhas</h3>
                                    <p>R$14,00</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row justify-content-center">
                        <div class="col-4">
                            <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                VER MAIS
                        </button>
                        </div>

                    </div>
                </div >
            </div>
        </div>


    )
}

export default Produtos;
