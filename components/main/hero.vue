<script setup lang="ts">
interface Props {
  badge: string
  title: string
  description: string
  alt: string
  ogImage: string
  button1: string
  button2: string
}

withDefaults(defineProps<Props>(), {
  badge: 'Only £11/month • Unlimited minutes',
  title: 'Handle customer calls like a pro with your virtual business number',
  description: 'From £3/month • No contract • Cancel anytime',
  alt: 'Get a virtual landline number for your business in the UK',
  ogImage: 'https://shuffle.dev/aurora-assets/headers/header-dark-theme-center.png',
  button1: '/',
  button2: '/',
})
</script>

<template>
  <header class="container relative pt-20">
    <div class="relative">
      <div class="container px-4 mx-auto">
        <div class="max-w-2xl mb-14">

          <!-- main hero section START -->
          <div class="max-w-lg sm:max-w-xl lg:max-w-none">
            <h1 class="heading1">
              {{ title }}
            </h1>
            <p class="dark:text-zinc-300 mx-auto mb-5">
              {{ description }}
            </p>

            <!-- <FeaturesDropdown /> -->

            <!-- Buttons container -->
            <div class="flex sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <!-- Button 1 -->
              <NuxtLink :to="button1" class="blue-btn py-3 px-4">
                Get started
              </NuxtLink>

              <!-- Button 2 -->
              <!-- <NuxtLink :to="button2" class="px-5 h-12 font-bold text-gray-900 dark:text-gray-100 bg-slate-200 dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-center hover:bg-slate-300 hover:dark:bg-slate-800 transition-colors duration-300">
                Find out more 👇
              </NuxtLink> -->
            </div>
          </div>
          <!-- main hero section END -->
        </div>

        <!-- hero image section START -->
        <!-- <NuxtImg
          :src="ogImage"
          :alt="alt"
          class="w-full"
          format="webp"
        /> -->
        <!-- hero image section END -->
      </div>
    </div>
  </header>
</template>
