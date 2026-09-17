<script setup>
const route = useRoute()
const { data: post } = await useArticle(route.path)
</script>

<template>
  <article>
    <h1>{{ post.title }}</h1>
    <ContentRenderer :value="post" />
  </article>
</template>
