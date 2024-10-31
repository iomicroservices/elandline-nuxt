<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
    show: Boolean,
    data: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(["close"]);

const closeModal = () => {
    emit("close");
};
</script>
<template>
    <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="shadow-lg max-w-md w-full">
            <div class="custom-modal-header p-4 flex justify-between items-center">
                <h2 class="title">{{ data.number }} - {{ data.amount }}</h2>
                <button class=" text-white" @click="closeModal">
                    <Icon name="uil:x" style="font-size: 24px;" />
                </button>
            </div>
            <div class="custom-modal-body p-4 px-8">
                <slot></slot>
            </div>
            <div class="custom-modal-footer"></div>
        </div>
    </div>
</template>