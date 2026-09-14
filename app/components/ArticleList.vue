<script setup lang="ts">
const { data } = await useArticles()
</script>

<template>
  <section v-if="data?.length" class="flex flex-col gap-2 text-pretty">
    <header class="mb-2">
      <h2 class="uppercase font-mono text-xs">Writing</h2>
    </header>
    <ul class="flex flex-col">
      <ArticleListItem v-for="article in data" :item="article" />
    </ul>
  </section>
</template>
