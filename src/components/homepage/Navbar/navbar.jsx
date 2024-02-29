import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import squarefeet from './navbar images/21SQFT B 1.png'
import profile from './navbar images/Frame 6.png'
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
                setIsBurgerOpen(false); // Close the burger menu when clicked outside
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // const [barclose, setBarClose] = useState('')
    const [searchText, setSearchText] = useState('');
    const [filteredKeywords, setFilteredKeywords] = useState([]);
    // const closeSideBar = () => {
    // setBarClose('false')
    // }
    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setIsBurgerOpen(!isBurgerOpen);  // Toggle menu visibility
    };
    const closeMenu = () => {
        setShowMenu(false);
        setIsBurgerOpen(false); // Close the burger menu
    };

    // function PopSearch() {
    const availableKeywords = [
        'HTML', 'CSS', 'JavaScript', 'ReactJS', 'Node.js',
        'Where to learn coding online', 'where to learn web design', 'How to create a website', 'Noida', 'Gaziabad', 'New Delhi'
    ];

    // const [filteredKeywords, setFilteredKeywords] = useState([]);
    const handleInputChange = (event) => {
        const input = event.target.value.toLowerCase();
        const filtered = availableKeywords.filter(keyword =>
            keyword.toLowerCase().includes(input)
        );
        setFilteredKeywords(filtered);
        setSearchText(input);
    };
    const handleKeywordClick = (keyword) => {
        setSearchText(keyword);
        setFilteredKeywords([]);
    };

    return (
        <div>
            <div className={`navbar h-nav-resp ${showMenu ? 'show-menu' : ''}`} ref={menuRef}>
                <div className='div-1'>
                    <Link className='navbar-link-color' to='/'><img className='squarefeet' src={squarefeet} alt=""></img></Link>
                </div>
                <div className="search-box">
                    <div className="row">
                        <input className='search-nav-search' type="text" id="input-box" value={searchText} onChange={handleInputChange}
                            placeholder="Search Keywords" autocomplete="off" />
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <div className="result-box">
                        <ul>
                            {filteredKeywords.map((keyword, index) => (
                                <li key={index} onClick={() => handleKeywordClick(keyword)}>{keyword}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='div-2'>
                    <div className='sidebar-slide'>
                        <ul className={`navbar-ul v-class-resp ${showMenu ? 'show-menu' : ''}`}>
                            <li><Link className='navbar-link-color' to="/" onClick={closeMenu}>Home</Link></li>
                            <li><Link className='navbar-link-color' to="/category" onClick={closeMenu}>Categories</Link></li>
                            <li><Link className='navbar-link-color' to="/blog" onClick={closeMenu}>Blog</Link></li>
                            <li><Link className='navbar-link-color' to="/contact" onClick={closeMenu}>Contact Us</Link></li>
                        </ul>
                    </div>
                    {/* <input className='navbar-search' type='text' placeholder='search here'></input> */}

                    <button className='nav-btn'><Link className='navbar-link-color-register' to="/login">Register</Link></button>
                    <Link className='footer-link-color' to="/profilesupplier"><img className='navbar-profile' src={profile} alt=''></img></Link>
                </div>
                <div className={`burger ${isBurgerOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

        </div>
    )
}
export default Navbar;
