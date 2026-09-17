export function useArticles() {
  return useAsyncData('blog-list', () => {
    return queryCollection('writing').order('date', 'DESC').all()
  })
}

export function useArticle(path: MaybeRefOrGetter<string>) {
  return useAsyncData(`blog-item-${toValue(path)}`, () => {
    return queryCollection('writing').path(toValue(path)).first()
  })
}
