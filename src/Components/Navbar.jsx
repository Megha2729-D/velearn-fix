import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({});
    const [subDropdownOpen, setSubDropdownOpen] = useState({});

    /* -------------------- SCROLL SHADOW ONLY -------------------- */
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* -------------------- BODY SCROLL LOCK (SAFE) -------------------- */
    useEffect(() => {
        document.body.classList.toggle('menu-open', showNavbar);
        return () => document.body.classList.remove('menu-open');
    }, [showNavbar]);

    /* -------------------- DROPDOWNS -------------------- */
    const toggleDropdown = (key) => {
        setDropdownOpen(prev => ({
            [key]: !prev[key]
        }));
        setSubDropdownOpen({});
    };

    const toggleSubDropdown = (key) => {
        setSubDropdownOpen(prev => ({
            [key]: !prev[key]
        }));
    };

    const closeMenu = () => {
        setShowNavbar(false);
        setDropdownOpen({});
        setSubDropdownOpen({});
    };

    return (
        <nav className={`v-navbar ${scrolled ? 'scrolled' : ''}`}>
            {/* TOP BANNER */}
            <div className="top-banner">
                <p className='mb-0 py-1'>New batch offer live. Start your IT journey now.</p>
            </div>

            {/* MAIN NAV */}
            <div className="navbar_links">
                <div className="section_container">
                    <div className="nav_parent">

                        {/* HAMBURGER */}
                        <div className="menu-icon" onClick={() => setShowNavbar(!showNavbar)}>
                            <Hamburger isOpen={showNavbar} />
                        </div>

                        {/* LOGO */}
                        <NavLink to="/" onClick={closeMenu} className="logo">
                            <div className="logo_img" />
                        </NavLink>

                        {/* NAV LINKS */}
                        <div className={`nav-elements ${showNavbar ? 'active' : ''}`}>
                            <ul>
                                <li onClick={() => toggleDropdown('self')}>
                                    Self-paced Courses
                                </li>
                                <li onClick={() => toggleDropdown('live')}>
                                    Live Courses
                                </li>
                                <li onClick={() => toggleDropdown('practice')}>
                                    Practice
                                </li>
                                <li onClick={() => toggleDropdown('resources')}>
                                    Resources
                                </li>
                            </ul>
                        </div>

                        {/* RIGHT */}
                        <div className="d-flex gap-4 right_nav_icons">

                            {/* DESKTOP SEARCH */}
                            <div className="d-lg-flex d-none align-items-center">
                                <div className="search_parent position-relative">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-search"></i>
                                        <input
                                            type="search"
                                            placeholder="Search"
                                            className="nav_search_input"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* DESKTOP LOGIN / SIGNUP */}
                            <div className="d-lg-flex d-none gap-2 align-items-center">
                                <Link to="/login" className="btn_login">Login</Link>
                                <Link to="/signup" className="btn_signup">Sign Up</Link>
                            </div>

                            {/* MOBILE ICONS */}
                            <div className="d-flex d-lg-none align-items-center nav_mbl_icons">
                                <button className="mbl_search_btn">
                                    <i className="bi bi-search"></i>
                                </button>

                                <Link to="/login" className="btn_login ms-2">
                                    Login
                                </Link>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </nav>
    );
};

/* -------------------- HAMBURGER -------------------- */
const Hamburger = ({ isOpen }) => (
    <div className={`hamburger ${isOpen ? 'open' : ''}`}>
        <span />
        <span />
        <span />
    </div>
);

export default Navbar;
