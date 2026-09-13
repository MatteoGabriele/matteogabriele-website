<script setup lang="ts"></script>

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
          <p>Frontend tooling and open source</p>
        </div>
      </div>
    </header>
    <section class="text-sm flex flex-col gap-2 mt-8 text-pretty">
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
  </main>
</template>
