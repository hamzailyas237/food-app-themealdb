import React from 'react';
import { useSidebarContext } from '../../context/sidebarContext';
import { ImCancelCircle } from "react-icons/im";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

const links = [
    {
        text: 'Home',
        route: '/',
    },
    {
        text: 'My Favorites',
        route: '/favorites',
    },
    {
        text: 'Meal Generator',
        route: '/random-meal',
    },
]

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useSidebarContext();

    return (
        <nav className={`sidebar ${isSidebarOpen ? 'sidebar-visible' : ""}`}>
            <button type="button" className='navbar-hide-btn' onClick={() => closeSidebar()}>
                <ImCancelCircle size={24} />
            </button>

            <div className='side-content'>
                <ul className='side-nav'>
                    {
                        links.map((link, i) => (
                            <li className='side-item' key={i}>
                                <Link to={link.route} className='side-link ls-1 fs-13' onClick={() => closeSidebar()}>
                                    {link.text}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar