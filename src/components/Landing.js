import React, { useEffect, useRef } from 'react';
import "./landingpage.styles.css"
import phone from "../images/colarse.png"
import gsap from 'gsap';

const Landing = () => {
    
    const timeLine = gsap.timeline()
    const page = useRef()
    const el = gsap.utils.selector(page);

    useEffect(()=>{
        timeLine
        .from([el('.logo'), el('.search')],{
            duration:1.2,
            y: -200,
            opacity: 0,
            ease: "power3.inOut"
        })
        .from([ el('.title')],{
            y:-16,
            opacity: 0,
            duration: 0.8,
            ease: "power3.inOut"
        }, "-=.2")
        .from([el(".more"), el('.tagline'),], {
            y: -40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.inOut",
        }, "-=.4")
        .from(el(".juice img"), {
            x:20,
            opacity: 0,
            duration: 1,
            ease: "power3.inOut"
        })
    }, [el, timeLine])

    return (
        <div className="wrapper" ref={page}>
                <div className="nav">
                    <div className="logo">
                        transmilleno.
                    </div>
                    <div className="search">
                        <span>DESCARGAR</span>
                        <i className="uil uil-download-alt"></i>
                    </div>
                </div>

                <div className="content">
                    <div className="tagline">Colarse nunca fue tan facil</div>
                    <div className="title">Transmilleno.</div>
                        <a href="https://my.forms.app/form/630d1b8dc2748c14c10dafe0" className='more'>
                            responder encuesta
                        </a>
                </div>
                <div className="juice">
                    <img src={phone} alt="" />
                </div>
         </div>


    );
};

export default Landing