import { Octokit } from 'octokit'

export default defineEventHandler(async () => {
  const octokit = new Octokit()

  const response = await octokit.rest.repos.listForUser({
    username: 'MatteoGabriele',
    per_page: 100,
  })

  return response.data
    .filter((repo) => !repo.fork && (repo.stargazers_count ?? 0) > 50)
    .map((repo) => ({
      title: repo.name,
      stars: repo.stargazers_count,
      excerpt: repo.description,
      href: repo.html_url,
    }))
    .slice(0, 7)
})
