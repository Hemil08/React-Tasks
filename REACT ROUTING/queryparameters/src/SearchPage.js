import React from 'react'
import { useLocation } from 'react-router-dom';

const SearchPage = () => {

    const location = useLocation();
    const SearchParams = new URLSearchParams(location.search);
    const query = SearchParams.get('query');    

  return (
    <div>
        <h1>Search Results</h1>
        {
            query ? (
                <p>You searched for: <strong>{query}</strong></p>
            ):(
                <p>No search queruy provided.</p>
            )
        }
    </div>
  )
}

export default SearchPage