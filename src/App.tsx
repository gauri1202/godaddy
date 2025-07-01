import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RepoList from './components/RepoList';
import RepoDetails from './components/RepoDetails';

function App() {
  return (
    <div className="p-4 font-sans">
      <h1 className="text-2xl font-bold mb-4">
        <Link to="/">GoDaddy GitHub Repositories</Link>
      </h1>
      <Routes>
        <Route path="/" element={<RepoList />} />
        <Route path="/repo/:name" element={<RepoDetails />} />
      </Routes>
    </div>
  );
}

export default App;