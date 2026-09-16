import { Octokit } from 'octokit'

type Project = {
  owner: string
  repo: string
}

const projects: Project[] = [
  { owner: 'MatteoGabriele', repo: 'agentscan' },
  { owner: 'MatteoGabriele', repo: 'agentscan-action' },
  { owner: 'unveil-project', repo: 'identity' },
  { owner: 'unveil-project', repo: 'vk' },
  { owner: 'MatteoGabriele', repo: 'vue-gtag' },
  { owner: 'MatteoGabriele', repo: 'vue-progressive-image' },
  { owner: 'MatteoGabriele', repo: 'vue-analytics' },
]

export default defineEventHandler(async () => {
  const octokit = new Octokit()
  const repos: OpenSourceProjectItem[] = []

  try {
    for (const { owner, repo } of projects) {
      const { data } = await octokit.rest.repos.get({ owner, repo })

      repos.push({
        title: data.name,
        stars: data.stargazers_count,
        description: data.description,
        href: data.html_url,
      })
    }

    return repos
  } catch (error) {
    throw createError({
      status: 404,
      statusMessage: 'Repo not found',
    })
  }
})
