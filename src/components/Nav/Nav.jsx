import React from 'react'
import './Nav.css'
import { Outlet, Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import Img from '../../../public/icon.svg'

const Nav = () => {
    return (
        <header>
            <div className="headline">
                <Marquee pauseOnHover='true' speed={50} className='marquee-ctn'>
                    <img src={Img} className='img-style' />
                    <h1>CHRIS KANG's WEBSITE</h1>
                    <img src={Img} className='img-style' />
                    <h1>CHRIS KANG's PORTFOLIO</h1>
                    <img src={Img} className='img-style' />
                    <h1>CHRIS KANG's WEBSITE</h1>
                    <img src={Img} className='img-style' />
                    <h1>CHRIS KANG's PORTFOLIO</h1>
                </Marquee>
            </div>
            <ul className="navbar">
                <li>
                    <Link to="/" className='link'>home</Link>
                </li>
                <li>
                    <Link to="/projects" className='link'>my projects</Link>
                </li>
                <li>
                    <Link to="/about" className='link'>about me</Link>
                </li>
                <li>
                    <Link to="/contact" className='link'>contact me</Link>
                </li>
                <li>
                    <Link className='link'>my github</Link>
                </li>
            </ul>
            <Outlet/>
        </header>
    )
}
export default Nav