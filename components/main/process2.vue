<script setup lang="ts">
import { ref } from 'vue'
interface Props {
    title: string,
    desription: string
    selectedProcessOneCard: { name: string; number: string; description: string; buttonText: string } | null
    setProcessTwoCard: (card: { name: string; number: string; description: string; buttonText: string }) => void

}

const props = withDefaults(defineProps<Props>(), {
    title: 'Select your plan',
    desription: "We understand that every business is unique. That's why we've designed flexible, affordable pricing packages to suit your specific needs. Whether you're a solo entrepreneur or a growing business, our plans are crafted to give you the professional edge and the flexibility you need.",

})

const isChecked = ref(false)
const activeCardIndex = ref(null)
const selectedButtonIndex = ref(null)
const isStepComplete = ref(false)

const setActiveCard = (index) => {
    activeCardIndex.value = index
    selectedButtonIndex.value = index
    isStepComplete.value = true
    props.setProcessTwoCard(processTwoCards[index]) 
}

const processTwoCards = [
    {
        name: 'PAYG plan',
        amount: '£3',
        description: "Forward calls at 3p/minute to your landline or mobile number",
        buttonText: 'PAYG plan',
    },
    {
        name: 'Business plan',
        amount: '£14',
        description: "Forward calls at 1.5p/min from landline and 6.5p/min  from mobile",
        buttonText: 'Business plan',
    },
]
</script>

<template>
    <section class="container relative py-20">
        <!-- {{ selectedProcessOneCard }} -->
        <div class="px-4">
            <div class="flex gap-3">
                <p :class="['step-process-badge opacity-50', { 'step-complete': selectedProcessOneCard }]"></p>
                <p :class="['step-process-badge', { 'step-complete': isStepComplete }]">STEP 2</p>
                <p class="step-process-badge"></p>
            </div>
            <h2 class="heading1">
                {{ title }}
            </h2>
            <p class="dark:text-zinc-300 mb-5">
                {{ desription }}
            </p>
            <div class="grid grid-cols-3 gap-10" v-if="props.selectedProcessOneCard">
                <div :class="['process-card', { 'card-active': activeCardIndex === index }]"
                    v-for="(card, index) in processTwoCards" :key="index">
                    <p class="name dark:text-zinc-300">{{ card.name }}</p>
                    <div class="flex items-baseline ">
                        <p class="amount dark:text-zinc-300">{{ card.amount }}</p>
                        <p class="dark:text-zinc-300">/month</p>
                    </div>
                    <p class="description text-start dark:text-zinc-300">{{ card.description }}</p>
                    <div class="my-3">
                        <div class="flex items-center mb-2">
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" v-model="isChecked" />
                                <div class="w-11 h-6 rounded-full  transition-colors duration-300 ease-in-out"
                                    :class="isChecked ? 'bg-green' : 'bg-gray-500'"></div>
                                <span
                                    class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out"
                                    :class="isChecked ? 'translate-x-5' : 'translate-x-0'"></span>
                            </label>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-zinc-300">Switchboard
                                +£6/month</span>
                        </div>
                        <div class="flex items-center mb-2">
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" v-model="isChecked" />
                                <div class="w-11 h-6 rounded-full  transition-colors duration-300 ease-in-out"
                                    :class="isChecked ? 'bg-green' : 'bg-gray-500'"></div>
                                <span
                                    class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out"
                                    :class="isChecked ? 'translate-x-5' : 'translate-x-0'"></span>
                            </label>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-zinc-300">Team coverage
                                +£3/month</span>
                        </div>
                        <div class="flex items-center mb-2">
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" v-model="isChecked" />
                                <div class="w-11 h-6 rounded-full  transition-colors duration-300 ease-in-out"
                                    :class="isChecked ? 'bg-green' : 'bg-gray-500'"></div>
                                <span
                                    class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out"
                                    :class="isChecked ? 'translate-x-5' : 'translate-x-0'"></span>
                            </label>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-zinc-300">Call whisper
                                +£3/month</span>
                        </div>
                    </div>
                    <div class="my-3">
                        <MainCallFeatures />
                    </div>
                    <button :class="['w-full blue-btn', { 'button-select': selectedButtonIndex === index }]"
                        @click="setActiveCard(index)">
                        {{ selectedButtonIndex === index ? `${card.buttonText} selected` : `select ${card.buttonText}`
                        }}
                    </button>
                </div>
            </div>
            <div v-else>
                <div class="flex justify-center">
                    <p class="bg-blue w-fit-content px-4 rounded-lg text-white dark:text-zinc-300 cursor-pointer">
                        Complete Steps 1 to view plans
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>