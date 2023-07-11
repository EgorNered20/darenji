import { Link } from "react-router-dom"

const Digitalwork = () => {    
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
                            <Link to='/digitalwork' className="nav-link active">
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
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 my-3'>
                        <img className='imgworksq' src='/img/works.jpg' alt='work' />
                    </div>
                    <div className='col-md-6 my-3'>
                        <img className='imgworksq' src='/img/works1.jpg' alt='work' />
                    </div>
                    <div className='col-md-6 my-3'>
                        <img className='imgworksq' src='/img/works2.jpg' alt='work' />
                    </div>
                    <div className='col-md-6 my-3'>
                        <img className='imgworksq' src='/img/works3.jpg' alt='work' />
                    </div>
                    <div className='col-md-6 my-3'>
                        <img className='imgworksq' src='/img/works4.jpg' alt='work' />
                    </div>
                    <div className='col-md-6 my-3'>
                        <img className='imgworksq' src='/img/works5.jpg' alt='work' />
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

export default Digitalwork