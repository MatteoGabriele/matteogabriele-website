<script setup lang="ts">
defineProps<{
  item: OpenSourceProjectItem
}>()
</script>

<template>
  <li
    class="group border-b border-mg-border-light/60 py-2.5 flex gap-6 items-center justify-between text-sm"
  >
    <div class="min-w-0">
      <NuxtLink
        :href="item.href"
        class="block truncate underline hover:text-mg-accent"
      >
        {{ item.title }}
      </NuxtLink>
      <p class="min-h-5 truncate text-mg-muted">
        {{ item.description }}
      </p>
    </div>

    <p class="flex items-center shrink-0 text-xs line-height-none gap-1">
      <span>{{ item.stars }}</span>
      <span class="i-lucide:star text-mg-muted"></span>
    </p>
  </li>
</template>
