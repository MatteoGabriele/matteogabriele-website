<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  item: Collections['writing']
}>()
</script>

<template>
  <li
    class="group border-b border-mg-border-light/60 py-2.5 flex gap-6 items-center justify-between text-sm"
  >
    <div>
      <NuxtLink :to="item.path" class="underline hover:text-mg-accent">
        {{ item.title }}
      </NuxtLink>
      <p class="text-mg-muted">
        {{ item.description }}
      </p>
    </div>

    <NuxtTime
      class="text-xs shrink-0"
      :title="item.date"
      :datetime="item.date"
      relative
    />
  </li>
</template>
