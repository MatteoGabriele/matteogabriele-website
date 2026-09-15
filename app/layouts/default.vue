<script setup lang="ts">
const route = useRoute()
const showMainNav = computed<boolean>(() => {
  return route.name !== 'index'
})
</script>

<template>
  <main class="mx-auto max-w-screen-sm px-6 py-12">
    <header class="flex items-center justify-between mb-12">
      <NuxtLink to="/">
        <h1>Matteo Gabriele</h1>
      </NuxtLink>

      <nav v-if="showMainNav">
        <ul class="flex items-center gap-2">
          <li>
            <NuxtLink
              class="text-sm text-mg-muted hover:text-mg-accent underline"
              to="/"
            >
              home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="text-sm text-mg-muted hover:text-mg-accent underline"
              to="/writing"
            >
              writing
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <slot />
  </main>
</template>
