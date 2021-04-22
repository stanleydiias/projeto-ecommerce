import React from 'react'
import logo from "../img/Grupo 232.png";
import fb from '../img/facebook.svg'
import insta from '../img/instagram.svg'
import twt from '../img/twitter.svg'
import carr from '../img/carrinho.svg'




function NavBar({ acao }) {
    return (
        <nav class={acao ? 'navbarS sticky-top navbar-expand-lg py-4 navbar-light color-nav' : 'navbar sticky-top navbar-expand-lg py-4 navbar-light color-nav'}>
            <div class="container-fluid py-7">
                <button class="navbar-toggler justify-content-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-header mx-auto">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="" />
                    </a>
                </div>

                <div class="collapse navbar-collapse color-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ">
                        <a class="nav-link" href="#quemSomos">Quem Somos</a>
                        <a class="nav-link" href="#produtos">Produtos</a>
                        <a class="nav-link" href="#local">Contato</a>
                    </div>
                </div>
                <div className="navbar-icon">
                    <a class="navbarIcon" href="#">
                        <img src={fb} alt="" />
                    </a>
                    <a class="navbarIcon" href="#">
                        <img src={insta} alt="" />
                    </a>
                    <a class="navbarIcon" href="">
                        <img src={twt} alt="" />
                    </a></div>
            </div>
            <a className="carrinho-link" href="">
                <img className="navbar-icon-car rounded float-end" src={carr} alt="" />
                <span className="quantidade-carrinho rounded float-end">02</span>
            </a>
        </nav>


    )
}

export default NavBar
