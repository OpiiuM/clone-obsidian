<script lang="ts" setup>
import NoteTag from '@/modules/note/NoteTag.vue';
</script>

<template>
    <article class="note-view">
        <header class="note-view__header">
            <h2 class="note-view__title">
                title
            </h2>

            <ul class="note-view__tags">
                <li class="note-view__tags-item">
                    <NoteTag>#Vue</NoteTag>
                </li>
                <li class="note-view__tags-item">
                    <NoteTag>#Vue/Pinia</NoteTag>
                </li>
                <li class="note-view__tags-item">
                    <NoteTag>#Vue/Router</NoteTag>
                </li>
            </ul>
        </header>

        <div class="note-view__content">

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim perferendis delectus quo. Sequi ullam laudantium omnis natus. Quia, veniam. Qui necessitatibus, modi sequi sint repudiandae cum molestiae quia vitae!

        </div>
    </article>
</template>

<style lang="scss" scoped>
.note-view {

    &__header {
        margin-bottom: rem($gap);
        padding-bottom: rem($gap);

        border-bottom: rem(2px) solid $mine-shaft-2;
    }

    &__title {
        margin-bottom: rem($gap-mini);
    }

    &__tags {
        display: flex;
        flex-wrap: wrap;

        margin: rem(-$gap-mini) rem(-$gap-micro) 0;

        &-item {
            margin-top: rem($gap-mini);
            padding: 0 rem($gap-micro);
        }
    }

    &__content {}
}
</style>
