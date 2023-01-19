import React, { useState }  from 'react'
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import '../Styles/sidebarstyle.css'

export default function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    // const [conatctMenu, setContact] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    // const showContact = () => setContact(!conatctMenu);

    const SidebarData = [
        {
          title: 'Home',
          path: '/',
          cName: 'nav-text'
        },
        {
          title: 'Portfolio Companies',
          path: '/portfolio',
          cName: 'nav-text'
        },
        {
          title: 'Investment Thesis',
          path: '/investment',
          cName: 'nav-text'
        },
        {
          title: 'Z21 Community',
          path: '/community',
          cName: 'nav-text'
        },
        {
          title: 'Our Team',
          path: '/ourteam',
          cName: 'nav-text'
        },
        {
          title: 'Z21 blog',
          path: '/article',
          cName: 'nav-text'
        },
        {
            title: 'Contact us',
            path: '/contactus',
            cName: 'nav-text'
        }
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
              {/* <Link to="#">
                <ContactUs onClick={showContact}/>
              </Link> */}
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <div className='navbar-toggle'>
              <Link to='#' className='menu-bars' onClick={showSidebar}>
                <AiIcons.AiOutlineClose style={{color: "black"}} />
              </Link>
            </div>
          <ul className='nav-menu-items' onClick={showSidebar}>   
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
