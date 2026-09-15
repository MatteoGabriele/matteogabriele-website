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
</script>

<template>
  <section v-if="items?.length" class="flex flex-col gap-2 text-pretty">
    <header>
      <h2 class="uppercase font-mono text-xs">
        Writing
        <span class="text-mg-muted" v-if="items.length > 1">{{
          items.length
        }}</span>
      </h2>
    </header>
    <ul class="flex flex-col">
      <ArticleListItem v-for="item in items" :item="item" />
    </ul>
    <div v-if="max !== undefined">
      <NuxtLink
        class="text-sm text-mg-muted underline hover:text-mg-accent"
        to="/writing"
        >See all articles</NuxtLink
      >
    </div>
  </section>
</template>
