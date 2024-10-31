<script setup lang="ts">
import { ref, withDefaults, defineProps } from 'vue'
interface Props {
    title: string,
    desription: string
    setProcessOneCard: (card: { name: string; number: string; description: string; buttonText: string }) => void
}

const props = withDefaults(defineProps<Props>(), {
    title: 'Choose a number type',
    desription: "Choose from 1000's of professional virtual numbers",
})

const activeCardIndex = ref<number | null>(null)
const selectedButtonIndex = ref(null)
const isStepComplete = ref(false)

const setActiveCard = (index: number) => {
    activeCardIndex.value = index
    selectedButtonIndex.value = index
    isStepComplete.value = true 
    props.setProcessOneCard(processOneCards[index]) 

}
const processOneCards = [
    {
        name: 'Freephone',
        number: '0800',
        description: "Increase customer enquiries with a number that's free to call.",
        buttonText: 'freephone number',
    },
    {
        name: 'National',
        number: '0333',
        description: 'Give your business a professional, nationwide presence.',
        buttonText: 'national number',
    },
    {
        name: 'Local',
        number: '01/02',
        description: 'Attract local customers across the UK with our virtual landlines.',
        buttonText: 'local number',
    },
]
</script>

<template>
    <section class="container relative py-20">
        <div class="px-4">
            <div class="flex gap-3">
                <p :class="['step-process-badge', { 'step-complete': isStepComplete }]">STEP 1</p>
                <p class="step-process-badge opacity-50"></p>
                <p class="step-process-badge opacity-50"></p>
            </div>
            <h2 class="heading1">
                {{ title }}
            </h2>
            <p class="dark:text-zinc-300 mb-5">
                {{ desription }}
            </p>
            <div class="grid grid-cols-3 gap-10">
                <div v-for="(card, index) in processOneCards" :key="index"
                    :class="['process-card flex flex-col items-center', { 'card-active': activeCardIndex === index }]"
                    @click="setActiveCard(index)">
                    <p class="name dark:text-zinc-300">{{ card.name }}</p>
                    <img src="/assets/images/uk1a.png" alt="porcess-image" class="mb-3" />
                    <p class="number dark:text-zinc-300">{{ card.number }} Numbers</p>
                    <p class="description text-center dark:text-zinc-300">{{ card.description }}</p>
                    <button :class="['w-full blue-btn', { 'button-select': selectedButtonIndex === index }]">
                        {{ selectedButtonIndex === index ? `${card.buttonText} selected` : `select ${card.buttonText}`}}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>

</style>