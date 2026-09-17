import { Octokit } from 'octokit'

const oss: string[] = [
  'MatteoGabriele/agentscan',
  'MatteoGabriele/agentscan-action',
  'unveil-project/identity',
  'unveil-project/vk',
  'MatteoGabriele/vue-gtag',
  'MatteoGabriele/vue-progressive-image',
]

export default defineCachedEventHandler(
  async () => {
    const octokit = new Octokit()
    const repos: OpenSourceProjectItem[] = []

    try {
      for (const project of oss) {
        const [owner, repo] = project.split('/')

        if (!repo || !owner) {
          continue
        }

        const { data } = await octokit.rest.repos.get({ owner, repo })

        repos.push({
          title: data.full_name,
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
  },
  {
    name: 'github-projects',
    maxAge: 60 * 60 * 24 * 7,
    swr: true,
    staleMaxAge: -1,
  },
)
