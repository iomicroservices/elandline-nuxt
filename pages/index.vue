<script lang="ts" setup>
useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Welcome To My Blog Site. Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt, Related Articles, Tips, Learning resources and more.',
    },
  ],
  titleTemplate: 'Riyad\'s Blog - %s',
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: 'Riyad\'s Blog',
  description: 'Dive into web development with me and learn Js, Ts, Vue, Nuxt, Docker, k8s',
  link: '/riyad.jpg',
})
</script>

<template>


<main class="container max-w-5xl mx-auto text-zinc-600">

<MainHero 
badge="Only £11/month • Unlimited minutes"
title="Handle customer calls like a pro with your virtual business number"
description="It takes a couple of clicks to get connected, just like magic! We'll shoot across your new business number by email, professionally configured and ready to take calls. Choose from Local, National or Freephone numbers, and easily direct calls to your existing phone. Plus, enjoy free call features for superior customer engagement."
image="https://shuffle.dev/aurora-assets/headers/header-dark-theme-center.png"
alt="Get a virtual landline number for your business in the UK"
ogImage="https://shuffle.dev/aurora-assets/headers/header-dark-theme-center.png"
button1="/"
button2="/"
/>


<MainProcess
  title="Get connected and give your business superpowers"
  step1="Select your number"
  step1text="Choose your ideal area code and provide us with a forwarding number."
  step2="Complete payment"
  step2text="Pay with confidence through our secure payment portal to subscribe."
  step3="Start taking calls"
  step3text="You're all set up and ready to connect with customers wherever you are."
/>

<MainFaq />

<MainRecent />

</main>

</template>
