import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';



const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        onSearch(query);
        navigate('/search');
    };


    return (
        <div className="search-bar">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for Challenges, projects, paths..."
            >
            </input>
            <button onClick={handleSearch}>Search</button>
        </div>
    );

};

export default SearchBar;