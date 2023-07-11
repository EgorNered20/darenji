import { Link } from "react-router-dom"

const Faq = () => {
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
                            <Link to='/faq' className="nav-link  active">FAQ</Link>
                        </li>
                        <li className="nav-item text-uppercase">
                            <Link to='/contact' className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </nav>
        </header>
        <section className='faq' id="faq">
            <div className='container'>
                <div className='col-md-12 my-5'>
                    <h3>
                        GENERAL ADOPTS RULES
                    </h3>
                    <h5>
                    - Always credit me as a designer.<br></br>
                    - You can change design.<br></br>
                    - You can sell/trade/gift my designs. Just don't sell flat design for more that you bought it. If you invest in it, the other price is ok.<br></br>
                    </h5>
                </div>
                <div className='col-md-12 my-5'>
                    <h3>
                        ABOUT BUYING
                    </h3>
                    <h5>
                        - Auctions have usually its end date set individually in description.<br></br>
                        - Say clearly when you want to buy something.<br></br>
                        - Only serious offers, do not hide or cancel your offer.<br></br>
                    </h5>
                </div>
                <div className='col-md-12 my-5'>
                    <h3>
                        ABOUT PAYMENT
                    </h3>
                    <h5>
                        - For money adopts and payments: Boosty only.<br></br>
                        - Do not ask for different options of payment than included in adopt description.<br></br> 
                        - You have 24h to send payment.<br></br>
                    </h5>
                </div>
                <div className='col-md-12 my-5'>
                    <h3>
                        REFUNDS & COMPLAINS
                    </h3>
                    <h5>
                        - Im not doing refunds without a reason. Refund is only possible when the issue is 100% my fault.<br></br>
                        - First of all, always try to talk to me. I will always try to help you fix the issue.<br></br> 
                        - Im not doing refunds, when you no longer want the adopt(s).<br></br>
                    </h5>
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

export default Faq