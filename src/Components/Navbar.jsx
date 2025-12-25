import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [active, setActive] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({
        selfPaced: false,
        liveCourses: false,
        practice: false,
        resources: false
    });
    const [subDropdownOpen, setSubDropdownOpen] = useState({});
    const navbarRef = useRef(null);

    // /* -------------------- HAMBURGER TOGGLE -------------------- */
    // const handleShowNavbar = () => {
    //     setShowNavbar(prev => !prev);
    // };

    // /* -------------------- SCROLL → ADD ACTIVE CLASS -------------------- */
    // useEffect(() => {
    //     const onScroll = () => {
    //         if (window.scrollY > 20) {
    //             setActive(true);
    //         } else {
    //             setActive(false);
    //         }
    //     };

    //     window.addEventListener('scroll', onScroll, { passive: true });

    //     return () => {
    //         window.removeEventListener('scroll', onScroll);
    //     };
    // }, []);

    // /* -------------------- LOCK BODY SCROLL WHEN MENU OPEN -------------------- */
    // useEffect(() => {
    //     if (showNavbar) {
    //         document.body.style.overflowY = 'hidden';
    //         document.documentElement.style.overflowY = 'hidden';
    //     } else {
    //         document.body.style.overflowY = '';
    //         document.documentElement.style.overflowY = '';
    //     }

    //     return () => {
    //         document.body.style.overflowY = '';
    //         document.documentElement.style.overflowY = '';
    //     };
    // }, [showNavbar]);

    /* -------------------- DROPDOWNS -------------------- */
    const toggleDropdown = (key, e) => {
        e.stopPropagation();
        setDropdownOpen(prev => {
            const state = {};
            Object.keys(prev).forEach(k => {
                state[k] = k === key ? !prev[k] : false;
            });
            return state;
        });
        setSubDropdownOpen({});
    };

    const toggleSubDropdown = (key, e) => {
        e.stopPropagation();
        setSubDropdownOpen(prev => ({
            [key]: !prev[key]
        }));
    };

    const handleItemClick = () => {
        setSubDropdownOpen({});
        setShowNavbar(false);
    };

    return (
        <nav className="v-navbar flex-column w-100 bg-white" ref={navbarRef}>
            {/* TOP BANNER */}
            <div className="bg-c1 text-white py-1 d-flex align-items-center">
                <div className="w-100">
                    <p className="mb-0 text-center py-1">
                        New batch offer live. Start your IT journey now.
                    </p>
                </div>
            </div>

            {/* MAIN NAV */}
            <div className={`navbar_links ${active ? 'active' : ''}`}>
                <div className="section_container">
                    <div className="nav_parent py-1">

                        {/* HAMBURGER */}
                        {/* <div className="menu-icon" onClick={handleShowNavbar}> */}
                        <div className="menu-icon">
                            <Hamburger isOpen={showNavbar} />
                        </div>

                        {/* LOGO */}
                        <NavLink to="/" onClick={() => setShowNavbar(false)}>
                            <div className="logo">
                                <div className="logo_img"></div>
                            </div>
                        </NavLink>

                        {/* NAV LINKS */}
                        <div className={`nav-elements ${showNavbar ? 'active' : ''}`}>
                            <ul className="mb-0 p-lg-0">

                                {/* SELF PACED */}
                                <li
                                    className={`dropdown ${dropdownOpen.selfPaced ? 'open' : ''}`}
                                    onClick={(e) => toggleDropdown('selfPaced', e)}
                                >
                                    <span className="dropdown-toggle">
                                        Self-paced Courses <i className="bi bi-chevron-down"></i>
                                    </span>
                                    <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
                                        <li className="sub-dropdown">
                                            <span
                                                className="sub-dropdown-toggle"
                                                onClick={(e) => toggleSubDropdown('group1', e)}
                                            >
                                                Menu Group 1 <i className="bi bi-chevron-right"></i>
                                            </span>
                                            <ul className={`sub-dropdown-menu ${subDropdownOpen.group1 ? 'open' : ''}`}>
                                                <li><NavLink to="/practice/ide" onClick={handleItemClick}>Online IDE</NavLink></li>
                                                <li><NavLink to="/practice/debugging" onClick={handleItemClick}>Debugging</NavLink></li>
                                            </ul>
                                        </li>

                                        <li className="sub-dropdown">
                                            <span
                                                className="sub-dropdown-toggle"
                                                onClick={(e) => toggleSubDropdown('group2', e)}
                                            >
                                                Menu Group 2 <i className="bi bi-chevron-right"></i>
                                            </span>
                                            <ul className={`sub-dropdown-menu ${subDropdownOpen.group2 ? 'open' : ''}`}>
                                                <li><NavLink to="/practice/challenges" onClick={handleItemClick}>Challenges</NavLink></li>
                                                <li><NavLink to="/practice/projects" onClick={handleItemClick}>Projects</NavLink></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                {/* LIVE COURSES */}
                                <li
                                    className={`dropdown ${dropdownOpen.liveCourses ? 'open' : ''}`}
                                    onClick={(e) => toggleDropdown('liveCourses', e)}
                                >
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

                                {/* PRACTICE */}
                                <li
                                    className={`dropdown ${dropdownOpen.practice ? 'open' : ''}`}
                                    onClick={(e) => toggleDropdown('practice', e)}
                                >
                                    <span className="dropdown-toggle">
                                        Practice <i className="bi bi-chevron-down"></i>
                                    </span>
                                    <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
                                        <li><NavLink to="/practice/ide" onClick={handleItemClick}>Online IDE</NavLink></li>
                                        <li><NavLink to="/practice/debugging" onClick={handleItemClick}>Debugging</NavLink></li>
                                        <li><NavLink to="/practice/challenges" onClick={handleItemClick}>Challenges</NavLink></li>
                                    </ul>
                                </li>

                                {/* RESOURCES */}
                                <li
                                    className={`dropdown ${dropdownOpen.resources ? 'open' : ''}`}
                                    onClick={(e) => toggleDropdown('resources', e)}
                                >
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

                        {/* RIGHT ICONS */}
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
                                <span> <Link to="/signup" className="btn_signup">Sign Up</Link> </span>
                            </div>
                            <div className='d-flex d-lg-none nav_mbl_icons'>
                                <div className='pe-3 d-flex align-items-center'>
                                    <i className="bi bi-search"></i>
                                </div>
                                <span> <Link to="/login" className="btn_login">Login</Link> </span>
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
    <>
        <svg width="52" height="24" viewBox="0 0 52 24" className={isOpen ? 'd-none' : 'd-block'}>
            <rect width="30" height="2" rx="2" x="10" y="2" fill="#574c4c" />
            <rect width="40" height="2" rx="2" x="1" y="11" fill="#574c4c" />
            <rect width="30" height="2" rx="2" x="10" y="20" fill="#574c4c" />
        </svg>

        <svg width="24" height="24" viewBox="0 0 24 24" className={isOpen ? 'd-block' : 'd-none'}>
            <line x1="0" y1="0" x2="24" y2="24" stroke="#574c4c" strokeWidth="2" />
            <line x1="24" y1="0" x2="0" y2="24" stroke="#574c4c" strokeWidth="2" />
        </svg>
    </>
);

export default Navbar;
