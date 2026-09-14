<script setup lang="ts">
const { data } = await useOpenSourceProjects()
</script>

<template>
  <section class="flex flex-col gap-2 text-pretty">
    <header class="mb-2">
      <h2 class="uppercase font-mono text-xs">Open Source</h2>
    </header>
    <ul class="flex flex-col">
      <OpenSourceListItem v-for="project in data" :item="project" />
    </ul>
  </section>
</template>
