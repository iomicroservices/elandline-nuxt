<script setup lang="ts">
interface Props {
  path: string
  title: string
  description: string
  image: string
  alt: string
  ogImage: string
  button1: string
  button2: string
  badge: string
}

withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'no-title',
  description: 'no-description',
  image: '/blogs-img/blog.jpg',
  alt: 'no-alt',
  ogImage: '/blogs-img/blog.jpg',
  button1: 'button-1',
  button2: 'button-2',
  badge: 'badge-text',
})
</script>

<template>
    
  <section class="relative container mx-auto my-10">
  
  <div class="relative py-10">
    <div class="container px-4 mx-auto">

      <div class="max-w-2xl mb-14 mx-auto text-center">

        <!-- badge section START -->
        <a class="group relative inline-flex items-center rounded-full overflow-hidden shadow-3xl">
          <div class="animate-showLine absolute bottom-0 left-1/2 transform -translate-x-1/2 p-px mx-auto w-auto bg-gradient-to-r from-transparent via-yellowGreen-500 to-transparent"></div>
          <div class="flex flex-wrap sm:flex-nowrap items-center px-6 sm:px-4 py-4 sm:py-2 bg-indigo-100 dark:bg-slate-700 rounded-full transition duration-300">
              <span class="text-xs text-indigo-800 dark:text-indigo-100 font-semibold">{{ badge }}</span>
          </div>
        </a>
        <!-- badge section END -->

        <!-- main hero section START -->
        <div class="max-w-lg sm:max-w-xl lg:max-w-none mx-auto">
          <h1 class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5">{{ title }}</h1>
          <p class="dark:text-zinc-300 mx-auto mb-10">{{ description }}</p>
          <a class="group relative flex xs:inline-flex items-center justify-center px-5 h-12 font-bold text-gray-900 bg-yellowGreen-600 rounded-lg transition-all duration-300" href="#">
          <div class="absolute top-0 left-0 w-full h-full rounded-lg ring ring-yellowGreen-900 animate-pulse group-hover:ring-0 transition duration-300"></div>
          <span class="dark:text-zinc-300 mr-3">Request Access</span>
          <span class="transform group-hover:translate-x-1 transition duration-300">
              <svg width="7" height="12" viewbox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
          </span>
          </a>
        </div>
        <!-- main hero section END -->
      </div>

    <!-- hero image section START -->  
    <NuxtImg :src="image" :alt="alt" class="w-full" />
    <!-- hero image section END -->

    </div>
  </div>
  </section>
  </template>