<script setup lang="ts">
const props = defineProps<{
  max?: number
}>()

const { data } = await useArticles()
const items = computed(() => {
  if (props.max) {
    return data.value?.slice(0, props.max)
  }

  return data.value
})

const remainingArticlesCount = computed<number | null>(() => {
  if (!data.value || !items.value) {
    return null
  }

  return data.value.length - items.value.length
})
</script>

<template>
  <section v-if="items?.length" class="flex flex-col gap-2 text-pretty">
    <header>
      <h2 class="uppercase font-mono text-xs">Writing</h2>
    </header>
    <ul class="flex flex-col">
      <ArticleListItem v-for="item in items" :item="item" />
    </ul>
    <div v-if="max !== undefined">
      <NuxtLink
        class="text-sm text-mg-muted underline hover:text-mg-accent"
        to="/writing"
        >See
        <span v-if="data && data.length > 1">
          {{ remainingArticlesCount }}
        </span>
        more article{{ remainingArticlesCount === 1 ? '' : 's' }}</NuxtLink
      >
    </div>
  </section>
</template>
