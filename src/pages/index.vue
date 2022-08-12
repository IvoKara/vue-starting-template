<script setup lang="ts">
import { toggleDark } from '@/composables/dark'

useHead({
  title: 'Home',
})
</script>

<template>
  <PageHeading>
    Home page
  </PageHeading>
  <p text-lg>
    You’ve successfully created a project with
    <a
      href="https://vitejs.dev/"
      text-emerald-5 dark:text-emerald
      hover:bg-emerald="400/40" transition-500
    >Vite</a> +
    <a
      href="https://vuejs.org/"
      text-emerald-5 dark:text-emerald
      hover:bg-emerald="400/40" transition-500
    >Vue 3</a>!
  </p>
  <img
    m-2 w-100 h-100
    class="
    transition-200
    hover:drop-shadow-[0_0_2rem_rgb(52,211,153)]
    dark:hover:drop-shadow-[0_0_2rem_rgb(4,120,87)]
    "
    alt="Vue logo"
    src="@/assets/logo.svg"
  >
  <button
    class="btn-animation"
    transition-colors-300
    hover:bg-emerald-600
    bg-emerald text-black
    rounded-2 px-5 py="3.5"
    @click="toggleDark()"
  >
    toggle dark
  </button>
</template>
