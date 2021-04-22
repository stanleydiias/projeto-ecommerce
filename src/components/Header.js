import React, { useEffect } from 'react'
import Aos from 'aos';
//import banner from '../img/Imagem 1.png'
//<img className="logo" src={banner} alt="logo..."/>

const Header = () => {

    
    //Effect with scroll
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (

        
        <div className="container-fluid" id="topo">
            <div className="row " id="header-wraper" alt="">
                <div  className="main-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-sm-6">
                                <h1>Sabor em <br /> Cada pedaço.</h1>
                                <br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <a class="btn btn-secondary" id="btn-header" href="#" role="button">Nossos Produtos</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
