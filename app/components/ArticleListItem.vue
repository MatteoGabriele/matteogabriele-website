<script setup lang="ts">
defineProps<{
  item: ArticleItem
}>()
</script>

<template>
  <li
    class="group border-b border-mg-border-light/60 py-2.5 flex gap-6 items-center justify-between text-sm"
  >
    <div>
      <NuxtLink :to="item.to" class="underline hover:text-mg-accent">
        {{ item.title }}
      </NuxtLink>
      <p class="text-mg-muted">
        {{ item.excerpt }}
      </p>
    </div>

    <NuxtTime
      class="text-xs shrink-0"
      :title="item.createdAt"
      :datetime="item.createdAt"
      relative
    />
  </li>
</template>
