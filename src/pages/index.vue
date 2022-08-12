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
    <span text-emerald-5 dark:text-emerald>
      Vite
    </span> +
    <span text-emerald-5 dark:text-emerald>
      Vue 3
    </span>!
  </p>
  <img
    m-2 w-100 h-100
    class="
    hover:drop-shadow-[0_0_2rem_rgb(52,211,153)]
    dark:hover:drop-shadow-[0_0_2rem_rgb(4,120,87)]
    "
    alt="Vue logo"
    src="@/assets/logo.svg"
  >
  <button
    class="btn-animation"
    bg-emerald text-black
    rounded-2 px-5 py="3.5"
    @click="toggleDark()"
  >
    toggle dark
  </button>
</template>
