import React from "react";
import notas1 from '../images/notas1.png'
import notas2 from '../images/notas2.png'
import notas3 from '../images/notas3.png'
// import logo from '../images/logo (2).png'
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"
import "swiper/css/a11y"
import "swiper/css/zoom"
import { A11y, Autoplay, Navigation, Zoom } from "swiper";


function Notas() {

    return (
        <>
            <div className="headerf">
                <div className="headercontainerf">
                    <Link to='/'><span className="spanheaderprincipal">HOME</span></Link>
                </div>
            </div>
            <div className="maincpjts">
                <div className="childmaindiv">
                    <div className="spancontainer">
                        <span className="titlechild">Gerenciador de Notas</span>
                    </div>
                    <div className="containerimgc">
                        <div className="imgdivc">
                            <Swiper navigation={true} a11y={true} autoplay={true} zoom={true} modules={[Navigation, Autoplay, A11y, Zoom]} className="mySwiper">
                                <SwiperSlide><img src={notas1} className='imgslider' alt="" /></SwiperSlide>
                                <SwiperSlide><img src={notas2} className='imgslider' alt="" /></SwiperSlide>
                                <SwiperSlide><img src={notas3} className='imgslider' alt="" /></SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                    <div className="parahraphcontainer">
                        <div className="flexparagraph">
                            <p>Este projeto foi feito para apresentação de um trabalho de conclusão de curso (TCC). 
                            Ele é totalmente funcional, conta com login e registro de alunos e professores e suas devidas funcionalidades.. quem sabe eles começam a usar o programa haha..
                            </p>
                            <span className="spanut">Tecnologias utilizadas: <span className="react">ReactJS</span>, <span className="node">NodeJS</span>, <span className="sql">Mysql</span>, <span className="canva">Canva</span>.</span> <br />
                            <div className="btngrpf">
                                <button className="button-74 btnp" onClick={() => { alert('Visualização indisponível') }}>
                                    Checar Site!
                                </button>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Notas