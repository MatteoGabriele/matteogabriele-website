<script setup lang="ts">
defineProps<{
  item: OpenSourceProjectItem
}>()
</script>

<template>
  <li
    class="group border-b border-mg-border-light/60 py-2.5 flex gap-6 items-center justify-between text-sm"
  >
    <div>
      <NuxtLink
        :href="item.href"
        class="group-hover:underline group-hover:text-mg-accent"
      >
        {{ item.title }}
      </NuxtLink>
      <p class="text-mg-muted">
        {{ item.excerpt }}
      </p>
    </div>

    <p class="flex items-center shrink-0 text-xs line-height-none gap-1">
      <span class="i-lucide:star text-mg-muted"></span>
      <span>{{ item.stars }}</span>
    </p>
  </li>
</template>
