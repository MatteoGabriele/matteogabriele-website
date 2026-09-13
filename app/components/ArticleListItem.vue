<script setup lang="ts">
defineProps<{
  item: ArticleItem
}>()
</script>

<template>
  <li
    class="border-b border-mg-border-light/60 py-2.5 flex items-center justify-between"
  >
    <NuxtLink :to="item.to" class="hover:underline hover:text-mg-accent">
      {{ item.title }}
    </NuxtLink>
    <NuxtTime
      class="text-xs"
      :title="item.createdAt"
      :datetime="item.createdAt"
      relative
    />
  </li>
</template>
