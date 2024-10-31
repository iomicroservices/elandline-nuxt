<script lang="ts" setup>
useHead({
  title: 'eLandline | Virtual Landline Services for UK Small Businesses',
  meta: [
    {
      name: 'description',
      content:
        'eLandline specialises in virtual landlines and call management solutions, designed for the evolving needs of UK\'s small businesses. Effortless setup, superior service.',
    },
  ],
  titleTemplate: 'eLandline | %s',
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: 'eLandline | UK Local & National Telephone Numbers for Businesses',
  description: 'eLandline delivers flexible UK local and national telephone numbers to enhance your business presence. Join and enjoy bespoke virtual landline services with easy management.',
  link: '/riyad.jpg',
})

const selectedProcessOneCard = ref<{ name: string; number: string; description: string; buttonText: string } | null>(null)
const selectedProcessTwoCard = ref<{ name: string; amount: string; description: string; buttonText: string } | null>(null)
const selectedProcessThreeCard = ref<{ number: string; amount: string; divert_number: string } | null>(null)

const processOneRef = ref<HTMLElement | null>(null)
const processTwoRef = ref<HTMLElement | null>(null)
const processThreeRef = ref<HTMLElement | null>(null)

const setProcessOneCard = (card: { name: string; number: string; description: string; buttonText: string }) => {
  selectedProcessOneCard.value = card
  processTwoRef.value?.scrollIntoView({ behavior: 'smooth' })
}

const setProcessTwoCard = (card: { name: string; number: string; description: string; buttonText: string }) => {
  selectedProcessTwoCard.value = card
  processThreeRef.value?.scrollIntoView({ behavior: 'smooth' })
}
const setProcessThreeCard = (card: { number: string; amount: string; divert_number: string }) => {
  selectedProcessThreeCard.value = card
}
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />

    <!-- <MainProcess
      title="Get connected and give your business superpowers"
      step1="Select your number"
      step1text="Choose your ideal area code and provide us with a forwarding number."
      step2="Complete payment"
      step2text="Pay with confidence through our secure payment portal to subscribe."
      step3="Start taking calls"
      step3text="You're all set up and ready to connect with customers wherever you are."
    /> -->
    <div ref="processOneRef">
      <MainProcess1 
      title="Choose a number type" 
      desciption="Choose from 1000's of professional virtual numbers"
      :setProcessOneCard="setProcessOneCard" />
    </div>

    <div ref="processTwoRef">

      <MainProcess2 
      title="Select your plan"
      desciption="We understand that every business is unique. That's why we've designed flexible, affordable pricing packages to suit your specific needs. Whether you're a solo entrepreneur or a growing business, our plans are crafted to give you the professional edge and the flexibility you need."
      :selectedProcessOneCard="selectedProcessOneCard"
      :setProcessTwoCard="setProcessTwoCard"
      />
    </div>
    
    <div ref="processThreeRef">
      <MainProcess3 
      title="Pick your freephone number" 
      desciption="Choose from 1000's of professional virtual numbers"
      :selectedProcessTwoCard="selectedProcessTwoCard"
      :setProcessThreeCard="setProcessThreeCard"
      />
    </div>

    <MainReviewOrder 
      title="Review Order & Connect" 
      desciption="You're just a few clicks away from your new number!"
      :selectedProcessOneCard="selectedProcessOneCard"
      :selectedProcessTwoCard="selectedProcessTwoCard"
      :selectedProcessThreeCard="selectedProcessThreeCard"
      />
    <!-- <MainPricing
      title="The ideal plan for small business"
      description="Choose from Local, National or Freephone numbers, and easily direct calls to your existing phone. Enjoy tonnes of call features included as standard that deliver the bang for your buck."
      feature1="Made for small business"
      feature2="12+ free features"
      feature3="Smart call divert"
      feature4="Self-service console"
      plan="Unlimited Minutes"
      amount="11"
      benefit1="Monthly rolling plan"
      benefit2="Cancel at any time"
      benefit3="Competitive pricing"
      benefit4="Satisfaction guarantee"
      button="Subscribe now"
      path="/"
    /> -->

    <!-- <MainBenefits /> -->

    <!-- <MainFeatures2 /> -->

    <!-- <MainContact
      title="Looking for more info?"
      image="https://shuffle.dev/aurora-assets/headers/header-dark-theme-center.png"
      og-image="https://shuffle.dev/aurora-assets/headers/header-dark-theme-center.png"
      alt="Get a virtual landline number for your business in the UK"
      link1="/"
      contact1="Visit the Help Centre"
      desc1="Find answers and support quickly"
      link2="https://wa.me/447919191791?text=Hello%20I%20would%20like%20more%20information%20about%20eLandline"
      contact2="WhatsApp messenger"
      desc2="Chat with a member of the team"
      link3="mailto: info@elandline.co.uk"
      contact3="Email us"
      desc3="Reach us at info@elandline.co.uk"
    /> -->

    <!-- <MainFaq /> -->
    <!-- <MainRecent /> -->
  </main>
</template>
