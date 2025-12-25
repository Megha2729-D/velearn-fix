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
    const handleItemClick = () => {
        // close sub-dropdowns when clicking a link
        setSubDropdownOpen({});
    };
    return (
        <nav className={`v-navbar ${scrolled ? 'scrolled' : ''}`}>
            {/* TOP BANNER */}
            <div className="top-banner">
                <div className="bg-c1 text-white py-1 d-flex align-items-center overflow-hidden">
                    <div className="w-100">
                        <p className='mb-0 text-center py-1'> New batch offer live. Start your IT journey now.</p>
                    </div>
                </div>
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
                            <ul className="mb-0 p-lg-0">

                                {/* Self-paced Courses */}
                                <li className={`dropdown ${dropdownOpen.selfPaced ? "open" : ""}`}
                                    onClick={(e) => toggleDropdown('selfPaced', e)}>
                                    <span className="dropdown-toggle">
                                        Self-paced Courses <i className="bi bi-chevron-down"></i>
                                    </span>
                                    <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
                                        <li className="sub-dropdown">
                                            <span className="sub-dropdown-toggle"
                                                onClick={(e) => toggleSubDropdown('group1', e)}>
                                                Menu Group 1 <i className="bi bi-chevron-right"></i>
                                            </span>
                                            <ul className={`sub-dropdown-menu ${subDropdownOpen.group1 ? 'open' : ''}`}>
                                                <li><NavLink to="/practice/ide" onClick={handleItemClick}>Online IDE</NavLink></li>
                                                <li><NavLink to="/practice/debugging" onClick={handleItemClick}>Debugging</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className="sub-dropdown">
                                            <span className="sub-dropdown-toggle"
                                                onClick={(e) => toggleSubDropdown('group2', e)}>
                                                Menu Group 2 <i className="bi bi-chevron-right"></i>
                                            </span>
                                            <ul className={`sub-dropdown-menu ${subDropdownOpen.group2 ? 'open' : ''}`}>
                                                <li><NavLink to="/practice/challenges" onClick={handleItemClick}>Challenges</NavLink></li>
                                                <li><NavLink to="/practice/projects" onClick={handleItemClick}>Projects</NavLink></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                {/* Live Courses */}
                                <li className={`dropdown ${dropdownOpen.liveCourses ? "open" : ""}`}
                                    onClick={(e) => toggleDropdown('liveCourses', e)}>
                                    <span className="dropdown-toggle">
                                        Live Courses <i className="bi bi-chevron-down"></i>
                                    </span>
                                    <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
                                        <li><NavLink to="/" onClick={handleItemClick}>UI UX Design</NavLink></li>
                                        <li><NavLink to="/" onClick={handleItemClick}>Data Science</NavLink></li>
                                        <li><NavLink to="/" onClick={handleItemClick}>Full Stack Web Development</NavLink></li>
                                        <li><NavLink to="/" onClick={handleItemClick}>Python Full Stack</NavLink></li>
                                    </ul>
                                </li>

                                {/* Practice */}
                                <li className={`dropdown ${dropdownOpen.practice ? "open" : ""}`}
                                    onClick={(e) => toggleDropdown('practice', e)}>
                                    <span className="dropdown-toggle">
                                        Practice <i className="bi bi-chevron-down"></i>
                                    </span>
                                    <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
                                        <li><NavLink to="/practice/ide" onClick={handleItemClick}>Online IDE</NavLink></li>
                                        <li><NavLink to="/practice/debugging" onClick={handleItemClick}>Debugging</NavLink></li>
                                        <li><NavLink to="/practice/challenges" onClick={handleItemClick}>Challenges</NavLink></li>
                                    </ul>
                                </li>

                                {/* Resources */}
                                <li className={`dropdown ${dropdownOpen.resources ? "open" : ""}`}
                                    onClick={(e) => toggleDropdown('resources', e)}>
                                    <span className="dropdown-toggle">
                                        Resources <i className="bi bi-chevron-down"></i>
                                    </span>
                                    <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
                                        <li><NavLink to="/resources/blogs" onClick={handleItemClick}>Blogs</NavLink></li>
                                        <li><NavLink to="/resources/docs" onClick={handleItemClick}>Docs</NavLink></li>
                                        <li><NavLink to="/resources/tools" onClick={handleItemClick}>Tools</NavLink></li>
                                    </ul>
                                </li>

                            </ul>
                        </div>

                        {/* RIGHT */}
                        <div className="d-flex gap-4 right_nav_icons">
                            <div className="d-lg-flex d-none align-items-center">
                                <div className="search_parent position-relative">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-search"></i>
                                        <input type="search" placeholder="Search" />
                                    </div>
                                </div>
                            </div>

                            <div className="d-lg-flex d-none gap-2 text-white">
                                <span className="d-none d-lg-block">
                                    <Link to="/login" className="btn_login">Login</Link>
                                </span>
                                <span className="d-none d-lg-block">|</span>
                                <span>
                                    <Link to="/signup" className="btn_signup">Sign Up</Link>
                                </span>
                            </div>
                            <div className='d-flex d-lg-none nav_mbl_icons'>
                                <div className='pe-3 d-flex align-items-center'>
                                    <i className="bi bi-search"></i>
                                </div>
                                <span>
                                    <Link to="/login" className="btn_login">Login</Link>
                                </span>
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
