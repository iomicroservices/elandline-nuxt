<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import Modal from '../Modal.vue';

interface Props {
    title: string,
    desciption: string,
    selectedProcessTwoCard: { name: string; number: string; description: string; buttonText: string } | null
    setProcessThreeCard: (card: { number: string; amount: string; divert_number: string }) => void
}

const props = withDefaults(defineProps<Props>(), {
    title: "Pick your freephone number",
    desciption: "Choose from 1000's of professional virtual numbers",
})
const categories = [
    '🥉 Bronze numbers',
    '🥈 Silver numbers',
    '🥇 Gold numbers',
    '💎 Diamond numbers'
];
const numbers = reactive([
    {
        number: '08002461090',
        amount: '£90',
        divert_number: '',
    },
    {
        number: '08002461213',
        amount: '£90',
        divert_number: '',
    },
]);

const isModalOpen = ref(false);
const selectedData = ref(null);
const isLoading = ref(false);

const openModal = (index) => {
    isModalOpen.value = true;
    selectedData.value = numbers[index];
};
const hideModal = () =>{
    isModalOpen.value = false;
    selectedData.value = null;
}

const phoneNumber = ref('')

const buttonClass = computed(() => {
    return phoneNumber.value.length >= 11 ? 'green-btn' : 'disabled-btn'
})

async function addNumberToBasket() {
  if (isLoading.value || (phoneNumber.value && phoneNumber.value.length < 11)) return;

  isLoading.value = true;
  const index = numbers.findIndex((item) => item.divert_number === '');

  if (index !== -1) {
    numbers[index].divert_number = phoneNumber.value;
    phoneNumber.value = '';

    props.setProcessThreeCard(numbers[index]);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    isModalOpen.value = false; 
  }

  isLoading.value = false;
}

</script>

<template>
    <section class="container relative py-20">
        <!-- {{ selectedProcessTwoCard }} -->
        <div class="px-4">
            <div class="flex gap-3">
                <p :class="['step-process-badge opacity-50', { 'step-complete': selectedProcessTwoCard }]"></p>
                <p :class="['step-process-badge opacity-50', { 'step-complete': selectedProcessTwoCard }]"></p>
                <p :class="['step-process-badge', { 'step-complete': selectedProcessTwoCard }]">STEP 3</p>
            </div>
            <h2 class="heading1">
                {{ title }}
            </h2>
            <p class="dark:text-zinc-300 mb-5">
                {{ desciption }}
            </p>
            <div class="px-20" v-if="selectedProcessTwoCard">
                <div class="mb-4">
                    <select class="collection-search-input">
                        <option selected>🔥 All collections</option>
                        <option v-for="category in categories" :key="category" :value="category">{{ category }}
                        </option>
                    </select>
                </div>
                <div class="grid grid-cols-3 gap-5">
                    <div class="number-container flex justify-between items-center" v-for="(number, index) in numbers"
                        :key="index" @click="openModal(index)">
                        <div class="flex items-center gap-2">
                            <div class="icon-bg flex justify-center">
                                <Icon name="uil:fire" style="color: rgb(93 62 251);" />
                            </div>
                            <p class="dark:text-zinc-300">{{ number.number }}</p>
                        </div>
                        <p class="number-amount dark:text-zinc-300">{{ number.amount }}</p>
                    </div>
                </div>
                <transition name="modal" enter-active-class="ease-out duration-300"
                    enter-from-class="opacity-0 translate-y-4" enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="ease-in duration-200" leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 translate-y-4">
                    <Modal v-if="isModalOpen" :data="selectedData" :show="isModalOpen" @close="hideModal()">
                        <div class="flex flex-col gap-6">
                            <p class="modal-body-heading">Divert my calls to:</p>
                            <p class="modal-body-description font-light">
                                Tell us which number you'd like to divert your calls to. You can divert to multiple telephone numbers once setup, using your free Control Panel & App.
                            </p>
                            <div class="px-4 search-number">
                                <input type="text" class="w-full" placeholder="e.g 0700 567890" v-model="phoneNumber" />
                                <div class="flex justify-center">
                                    <button
                                        :class="['px-4 py-2 flex items-center justify-center', buttonClass]"
                                        @click="addNumberToBasket"
                                        :disabled="isLoading || (phoneNumber.value && phoneNumber.value.length < 11)"
                                        >
                                            <span v-if="isLoading" class="loader"></span>
                                            <span v-else>Add to basket</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </transition>
            </div>
            <div class="flex justify-center" v-else>
                <p class="bg-blue w-fit-content px-4 rounded-lg text-white dark:text-zinc-300 cursor-pointer">
                    Complete Steps 1 and 2  to view numbers
                </p>
            </div>
        </div>
    </section>
</template>
<style scoped>
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter,
.modal-leave-to {
    opacity: 0;
}

.loader {
    width: 25px;
    height: 25px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
</style>
