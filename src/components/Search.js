import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // This would typically come from your content management system
  const searchContent = [
    { title: 'Components', path: '/components', description: 'Learn about React components and their usage' },
    { title: 'Props', path: '/props', description: 'Understanding props and data flow in React' },
    { title: 'State', path: '/state', description: 'Managing component state in React' },
    { title: 'Hooks', path: '/hooks', description: 'Using React Hooks for state and side effects' },
    { title: 'Context', path: '/context', description: 'Sharing data between components with Context' },
    { title: 'TypeScript', path: '/typescript', description: 'Using TypeScript with React' },
    { title: 'Testing', path: '/testing', description: 'Testing React components' },
    { title: 'Performance', path: '/performance', description: 'Optimizing React performance' },
    { title: 'Deployment', path: '/deployment', description: 'Deploying React applications' },
  ];

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const searchResults = searchContent.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );

    setResults(searchResults);
  }, [query]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setIsOpen(true);
  };

  const handleResultClick = (path) => {
    navigate(path);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search tutorials..."
        className="search-input"
      />
      {isOpen && results.length > 0 && (
        <div className="search-results">
          {results.map((result, index) => (
            <div
              key={index}
              className="search-result-item"
              onClick={() => handleResultClick(result.path)}
            >
              <h4>{result.title}</h4>
              <p>{result.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search; 