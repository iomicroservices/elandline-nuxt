<script setup lang="ts">
import { ref } from 'vue';

const showFeatures = ref(false);

const toggleFeatures = () => {
    showFeatures.value = !showFeatures.value;
};
const callFeatures = [
    { name: 'Welcome announcement', icon: 'circle'},
    { name: 'Missed call alerts', icon: 'circle'},
    { name: 'Call statistics', icon: 'circle'},
    { name: 'Holiday settings', icon: 'circle'},
    { name: 'WhatsApp Business', icon: 'circle'},
    { name: 'Voicemail', icon: 'circle'},
    { name: 'Blacklist numbers', icon: 'circle'},
    { name: 'Control panel', icon: 'circle'},
    { name: '100% uptime', icon: 'circle'},
]
</script>
<template>
    <div class="free-call-features">
        <div class="flex justify-between px-5 py-3" @click="toggleFeatures">
            <p class="title">10+ FREE Call Features</p>
            <Icon name="uil:arrow-down" style="color: #5c3efb" />
        </div>
        <transition name="fade">
            <div class="px-5" v-if="showFeatures">
                <div class="flex gap-3 items-center mb-2" v-for="(feature, index) in callFeatures" :key="index">
                    <Icon name="uil:circle" style="color: #5c3efb" />
                    <p class="dark:text-zinc-300">{{ feature.name }}</p>
                </div>
            </div>
        </transition>
    </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>