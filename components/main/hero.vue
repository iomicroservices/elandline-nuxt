<script setup lang="ts">
interface Props {
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
  title: 'no-title',
  description: 'no-description',
  image: '/blogs-img/blog.jpg',
  alt: 'no-alt',
  ogImage: '/blogs-img/blog.jpg',
  button1: '/',
  button2: '/',
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
          <div class="flex flex-wrap sm:flex-nowrap items-center px-4 py-2 bg-indigo-100 dark:bg-[#5c3efb20] rounded-full transition duration-300">
              <span class="text-xs text-[#5c3efb] dark:text-indigo-200 font-semibold">{{ badge }}</span>
          </div>
        </a>
        <!-- badge section END -->

        <!-- main hero section START -->
        <div class="max-w-lg sm:max-w-xl lg:max-w-none mx-auto">
          <h1 class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5">{{ title }}</h1>
          <p class="dark:text-zinc-300 mx-auto mb-5">{{ description }}</p>
          
          <FeaturesDropdown2 />
          
          <!-- Buttons container -->
          <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <!-- Button 1 -->
            <NuxtLink :to="button1" class="px-5 h-12 font-bold text-white bg-[#5c3efb] rounded-lg flex items-center justify-center hover:bg-black transition-colors duration-300">
              Get connected 🚀
            </NuxtLink>
            
            <!-- Button 2 -->
            <NuxtLink :to="button2" class="px-5 h-12 font-bold text-gray-900 dark:text-gray-100 bg-slate-200 dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-center hover:bg-slate-500 hover:text-white transition-colors duration-300">
              Find out more 👇
            </NuxtLink>
          </div>
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