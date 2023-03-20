<script lang="ts" setup>
import { ref } from 'vue';
import { useSidebarStore } from '@/stores/sidebar';
import { useRouter } from 'vue-router';

import ArchiveIcon from '@/assets/icons/archive.svg';
import FolderIcon from '@/assets/icons/folder.svg';
import CollapseIcon from '@/assets/icons/collapse.svg';
import ExpandIcon from '@/assets/icons/expand.svg';

import type { Note } from '@/common/types/note';

const sidebarStore = useSidebarStore();

const router = useRouter();

const isExpanded = ref<Boolean>(false);

const expandAction = () => {
  isExpanded.value = false;
  sidebarStore.expandFolders();
};

const collapseAction = () => {
  isExpanded.value = true;
  sidebarStore.collapseFolders();
};

const list: Note[] = [
  {
    id: '1',
    title: 'Example',
  },
  {
    id: '2',
    title: 'index',
  },
  {
    id: '3',
    title: 'Алгоритм Дейкстры',
  },
  {
    id: '4',
    title: 'Вавилонская библиотека',
  },
  {
    id: '5',
    title: 'Миоклоническая судорога',
    class: 'active',
  },
];
</script>

<template>
  <div class="sidebar">
    <div class="sidebar__actions">
      <div class="sidebar__actions-item">
        <ArchiveIcon
          class="sidebar__actions-icon icon icon--button"
          @click="sidebarStore.createNote"
        />
      </div>
      <div class="sidebar__actions-item">
        <FolderIcon
          class="sidebar__actions-icon icon icon--button"
          @click="sidebarStore.createFolder"
        />
      </div>
      <div class="sidebar__actions-item">
        <ExpandIcon
          v-if="isExpanded"
          class="sidebar__actions-icon icon icon--button"
          @click="expandAction"
        />
        <CollapseIcon
          v-else
          class="sidebar__actions-icon icon icon--button"
          @click="collapseAction"
        />
      </div>
    </div>

    <ul v-if="list.length" class="sidebar__list">
      <!-- TODO: computed class -->
      <li
        v-for="note in list"
        :key="note.id"
        class="sidebar__list-item"
        :class="`sidebar__list-item--${note.class}`"
        @click="router.push({ path: `/${note.id}` })"
      >
        {{ note.title }}
      </li>
    </ul>

    <p v-else class="sidebar__empty">
      У вас нет заметок.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  padding: rem($gap-small);

  border-right: rem(1px) solid $mine-shaft-2;
  background-color: $mine-shaft;

  &__actions {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: rem(-$gap-micro);
    margin-bottom: rem($gap);
    margin-left: rem(-$gap-micro);

    &-item {
      padding: 0 rem($gap-micro);
    }

    &-icon {
      transition: color $transition-duration $transition-function;

      color: $silver-chalice;
      
      &:hover {
        color: $white;
      }
    }
  }

  &__list {
    &-item {
      margin-bottom: rem($gap-micro);
      padding: rem($gap-mini);

      transition: background-color $transition-duration $transition-function;

      cursor: pointer;

      border-radius: rem($border-radius);

      &:hover,
      &--active {
        background-color: $mine-shaft-2;
      }

      @include resetting-vertical-indentation-of-last;
    }
  }

  &__empty {}
}
</style>
