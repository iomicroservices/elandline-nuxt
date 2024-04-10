<script lang="ts" setup>

export interface Props {
    title: string;
    description: string;
}

defineProps<Props>();

</script>
<template>
    <div>
        {{ title }} - {{ description }}

        <slot />
    </div>
</template>