import React from 'react' ;
import "../../styles/header.css";
import logo from "../../assets/img/dumble.png";


const nav_links = [
    {
        path:'#',
        display:'Home'
    },
    {
        path:'#',
        display:'Shedule'
    },
    {
        path:'#',
        display:'Classes'
    },
    {
        path:'#',
        display:'Pricing'
    },
]

const Header = () => {
    return <header className='header'>
        <div className="container">
            <div className="nav_wrapper">
                {/*__________LOGO________ */}
                <div className="logo">
                    <div className="logo__img">
                        <img src={logo} alt="" />
                    </div>
                    <h1>Fitbody</h1>
                </div>
                {/*________navigation menu _____*/}
                <div className="navigation">
                    <ul className="menu">
                        {
                            nav_links.map(item => (
                                
                                <li className="nav__item">
                                    <a href={item.path}>
                                        {item.display}
                                    </a>
                                </li>
                            )
        
                            )
                        }

                    </ul>
                </div>


            {/*______nav right_____________ */}
            <div className="nav_right">
                <button className="register__btn">Register</button>
                <span className="mobile__menu"><i class="ri-menu-line"></i></span>
            </div>

                </div>
        </div>
    </header>
}
export default Header