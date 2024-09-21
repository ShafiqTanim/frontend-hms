import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header(){
    const activeMenu=(e)=>{
        document.querySelectorAll('.submenu').forEach(
            function(e){
                e.classList.remove('active');
            }
        )
        const childElement = e.target.parentElement.querySelector('.submenu');
        if(childElement && childElement.classList.contains('submenu')){
            childElement.classList.add('active');
        }
    }

	const location = useLocation();
	const isLinkActive = (path)=>{
        return location.pathname == path ? 'active' : "";
    }
    return(
        <nav className="untree_co--site-nav js-sticky-nav">
                <div className="container d-flex align-items-center">
                    <div className="logo-wrap">
                    <Link to={"/"} className="untree_co--site-logo">LuxuryHotel</Link>
                    </div>
                    <div className="site-nav-ul-wrap text-center d-none d-lg-block">
                    <ul className="site-nav-ul js-clone-nav">
                        {/* <li className="active"><Link to={"/"}>Home</Link></li> */}
                        <li onClick={activeMenu} className={`sidebar-item has-children active ${isLinkActive("/")}`}>
						<Link to={"/"} className={`sidebar-link`}>Home</Link>
					    </li>
                        <li  className="has-children">
                        <Link to={"/room"}>Rooms</Link>
                        <ul className="dropdown">
                            <li className="has-children">
                            <a href="#">King Bedroom</a>
                            <ul className="dropdown">
                                <li>
                                <a href="#">King Bedroom</a>
                                </li>
                                <li>
                                <a href="#">Queen &amp; Double Bedroom</a>
                                </li>
                                <li>
                                <a href="#">Le Voila Suite</a>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <a href="#">Queen &amp; Double Bedroom</a>
                            </li>
                            <li>
                            <a href="#">Le Voila Suite</a>
                            </li>
                        </ul>
                        </li>
                        <li><a href="amenities.html">Amenities</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="about.html">About Us</a></li>
                        {/* <li><a href="contact.html">Contact</a></li> */}
                        <li> <Link to={"/contact"}>Contact</Link></li>
                       
                    </ul>
                    </div>
                    <div className="icons-wrap text-md-right">

                    <ul className="icons-top d-none d-lg-block">
                        <li className="mr-4">
                        <a href="#" className="js-search-toggle"><span className="icon-search2"></span></a>
                        </li>
                        <li>
                        <a href="#"><span className="icon-facebook"></span></a>
                        </li>
                        <li>
                        <a href="#"><span className="icon-twitter"></span></a>
                        </li>
                        <li>
                        <a href="#"><span className="icon-instagram"></span></a>
                        </li>
                    </ul>

                    {/* Mobile Toggle */}
                    <a href="#" className="d-block d-lg-none burger js-menu-toggle" data-toggle="collapse" data-target="#main-navbar">
                        <span></span>
                    </a>
                    </div>
                </div>
                {/* Search */}
                    
            </nav>
    )
}

export default Header;