<script setup lang="ts">
useHead({
  title: "My Heated Response to That AI Article Nobody Asked For",
  meta: [
    { property: "og:type", content: "article" },
    {
      property: "og:title",
      content: "My Heated Response to That AI Article Nobody Asked For",
    },
    {
      property: "og:description",
      content:
        "Why This Popular AI Article Gets It Completely Wrong: A Critical Response",
    },
    {
      name: "description",
      content:
        "Why This Popular AI Article Gets It Completely Wrong: A Critical Response",
    },
    { property: "og:image", content: "/images/ai-article-response.jpg" },
    { name: "author", content: "Matteo Gabriele" },
    { name: "article:published_time", content: "2026-04-26" },
  ],
});

onMounted(() => {
  navigateTo("https://www.youtube.com/watch?v=dQw4w9WgXcQ", {
    external: true,
  });
});
</script>
