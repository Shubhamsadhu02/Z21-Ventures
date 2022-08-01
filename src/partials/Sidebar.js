import React, { useState }  from 'react'
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import '../Styles/sidebarstyle.css'

export default function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const SidebarData = [
        {
          title: 'Investment Till Now',
          path: '/investment',
          cName: 'nav-text'
        },
        {
            title: 'Our Team',
            path: '/ourteam',
            cName: 'nav-text'
        },
        {
            title: 'Contact us',
            path: '/contactus',
            cName: 'nav-text'
        },
    ];

  return (
    <>
    <section style={{background: "#BE3222"}}>
        <div className="container">
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="logo">
                <a href="/" className="navbar-brand"><img src="/images/ventureslogo.svg" alt='' height="28" width="182" /></a>
            </div>
            <div className="contact-nav">
                <Link to={'/ContactUs'}>Contact us</Link>
            </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose style={{color: "black"}} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
        </div>
    </section>
    
    </>
  )
}
