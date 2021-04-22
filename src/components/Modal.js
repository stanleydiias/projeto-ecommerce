import React from 'react'
import img1 from '../img/produto1.png'
import img1Mini1 from '../img/produto1-mini.png'
import img1Mini2 from '../img/produto1-mini2.png'
import img1Mini3 from '../img/produto1-mini3.png'

import img2 from '../img/produto2.png'
import img2Mini1 from '../img/produto2-mini.png'
import img2Mini2 from '../img/produto2-mini2.png'
import img2Mini3 from '../img/produto2-mini3.png'

import img3 from '../img/produto3.png'
import img3Mini1 from '../img/produto3-mini.png'
import img3Mini2 from '../img/produto3-mini2.png'
import img3Mini3 from '../img/produto3-mini3.png'

import img4 from '../img/produto4.png'
import img4Mini1 from '../img/produto4-mini.png'
import img4Mini2 from '../img/produto4-mini2.png'
import img4Mini3 from '../img/produto4-mini3.png'

import img5 from '../img/produto5.png'
import img5Mini1 from '../img/produto5-mini.png'
import img5Mini2 from '../img/produto5-mini2.png'
import img5Mini3 from '../img/produto5-mini3.png'

import img6 from '../img/produto6.png'
import img6Mini1 from '../img/produto6-mini.png'
import img6Mini2 from '../img/produto6-mini2.png'
import img6Mini3 from '../img/produto6-mini3.png'

import Quantidade from '../components/Quantidade'

const Modal = () => {
    return (
        <div className="conjunto-modal">
            <div class="modal fade" id="modal-01" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row" id="row-1">
                                    <div class="col-md-6">
                                        <img className="img-fluid" src={img1} alt="produto01" />
                                    </div>
                                    <div class="col-md-6 ms-auto">
                                        <h3>Macarons Diversos 90g</h3><br />
                                        <p>R$9,00</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do tempor incididun ut labore et dolore magna aliqua. Ut enim ad mi , quis nostrud veniam exercitation.</p>
                                    </div>
                                </div>
                                <div class="row" id="row-2">
                                    <div class="col-md-6 ">
                                        <a href=""><img className="img-fluid " src={img1Mini1} alt="produto01" /></a>
                                        <a href=""><img className="img-fluid" src={img1Mini2} alt="produto01" /></a>
                                        <a href=""><img className="img-fluid" src={img1Mini3} alt="produto01" /></a>
                                    </div>
                                </div>
                                <div class="col-6 ms-auto"></div>
                                <Quantidade />
                                <button className="btn btn-secondary" type="button" id="add">ADICIONAR AO CARRINHO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="modal-02" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row" id="row-1">
                                    <div class="col-md-6">
                                        <img className="img-fluid" src={img2} alt="produto01" />
                                    </div>
                                    <div class="col-md-6 ms-auto">
                                        <h3>Tortilette de Laranja Lima com Amoras</h3><br />
                                        <p>R$12,00</p><br />
                                        <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do tempor incididun ut labore et dolore magna aliqua. Ut enim ad mi , quis nostrud veniam exercitation.</p>
                                    </div>
                                </div>
                                <div class="row" id="row-2">
                                    <div class="col-md-6 ">
                                        <a href=""><img className="img-fluid" src={img2Mini1} alt="produto01" /></a>
                                        <a href=""><img className="img-fluid" src={img2Mini2} alt="produto01" /></a>
                                        <a href=""><img className="img-fluid" src={img2Mini3} alt="produto01" /></a>
                                    </div>
                                </div>
                                <div class="col-6 ms-auto"></div>
                                <Quantidade />
                                <button className="btn btn-secondary" type="button" id="add">ADICIONAR AO CARRINHO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="modal-03" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row" id="row-1">
                                    <div class="col-md-6">
                                        <img className="img-fluid" src={img3} alt="produto01" />
                                    </div>
                                    <div class="col-md-6 ms-auto">
                                        <h3>Fatia de Torta Gelada de Café com Chocolate Amargo</h3><br />
                                        <p>R$14,00</p><br />
                                        <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do tempor incididun ut labore et dolore magna aliqua. Ut enim ad mi , quis nostrud veniam exercitation.</p>
                                    </div>
                                </div>
                                <div class="row" id="row-2">
                                    <div class="col-md-6 ">
                                        <a href=""><img className="img-fluid " src={img3Mini1} alt="produto01" /></a>
                                        <a href=""><img className="img-fluid" src={img3Mini2} alt="produto01" /></a>
                                        <a href=""><img className="img-fluid" src={img3Mini3} alt="produto01" /></a>
                                    </div>
                                </div>
                                <div class="col-6 ms-auto"></div>
                                <Quantidade />
                                <button className="btn btn-secondary" type="button" id="add">ADICIONAR AO CARRINHO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="modal-04" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row" id="row-1">
                                    <div class="col-md-6">
                                        <img className="img-fluid" src={img4} alt="produto01" />
                                    </div>
                                    <div class="col-md-6 ms-auto">
                                        <h3>Macarons Diversos 90g</h3><br />
                                        <p>R$9,00</p><br />
                                        <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do tempor incididun ut labore et dolore magna aliqua. Ut enim ad mi , quis nostrud veniam exercitation.</p>
                                    </div>
                                </div>
                                <div class="row" id="row-2">
                                    <div class="col-md-6 ">
                                        <a href=""><img className="img-fluid " src={img4Mini1} alt="produto01" /></a>
                                        <a href=""><img className="img-fluid" src={img4Mini2} alt="produto01" /></a>
                                        <a href=""><img className="img-fluid" src={img4Mini3} alt="produto01" /></a>
                                    </div>
                                </div>
                                <div class="col-6 ms-auto"></div>
                                <Quantidade />
                                <button className="btn btn-secondary" type="button" id="add">ADICIONAR AO CARRINHO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="modal-05" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row" id="row-1">
                                    <div class="col-md-6">
                                        <img className="img-fluid" src={img5} alt="produto01" />
                                    </div>
                                    <div class="col-md-6 ms-auto">
                                        <h3>Macarons Diversos 90g</h3><br />
                                        <p>R$9,00</p><br />
                                        <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do tempor incididun ut labore et dolore magna aliqua. Ut enim ad mi , quis nostrud veniam exercitation.</p>
                                    </div>
                                </div>
                                <div class="row" id="row-2">
                                    <div class="col-md-6 ">
                                        <a href=""><img className="img-fluid " src={img5Mini1} alt="produto01" /></a>
                                        <a href=""><img className="img-fluid" src={img5Mini2} alt="produto01" /></a>
                                        <a href=""><img className="img-fluid" src={img5Mini3} alt="produto01" /></a>
                                    </div>
                                </div>
                                <div class="col-6 ms-auto"></div>
                                <Quantidade />
                                <button className="btn btn-secondary" type="button" id="add">ADICIONAR AO CARRINHO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="modal-06" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row" id="row-1">
                                    <div class="col-md-6">
                                        <img className="img-fluid" src={img6} alt="produto01" />
                                    </div>
                                    <div class="col-md-6 ms-auto">
                                        <h3>Macarons Diversos 90g</h3><br />
                                        <p>R$9,00</p><br />
                                        <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do tempor incididun ut labore et dolore magna aliqua. Ut enim ad mi , quis nostrud veniam exercitation.</p>
                                    </div>
                                </div>
                                <div class="row" id="row-2">
                                    <div class="col-md-6 ">
                                        <a href=""><img className="img-fluid " src={img6Mini1} alt="produto01" /></a>
                                        <a href=""><img className="img-fluid" src={img6Mini2} alt="produto01" /></a>
                                        <a href=""><img className="img-fluid" src={img6Mini3} alt="produto01" /></a>
                                    </div>
                                </div>
                                <div class="col-6 ms-auto"></div>
                                <Quantidade />
                                <button className="btn btn-secondary" type="button" id="add">ADICIONAR AO CARRINHO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row" id="row-1">
                                    <div class="col-md-6">
                                        <img className="img-fluid" src={img1} alt="produto01" />
                                    </div>
                                    <div class="col-md-6 ms-auto">
                                        <h3>Macarons Diversos 90g</h3><br />
                                        <p>R$9,00</p><br />
                                        <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do tempor incididun ut labore et dolore magna aliqua. Ut enim ad mi , quis nostrud veniam exercitation.</p>
                                    </div>
                                </div>
                                <div class="row" id="row-2">
                                    <div class="col-md-6 ">
                                        <a href=""><img className="img-fluid " src={img1Mini1} alt="produto01" /></a>
                                        <a href=""><img className="img-fluid" src={img1Mini2} alt="produto01" /></a>
                                        <a href=""><img className="img-fluid" src={img1Mini3} alt="produto01" /></a>
                                    </div>
                                </div>
                                <div class="col-6 ms-auto"></div>
                                <Quantidade />
                                <button className="btn btn-secondary" type="button" id="add">ADICIONAR AO CARRINHO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
