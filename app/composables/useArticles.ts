export function useArticles() {
  return useAsyncData('articles', () => {
    return $fetch('/api/articles')
  })
}
