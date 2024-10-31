<script setup lang="ts">
import { ref, computed } from 'vue'

const selectedValue = ref('');
const showCategories = ref(false);

const categories = [
    '🔥 All collections',
    '🥉 Bronze numbers',
    '🥈 Silver numbers',
    '🥇 Gold numbers',
    '💎 Diamond numbers'
];
const handleFocus = () => {
    showCategories.value = true;
};

const filteredCategories = computed(() =>
    categories.filter((category) =>
        category.toLowerCase().includes(selectedValue.value.toLowerCase())
    )
);

const selectCategory = (category) => {
    selectedValue.value = category;
    showCategories.value = false;
};

const handleInput = () => {
    showCategories.value = true;
};
</script>


<template>
    <div>
        <div class="collection-search-input flex items-center justify-between px-3">
            <input type="text" placeholder="🔥 All collections" class="px-0" v-model="selectedValue"
                @focus="handleFocus" @input="handleInput" />
            <div class="input_icon flex justify-center">
                <Icon name="uil:arrow" style="color: #fff" />
            </div>
        </div>
        <div v-if="showCategories" class="collection-search-categories">
            <p v-for="category in filteredCategories" :key="category" @click="selectCategory(category)">
                {{ category }}
            </p>
        </div>
    </div>
</template>