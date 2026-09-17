<script setup lang="ts">
const error = useError()
</script>

<template>
  <section class="p-8 flex items-center justify-center h-screen">
    <div v-if="error?.status === 404">You are lost.</div>
    <div v-else>I don't know what happened!</div>
  </section>
</template>
