export function useOpenSourceProjects() {
  return useAsyncData('opensource-projects', () => {
    return $fetch('/api/github/projects')
  })
}
