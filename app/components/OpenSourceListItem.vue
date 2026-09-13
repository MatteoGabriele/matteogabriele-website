<script setup lang="ts">
defineProps<{
  item: OpenSourceProjectItem
}>()
</script>

<template>
  <li
    class="group border-b border-mg-border-light/60 py-2.5 flex gap-6 items-center justify-between"
  >
    <div>
      <NuxtLink
        :href="item.href"
        class="group-hover:underline group-hover:text-mg-accent"
      >
        {{ item.title }}
      </NuxtLink>
      <p class="text-xs text-mg-muted">
        {{ item.excerpt }}
      </p>
    </div>

    <p class="text-xs flex items-center shrink-0 gap-1">
      <span class="i-lucide:star"></span>
      <span>{{ item.stars }}</span>
    </p>
  </li>
</template>
