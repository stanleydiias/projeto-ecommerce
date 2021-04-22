import React, {useEffect, useState} from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../src/components/NavBar';
import Header from '../src/components/Header';
import Historia from '../src/components/Historia';
import Produtos from '../src/components/Produtos';
import Local from '../src/components/Local'
import Footer from '../src/components/Footer'
import Modal from '../src/components/Modal'


function App() {

  const [navbarS, setAtivaCor] = useState(false);

  useEffect(function(){
    function posicaoScroll(){
      if(window.scrollY > 50.3){
          setAtivaCor(true);
      }else {
        setAtivaCor(false);
      }
    }

    window.addEventListener('scroll', posicaoScroll);
  }, []);

    return (
      <>
        <Navbar acao={navbarS}/>
        <Header />
        <Historia />
        <Produtos />
        <Local />
        <Footer />
        <Modal />
      </>


    );
  }


export default App;
