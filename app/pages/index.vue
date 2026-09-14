<script setup lang="ts">
const writing: ArticleItem[] = [
  {
    title: 'Lorem ipsum dolor sit amet',
    createdAt: '2026-09-13T08:14:32.000Z',
    excerpt:
      'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    to: '/',
  },
  {
    title: 'Ut enim ad minim veniam',
    createdAt: '2026-08-28T16:42:07.000Z',
    excerpt:
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    to: '/',
  },
  {
    title: 'Duis aute irure dolor in reprehenderit',
    createdAt: '2026-07-10T11:05:48.000Z',
    excerpt:
      'In voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.',
    to: '/',
  },
]

const openSourceProjects: OpenSourceProjectItem[] = [
  {
    title: 'lorem-ipsum',
    stars: 97,
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    href: '#',
  },
  {
    title: 'dolor-sit',
    stars: 57,
    excerpt:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    href: '#',
  },
  {
    title: '@lorem/amet',
    stars: 46,
    excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    href: '#',
  },
  {
    title: '@lorem/elit',
    stars: 5,
    excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit',
    href: '#',
  },
  {
    title: 'consectetur',
    stars: 941,
    excerpt: 'Excepteur sint occaecat cupidatat non proident',
    href: '#',
  },
  {
    title: 'adipiscing-elit',
    stars: 721,
    excerpt: 'Sunt in culpa qui officia deserunt mollit anim id est laborum',
    href: '#',
  },
]
</script>

<template>
  <main class="mx-auto max-w-screen-sm px-6 py-12">
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

        <div class="text-sm">
          <p>Software developer</p>
          <p class="font-200">Frontend tooling and open source</p>
        </div>
      </div>
    </header>

    <section
      class="text-sm flex flex-col gap-2 text-pretty mt-6 mb-12 text-mg-text/80"
    >
      <p>
        Passionate about software development, open source, and the people
        behind it.
      </p>
      <p>
        These days you'll find me building libraries and websites, conjuring CI
        workflows, avoiding AI, and helping open source communities deal with
        automation spam.
      </p>
    </section>

    <div class="flex flex-col gap-12 mt-8">
      <section class="flex flex-col gap-2 text-pretty">
        <header class="mb-2">
          <h2 class="uppercase font-mono text-xs">Writing</h2>
        </header>
        <ul class="flex flex-col">
          <ArticleListItem v-for="article in writing" :item="article" />
        </ul>
      </section>

      <section class="flex flex-col gap-2 text-pretty">
        <header class="mb-2">
          <h2 class="uppercase font-mono text-xs">Open Source</h2>
        </header>
        <ul class="flex flex-col">
          <OpenSourceListItem
            v-for="project in openSourceProjects"
            :item="project"
          />
        </ul>
      </section>
    </div>
  </main>
</template>
