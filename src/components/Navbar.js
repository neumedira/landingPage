import React from "react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Aos from "aos";
import 'aos/dist/aos.css';

const Navbar = () => {
    Aos.init({
        duration: 1800,
        offset: 0,
    })
    return (
        <div className="max-w-[1640px] mx-auto flex justify-center items-center p-4" data-aos="fade-down">
            <div className="bg-white">
                <div className="space-x-10 flex text-sm p-3">
                    <Link to="home" spy={true} smooth={true} offset={50} duration={1000} className="hover:text-orange-500 duration-300">HOME</Link>
                    <Link to="client" spy={true} smooth={true} offset={50} duration={1000} className="hover:text-orange-500 duration-300">CLIENT</Link>
                    <Link to="about" spy={true} smooth={true} offset={50} duration={1000} className="hover:text-orange-500 duration-300">ABOUT</Link>
                    <Link to="jasa" spy={true} smooth={true} offset={50} duration={1000} className="hover:text-orange-500 duration-300">JASA</Link>
                    <Link to="testimonial" spy={true} smooth={true} offset={50} duration={1000} className="hover:text-orange-500 duration-300">TESTIMONIALS</Link>
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={1000} className="hover:text-orange-500 duration-300">CONTACT</Link>
                    <Link to="team" spy={true} smooth={true} offset={50} duration={1000} className="hover:text-orange-500 duration-300">TEAM</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar