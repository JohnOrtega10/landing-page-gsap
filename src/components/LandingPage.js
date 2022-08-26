import React, { useEffect, useRef } from 'react';
import "./landingpage.styles.css"
// import logo from "../images/logo.png"
import phone from "../images/phone.png"
import gsap from 'gsap';

const LandingPage = () => {
    
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
        // .from(el('.title'),{
        //     opacity: 0,
        //     y: 20,
        //     ease: "Expo.easeInOut"
        // })
        .from([el(".more"), el(".desc"), el('.tagline'),], {
            // delay: 1.4,
            y: -40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.ease",
            // stagger:{
            //     amount: .3
            // }
        }, "-=.2")
        .from(el(".juice img"), {
            x:20,
            opacity: 0,
            duration: 1,
            ease: "power3.Out"
        })
        // .from(".desc", {
        //     opacity: 0,
        //     y: 20,
        //     ease: "Expo.easeInOut"
        // })
    }, [el, timeLine])

    // TweenMax.from(".title", 1, {
        //     delay: 1,
        //     opacity: 0,
        //     y: 20,
        //     ease: Expo.easeInOut
        //   })
      
        //   TweenMax.from(".tagline", 1, {
        //     delay: 1.3,
        //     opacity: 0,
        //     y: 20,
        //     ease: Expo.easeInOut
        //   })

    // TweenMax.from(".logo", 1, {
    //     opacity: 0,
    //     x: -20,
    //     ease: Expo.easeInOut
    //   })
  
    //   TweenMax.staggerFrom(".menu-links ul li", 1, {
    //     opacity: 0,
    //     x: -20,
    //     ease: Power3.easeInOut
    //   }, 0.08)
  
    //   TweenMax.from(".search", 1, {
    //     delay: .5,
    //     opacity: 0,
    //     x: -20,
    //     ease: Expo.easeInOut
    //   })
  
    //   TweenMax.from(".account", 1, {
    //     delay: .6,
    //     opacity: 0,
    //     x: -20,
    //     ease: Expo.easeInOut
    //   })
  
    //   TweenMax.from(".cart", 1, {
    //     delay: .7,
    //     opacity: 0,
    //     x: -20,
    //     ease: Expo.easeInOut
    //   })
  
    //   TweenMax.from(".juice", 1, {
    //     delay: 2,
    //     opacity: 0,
    //     y: -800,
    //     ease: Expo.easeInOut
    //   })
  
    //   TweenMax.from(".leaves .layer:nth-child(1)", 2, {
    //     delay: 2,
    //     opacity: 0,
    //     y: -800,
    //     ease: Expo.easeInOut
    //   })
  
    //   TweenMax.from(".leaves .layer:nth-child(2)", 2, {
    //     delay: 2.1,
    //     opacity: 0,
    //     y: -800,
    //     ease: Expo.easeInOut
    //   })
  
    //   TweenMax.from(".leaves .layer:nth-child(3)", 2, {
    //     delay: 2.2,
    //     opacity: 0,
    //     y: -800,
    //     ease: Expo.easeInOut
    //   })
  
    //   TweenMax.from(".leaves .layer:nth-child(4)", 2, {
    //     delay: 2.3,
    //     opacity: 0,
    //     y: -800,
    //     ease: Expo.easeInOut
    //   })
  
    //   TweenMax.from(".leaves .layer:nth-child(5)", 2, {
    //     delay: 2.5,
    //     opacity: 0,
    //     y: -800,
    //     ease: Expo.easeInOut
    //   })
  
    //   TweenMax.from(".title", 1, {
    //     delay: 1,
    //     opacity: 0,
    //     y: 20,
    //     ease: Expo.easeInOut
    //   })
  
    //   TweenMax.from(".tagline", 1, {
    //     delay: 1.3,
    //     opacity: 0,
    //     y: 20,
    //     ease: Expo.easeInOut
    //   })
  
    //   TweenMax.from(".pages", 1, {
    //     delay: 1.3,
    //     opacity: 0,
    //     y: 20,
    //     ease: Expo.easeInOut
    //   })
  
    //   TweenMax.from(".more", 1, {
    //     delay: 1.4,
    //     opacity: 0,
    //     y: 20,
    //     ease: Expo.easeInOut
    //   })
  
    //   TweenMax.from(".desc", 1, {
    //     delay: 1.4,
    //     opacity: 0,
    //     y: 20,
    //     ease: Expo.easeInOut
    //   })
  
    //   TweenMax.from(".arrows", 1, {
    //     delay: 2,
    //     opacity: 0,
    //     ease: Expo.easeInOut
    //   })





    return (
        <div class="wrapper" ref={page}>
                <div class="nav">
                    
                    <div class="logo">
                        {/* <img src={logo} alt="" /> */}
                        attendance.
                    </div>

                    {/* <div class="menu-links"> */}
                        {/* <ul>
                        <li>locations</li>
                        <li>our menu</li>
                        <li>our story</li>
                        <li>meet our teem</li>
                        <li>own a clean juice</li>
                        <li>contact us</li>
                        </ul> */}
                    {/* </div> */}

                    <div class="search">
                        <span>DOWNLOAD</span>
                        <i class="uil uil-download-alt"></i>
                    </div>

                    {/* <div class="account">my account</div> */}

                    {/* <div class="cart"><i class="i fa fa-shopping-cart"></i></div> */}
                </div>

                <div class="content">
                    <div class="tagline">Punctuality is respect</div>
                    {/* <div class="pages"><span>2</span>/21</div> */}
                    <div class="title">attendance.</div>
                    <div class="more"><a href="//">write your review</a></div>

                    <div class="desc">
                        <p>
                            <span>Punctuality</span> is respect for other people's time
                        </p>
                        <p>
                            This application is to make it easier for the teacher and students to take assistance in each classroom, thus implementing new technological tools and interactions with students.
                        </p>
                    </div>
                </div>

                <div class="juice">
                    <img src={phone} alt="" />
                {/* <img src="./img/juice.png" alt=""> */}
                </div>

                <div class="leaves">
                <ul id="scene">
                        <li class="layer" data-depth="-.1">
                            <img src="" alt="" />
                        {/* <img src="./img/leaf01.png" alt=""> */}
                        </li>
                        <li class="layer" data-depth="-.3">
                            <img src="" alt="" />
                        {/* <img src="./img/leaf02.png" alt=""> */}
                        </li>
                        <li class="layer" data-depth="-1.5">
                            <img src="" alt="" />
                        {/* <img src="./img/leaf03.png" alt=""> */}
                        </li>
                        <li class="layer" data-depth=".1">
                            <img src="" alt="" />
                        {/* <img src="./img/leaf04.png" alt=""> */}
                        </li>
                        <li class="layer" data-depth=".3">
                            <img src="" alt="" />
                            {/* <img src="./img/leaf05.png" alt=""> */}
                        </li>
                    </ul>
                </div>

                {/* <div class="arrows">
                    <button class="prev"><i class="fa fa-chevron-left"></i></button>
                    <button class="next"><i class="fa fa-chevron-right"></i></button>
                </div> */}


         </div>


    );
};

export default LandingPage;