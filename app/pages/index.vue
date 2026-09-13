<script setup lang="ts">
const writing: ArticleItem[] = [
  {
    title: "The build step you didn't need",
    createdAt: '2026-09-13T08:14:32.000Z',
    excerpt:
      'Most of the complexity in a frontend toolchain is inherited, not chosen.',
    to: '/',
  },
  {
    title: 'Types are a conversation with your future self',
    createdAt: '2026-08-28T16:42:07.000Z',
    excerpt:
      'Type definitions that explain intent rather than merely satisfying the compiler.',
    to: '/',
  },
  {
    title: 'Maintaining a library nobody thanks you for',
    createdAt: '2026-07-10T11:05:48.000Z',
    excerpt:
      'Five years of issues, one breaking change, and what maintenance actually consists of.',
    to: '/',
  },
]

const openSourceProjects: OpenSourceProjectItem[] = [
  {
    title: 'agentscan',
    stars: 97,
    excerpt: 'Automation pattern detection for open source maintainers',
    href: 'https://github.com/MatteoGabriele/agentscan',
  },
  {
    title: 'agentscan-action',
    stars: 57,
    excerpt:
      'GitHub Action that detects automation patterns for open source maintainers',
    href: 'https://github.com/unveil-project/identity',
  },
  {
    title: '@unveil/identity',
    stars: 46,
    excerpt:
      'Identify automation patterns in GitHub accounts through behavioral analysis',
    href: 'https://github.com/unveil-project/identity',
  },
  {
    title: '@unveil/vk',
    stars: 5,
    excerpt:
      'Fetch GitHub account activity and analyze it for automation patterns',
    href: 'https://github.com/unveil-project/identity',
  },
  {
    title: 'vue-gtag',
    stars: 941,
    excerpt: 'Global Site Tag plugin for Vue (gtag.js)',
    href: 'https://github.com/MatteoGabriele/vue-gtag',
  },
  {
    title: 'vue-progressive-image',
    stars: 721,
    excerpt: 'Vue progressive image loading plugin',
    href: 'https://github.com/MatteoGabriele/vue-progressive-image',
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
        <ul class="flex flex-col font-200 text-sm">
          <ArticleListItem v-for="article in writing" :item="article" />
        </ul>
      </section>

      <section class="flex flex-col gap-2 text-pretty">
        <header class="mb-2">
          <h2 class="uppercase font-mono text-xs">Open Source</h2>
        </header>
        <ul class="flex flex-col font-200 text-sm">
          <OpenSourceListItem
            v-for="project in openSourceProjects"
            :item="project"
          />
        </ul>
      </section>
    </div>
  </main>
</template>
