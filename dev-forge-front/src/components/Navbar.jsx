import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SearchBar from './SearchBar';

const Navbar = () => {

    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (query) => {
        // Dummy search logic, replace with actual search implementation
        const results = [];  // Perform your search here and populate the results

        setSearchResults(results);
    };

    return (
        <nav className='navbar'>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/learning-Path">Learning Path</Link></li>
                <li><Link to="/project">Projects</Link></li>
                <li><Link to="/challenge">Challenge</Link></li>

                <li><Link to="/contact">Contact Me</Link></li>

            </ul>

            <SearchBar onSearch={handleSearch}></SearchBar>
        </nav>

    );
};

export default Navbar;