export function useArticles() {
  return useAsyncData('articles', () => {
    return $fetch<ArticleItem[]>('/api/articles')
  })
}
