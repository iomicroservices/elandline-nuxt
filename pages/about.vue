<script setup lang="ts">
defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: 'Riyad\'s Blog',
  description: 'Dive into web development with me and learn Js, Ts, Vue, Nuxt, Docker, k8s',
  link: '/riyad.jpg',
})
</script>

<template>
  <div class="py-5">
    <div class="sm:grid grid-cols-8 px-6 py-5 sm:py-9 gap-5 container max-w-5xl  mx-auto">
      <div class="col-span-5  max-w-md">
        <div class="flex justify-between">
          <div>
            <h1 class="text-xl sm:text-4xl  pb-2 font-bold ">
              About eLandline
            </h1>

            <div class="my-3 space-x-2 md:space-x-3 pb-10">
              <NuxtLink
                to="https://facebook.com/elandlineuk"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Facebook"
              >
                <Icon name="fa:facebook" size="1em" />
              </NuxtLink>
              <NuxtLink
                to="https://www.instagram.com/elandlineuk/"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Instagram"
              >
                <Icon name="fa:instagram" size="1em" />
              </NuxtLink>
              <NuxtLink
                to="https://twitter.com/elandlineuk"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Twitter"
              >
                <Icon name="fa:twitter-square" size="1em" />
              </NuxtLink>
            </div>
          </div>
          <div class="sm:hidden block col-span-3 pb-5 dark:text-[#F1F2F4]">
            <NuxtImg
              src="/riyad.jpg"
              width="125"
              height="115"
              quality="50"
              class="rounded-md"
              format="webp"
            />
          </div>
        </div>
        <h3 class="text-base sm:text-3xl font-semibold pb-7 sm:pb-12">
          Communication Innovator, Small Business Ally, Telephony Specialist.
        </h3>
        <p>Our mission is to empower small businesses across the UK with telecommunication solutions that are not only easy to use but also help them grow. We aim to transform how small businesses communicate with their customers, making advanced telephony features accessible to every entrepreneur.</p>
        
      
      </div>
      <div class="hidden sm:block col-span-3">
        <NuxtImg
          src="/riyad.jpg"
          width="450"
          height="500"
          quality="50"
          class="rounded-md"
          format="webp"
        />
      </div>
    </div>
  </div>
</template>
