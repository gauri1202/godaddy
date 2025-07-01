export async function fetchRepos() {
  const res = await fetch('https://api.github.com/orgs/godaddy/repos');
  if (!res.ok) throw new Error('Failed to fetch repositories');
  return res.json();
}

export async function fetchRepoDetails(name: string) {
  const res = await fetch(`https://api.github.com/repos/godaddy/${name}`);
  if (!res.ok) throw new Error('Failed to fetch repository details');
  return res.json();
}