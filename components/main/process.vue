<script setup lang="ts">
interface Props {
  title: string
  step1: string
  step2: string
  step3: string
  step1text: string
  step2text: string
  step3text: string
}

withDefaults(defineProps<Props>(), {
  title: 'no-title',
  step1: 'step1',
  step2: 'step2',
  step3: 'step3',
  step1text: 'step1text',
  step2text: 'step2text',
  step3text: 'step3text',
})
</script>

<template>
<section class="container px-8 py-20">
    <div class="max-w-7xl mx-auto">
        <h2 class="font-heading text-gray-900 dark:text-zinc-300 font-black text-4xl md:text-5xl max-w-xl mb-20">
            {{ title }}
        </h2>
        <div class="flex flex-wrap -m-3">
        <div class="w-full md:w-1/2 lg:w-1/3 p-3">
            <div class="flex flex-wrap items-center -m-3 mb-2">
            <div class="w-auto p-3">
                <div class="flex items-center justify-center w-16 h-16 text-xl text-gray-900 dark:text-gray-200 font-black bg-white dark:bg-slate-800 border-4 border-[#5c3efb50] rounded-full">1</div>
            </div>
            <div class="flex-1 p-3">
                <div class="bg-gray-200 h-px"></div>
            </div>
            </div>
            <div class="md:w-3/4">
            <h3 class="font-heading mb-4 text-2xl text-gray-900 dark:text-gray-200 font-bold">{{step1}}</h3>
            <p class="text-gray-700 dark:text-gray-400 font-bold">{{step1text}}</p>
            </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-3">
            <div class="flex flex-wrap items-center -m-3 mb-2">
            <div class="w-auto p-3">
                <div class="flex items-center justify-center w-16 h-16 text-xl text-gray-900 dark:text-gray-200 font-black bg-white dark:bg-slate-800 border-4 border-[#5c3efb75] rounded-full">2</div>
            </div>
            <div class="flex-1 p-3">
                <div class="bg-gray-200 h-px"></div>
            </div>
            </div>
            <div class="md:w-3/4">
            <h3 class="font-heading mb-4 text-2xl text-gray-900 dark:text-gray-200 font-bold">{{step2}}</h3>
            <p class="text-gray-700 dark:text-gray-400 font-bold">{{step2text}}</p>
            </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-3">
            <div class="flex flex-wrap items-center -m-3 mb-2">
            <div class="w-auto p-3">
                <div class="flex items-center justify-center w-16 h-16 text-xl text-gray-900 dark:text-gray-200 font-black bg-white dark:bg-slate-800 border-4 border-[#5c3efb] rounded-full">3</div>
            </div>
            <div class="flex-1 p-3">
            </div>
            </div>
            <div class="md:w-3/4">
            <h3 class="font-heading mb-4 text-2xl text-gray-900 dark:text-gray-200 font-bold">{{step3}}</h3>
            <p class="text-gray-700 dark:text-gray-400 font-bold">{{step3text}}</p>
            </div>
        </div>
       
        </div>
    </div>
</section>

</template>