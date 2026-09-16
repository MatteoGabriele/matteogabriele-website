<script setup lang="ts">
const { data } = await useOpenSourceProjects()
</script>

<template>
  <section class="flex flex-col gap-2 text-pretty">
    <header>
      <h2 class="uppercase font-mono text-xs">Open source projects</h2>
    </header>

    <ul class="flex flex-col">
      <OpenSourceListItem
        v-for="project in data"
        :key="project.href"
        :item="project"
      />
    </ul>
  </section>
</template>
