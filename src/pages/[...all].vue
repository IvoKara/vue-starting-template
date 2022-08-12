<script setup lang="ts">
useHead({
  title: 'Not found',
})
</script>

<template>
  <PageHeading>
    Page Not Found
  </PageHeading>
  <RouterLink to="/" hover:bg-emerald="400/40" transition-500 px-1>
    Back to Home
  </RouterLink>
</template>
