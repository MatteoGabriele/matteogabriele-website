<script setup lang="ts"></script>

<template>
  <main class="mx-auto max-w-screen-sm px-6 py-12">
    <header>
      <h1 class="mb-6">Matteo Gabriele</h1>
      <div class="flex items-center gap-4">
        <NuxtLink
          external
          href="https://github.com/MatteoGabriele"
          target="_blank"
          class="size-14 overflow-hidden rounded-full filter-saturate-0 hover:filter-saturate-100"
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
      <ArticleList />
      <OpenSourceList />
    </div>
  </main>
</template>
