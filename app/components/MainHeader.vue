<template>
  <header>
    <div class="flex items-center gap-12">
      <NuxtLink :to="{ name: 'index' }">
        <img
          src="/assets/images/avatar.jpeg"
          class="rounded-full overflow-hidden"
          width="48"
          height="48"
          alt="Avatar of Matteo Gabriele. Cartoon character that looks like a fat Super Mario on top of a T-Rex. The expression is serious, creating a dynamic and adventurous tone."
        />
      </NuxtLink>

      <div class="flex items-center justify-between w-full">
        <nav>
          <ul class="flex items-center gap-6 text-sm text-mauve">
            <li>
              <NuxtLink class="hover:text-white" :to="{ name: 'about' }">
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="hover:text-white" :to="{ name: 'activity' }">
                Activity
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="hover:text-white" :to="{ name: 'posts' }">
                Posts
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <nav>
          <ul class="flex items-center gap-4 text-sm text-mauve">
            <li>
              <NuxtLink
                external
                to="https://bsky.app/profile/matteogabriele.bsky.social"
                class="hover:text-white text-base"
                aria-label="bluesky"
              >
                <span class="i-carbon:logo-bluesky" />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                external
                class="hover:text-white text-base"
                to="https://github.com/matteogabriele"
                aria-label="github"
              >
                <span class="i-carbon:logo-github" />
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
