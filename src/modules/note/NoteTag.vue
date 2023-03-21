<script lang="ts" setup>
</script>

<template>
    <div class="tag">
        <span class="tag__text">
            <slot />
        </span>
    </div>
</template>

<style lang="scss" scoped>
.tag {
    padding: rem($gap-micro) rem($gap-mini);

    border-radius: rem(12px);

    background-color: $cocoa-brown;

    &__text {
        @include text-size(14px, 16px);

        color: $milano-red;
    }
}
</style>
