<script setup lang="ts"></script>

<template>
  <div class="flex items-center justify-center h-vh w-vw bg-neutral-300">
    <div class="p-6 text-center">
      <header>
        <h1 class="font-mono line-height-none text-2xl text-neutral-800">
          matteogabriele.com
        </h1>
        <p class="text-neutral-500 text-sm">coming soon? perhaps.</p>
      </header>

      <ul
        class="text-sm flex gap-2 items-center justify-center mt-8 text-neutral-600"
      >
        <li>
          <NuxtLink
            external
            to="https://github.com/matteogabriele"
            class="underline hover:text-white"
          >
            GitHub
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            external
            to="https://bsky.app/profile/matteogabriele.bsky.social"
            class="underline hover:text-white"
          >
            Bluesky
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div class="fixed bottom-0">
      <img src="~/assets/images/travolta.gif" />
    </div>
  </div>
</template>
