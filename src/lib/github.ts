export interface RepoStats {
  stars: number
  forks: number
}

export async function getRepoStats(url: string): Promise<RepoStats | null> {
  const match = url.match(/github.com\/(.+?)\/(.+?)(?:\.git)?$/)
  if (!match) return null
  const [, owner, repo] = match
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: { Accept: 'application/vnd.github+json' },
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    const data = await res.json()
    return { stars: data.stargazers_count, forks: data.forks_count }
  } catch {
    return null
  }
}
