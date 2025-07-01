import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRepoDetails } from '../api/github';

const RepoDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [repo, setRepo] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (name)
      fetchRepoDetails(name)
        .then(setRepo)
        .catch((err) => setError(err.message));
  }, [name]);

  if (error) return <p>Error: {error}</p>;
  if (!repo) return <p>Loading...</p>;

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold">{repo.name}</h2>
      <p>{repo.description}</p>
      <p><strong>Language:</strong> {repo.language}</p>
      <p><strong>Forks:</strong> {repo.forks_count}</p>
      <p><strong>Open Issues:</strong> {repo.open_issues_count}</p>
      <p><strong>Watchers:</strong> {repo.watchers_count}</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-blue-600 underline">
        View on GitHub
      </a>
    </div>
  );
};

export default RepoDetails;