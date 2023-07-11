import { Link } from "react-router-dom"
import { Instagram, Telegram, Tiktok, Envelope, CurrencyExchange } from 'react-bootstrap-icons'


const Contact = () => {
    return (
        <>
            <header>
                <nav>
                    <div className='d-flex justify-content-center'>
                        <img src='/img/logo.jpg' alt='logo' />
                    </div>
                    <ul className="nav nav-underline navimenu">
                        <li className="nav-item text-uppercase">
                            <Link to='/' className="nav-link" aria-current="page">
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
                            <Link to='/contact' className="nav-link active">Contact</Link>
                        </li>
                    </ul>
                </nav>
        </header>
        <section className='contact' id='contact'>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <div className='row'>
                        <div className='col-md-12 my-4 text-center'>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to='https://www.instagram.com/daren.jy/'>
                                <Instagram size={50}></Instagram>
                            </Link>
                            <h3 className='my-3'>Instagram</h3>
                        </div>
                        <div className='col-md-12 my-3 text-center'>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to='https://t.me/QwedryKrestik2'>
                                <Telegram size={50}></Telegram>
                            </Link>
                            <h3 className='my-3'>Telegram</h3>
                        </div>
                        <div className='col-md-12 my-3 text-center'>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to='http://tiktok.com/@darenjy'>
                                <Tiktok size={50}></Tiktok>
                            </Link>
                            <h3 className='my-3'>Tiktok</h3>
                        </div>
                        <div className='col-md-12 my-3 text-center'>
                            <a style={{ textDecoration: 'none', color: 'black' }} href='mailto:art.darenjy@gmail.com'>
                                <Envelope size={50}></Envelope>
                            </a>
                            <h3 className='my-3'>Email</h3>
                        </div>
                        <div className='col-md-12 my-3 text-center'>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to='https://boosty.to/darenjy'>
                                <CurrencyExchange size={50}></CurrencyExchange>
                            </Link>
                            <h3 className='my-3'>Boosty</h3>
                        </div>
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

export default Contact