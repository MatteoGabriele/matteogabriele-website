export function useOpenSourceProjects() {
  return useAsyncData('opensource-projects', () => {
    return $fetch<OpenSourceProjectItem[]>('/api/github/projects')
  })
}
