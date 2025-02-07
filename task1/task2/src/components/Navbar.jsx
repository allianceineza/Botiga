import React, { useState } from "react";
import '../Styles/navbar.css';
import { LuUserRound } from "react-icons/lu";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import UsestateHook from '../components/UsestateHook.jsx';
import Signin from '../components/Signin.jsx';
import { AiOutlineSearch } from "react-icons/ai"; // For search icon


function Navbar() {
    const [model, setmodel] = useState(false);
    const handleloginform = () => {
        setmodel(true);
    }

    const closeform= () => {
        setmodel(false);
    }


    return (
        <>
            <div className="container">
                {model && <UsestateHook closeform={closeform} />}
                 {/* {model && <Signin closeform={closeform} />} */}
                <div className="logo">botiga</div>
                {/* <li><Link to='/view'>view</Link></li> */}
                <div className="search-container">
                    <select className="category-select">
                        <option>All Categories</option>
                        <option>Electronics</option>
                        <option>Fashion</option>
                        <option>Home & Garden</option>
                    </select>
                </div>
                <div className="search-box">
                    <input type="text" className="search-input" placeholder="Search products..." />
                    <button type="submit">
                        <div className="search-icon">
                            <AiOutlineSearch /> {/* Replaced FontAwesome with react-icon */}
                        </div>
                    </button>
                </div>
                <div className="icons">
                    <div className="user">
                        <LuUserRound onClick={handleloginform} />
                    </div>
                    <div className="notification">
                        <CiShoppingCart />
                    </div>
                    <div className="likes">
                        <IoIosHeartEmpty />
                    </div>
                </div>
            </div>
            <div className="navbar">
                <div className="dropdown">
                    <span>Trending Categories</span> <i className="categories"></i>
                </div>
                <div className="nav-links">
                    <a href="/home">Home</a>
                    <a href="/shop">Shop</a>
                    <Link to="/Vendors">Vendors</Link>
                    <a href="/blog">Blog</a>
                    <Link to="/Contact">Contact</Link>
                </div>
                <div className="contact">
                    <IoCallOutline />
                    800-123-4567
                </div>
            </div>
        </>
    );
}

export default Navbar;
