import { Link } from "react-router-dom"


const Artist = () => {
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
                            <Link to='/artist' className="nav-link active">
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
        <section className='artist' id='artist'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2>
                            Hi, I'm Daren'jy.
                            This is my website dedicated to designs, commissions and sketches. I've been drawing for 3 years now and I don't plan to stop there. I try to upload new works as often as possible in order to progress faster and train myself to create something regularly. I hope you will like my creations!
                        </h2>
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

export default Artist