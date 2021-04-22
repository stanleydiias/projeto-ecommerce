import React,{useEffect} from 'react';
import historiaImg from '../img/Historia1.png';
import Aos from 'aos';

const Historia = () => {

    //Effect with scroll
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <div className="historia" id="quemSomos">
            <div className="historia-wraper">
                <div className="container py-5">
                    <div className="row" id="linha-historia">
                        <div data-aos="fade-right" data-aos-duration="600" data-aos-offset="300" className="col-lg-6 col-xm-12">
                            <div data-aos="fade-right" className="photo-wrap mb-5">
                                <img className="img-fluid" id="historia-img" src={historiaImg} alt="author..." />
                            </div>
                        </div>

                        <div data-aos="fade-left" data-aos-duration="800" data-aos-offset="300" className="col-lg-6 col-xm-12">
                            <div className="titulo-h1">
                                <h1 className="about-heading">História da Ba Baker</h1>
                            </div>
                            <div data-aos="fade-left" data-aos-duration="600" id="linha"></div>
                            <p className="about-p" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Historia
