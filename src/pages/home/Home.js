import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



const Home = () => {
    return (
    <>
        <header>
            <nav>
                <div className='d-flex justify-content-center'>
                    <img src='/img/logo.jpg' alt='logo' />
                </div>
                <ul className="nav nav-underline navimenu">
                    <li className="nav-item text-uppercase">
                        <Link to='/' className="nav-link active" aria-current="page">
                        Home
                        </Link>
                    </li>
                    <li className="nav-item text-uppercase">
                        <Link to='/digitalwork' className="nav-link">
                        Digital Work
                        </Link>
                    </li>
                    <li className="nav-item text-uppercase">
                        <Link to='/artist' className="nav-link">
                        Artist
                        </Link>
                    </li>
                    <li className="nav-item text-uppercase">
                        <Link to='/faq' className="nav-link">FAQ</Link>
                    </li>
                    <li className="nav-item text-uppercase">
                        <Link to='/contact' className="nav-link">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <section id='background'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='text-uppercase nickname txt-anim text-center'>daren'jy</h1>
                        <h3 className='text-white text-center'>Digital Artist</h3>
                    </div>
                </div> 
            </div>    
        </section>
        <footer className='footer' id='footer'>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/' >
                <h6 className='text-center text-uppercase'>Copyright &copy; 2023, <strong>daren'jy</strong></h6>
            </Link>
            
        </footer>
    </>
    )
}

export default Home