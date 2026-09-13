<script setup lang="ts">
const articles: ArticleItem[] = [
  {
    title: "The build step you didn't need",
    createdAt: '2026-09-13T08:14:32.000Z',
    to: '/',
  },
  {
    title: 'Types are a conversation with your future self',
    createdAt: '2026-08-28T16:42:07.000Z',
    to: '/',
  },
  {
    title: 'Maintaining a library nobody thanks you for',
    createdAt: '2026-07-10T11:05:48.000Z',
    to: '/',
  },
]
</script>

<template>
  <main class="mx-auto max-w-screen-sm p-6">
    <header>
      <h1 class="mb-6">Matteo Gabriele</h1>
      <div class="flex items-center gap-4">
        <NuxtLink
          external
          href="https://github.com/MatteoGabriele"
          target="_blank"
          class="size-12 overflow-hidden rounded-full filter-saturate-0 hover:filter-saturate-100"
        >
          <img
            src="~/assets/images/avatar.jpeg"
            alt="Matteo Gabriele's avatar is a weird version of an overweight Super Mario riding a T-rex."
            draggable="false"
          />
        </NuxtLink>

        <div class="text-sm text-mg-muted">
          <p>Software developer</p>
          <p class="font-200">Frontend tooling and open source</p>
        </div>
      </div>
    </header>

    <section class="text-sm flex flex-col gap-2 text-pretty mt-6 mb-12">
      <p>
        Passionate about software development, open source, and the people
        behind it.
      </p>
      <p>
        These days you'll find me conjuring CI workflows, building libraries,
        and helping open source communities deal with AI spam.
      </p>
      <p>In my spare time I spam the internet with GIFs.</p>
    </section>

    <div class="flex flex-col gap-12 mt-8">
      <section class="flex flex-col gap-2 text-pretty">
        <header class="mb-2">
          <h2 class="uppercase font-mono text-xs">Writing</h2>
        </header>
        <ul class="flex flex-col font-200 text-sm">
          <ArticleListItem v-for="article in articles" :item="article" />
        </ul>
      </section>
    </div>
  </main>
</template>
