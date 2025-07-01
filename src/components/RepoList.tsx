import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRepos } from '../api/github';

const RepoList: React.FC = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRepos()
      .then(setRepos)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!repos.length) return <p>Loading...</p>;

  return (
    <ul className="space-y-3">
      {repos.map((repo) => (
        <li key={repo.id} className="border p-3 rounded hover:bg-gray-100">
          <Link to={`/repo/${repo.name}`} className="text-lg font-medium text-blue-600">
            {repo.name}
          </Link>
          <p className="text-sm text-gray-700">{repo.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default RepoList;