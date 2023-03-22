<script lang="ts" setup>
import { ref } from 'vue';
import { useSidebarStore } from '@/stores/sidebar';

import SidebarListElement from '@/modules/sidebar/SidebarListElement.vue';

import ArchiveIcon from '@/assets/icons/archive.svg';
import FolderIcon from '@/assets/icons/folder.svg';
import CollapseIcon from '@/assets/icons/collapse.svg';
import ExpandIcon from '@/assets/icons/expand.svg';

import type { Note } from '@/common/types/note';
import type { Folder } from '@/common/types/folder';

const sidebarStore = useSidebarStore();

const isModalOpen = ref<Boolean>(false);
const isExpanded = ref<Boolean>(false);

const expandAction = () => {
  isExpanded.value = false;
  sidebarStore.expandFolders();
};

const collapseAction = () => {
  isExpanded.value = true;
  sidebarStore.collapseFolders();
};

const list: (Folder | Note)[] = [
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
    isActive: true,
  },
  {
    id: '6',
    name: 'WebDev',
    collection: [
      {
        id: '7',
        title: 'HTML',
      },
      {
        id: '8',
        title: 'SCSS',
      },
      {
        id: '9',
        title: 'JS',
      },
      {
        id: '10',
        title: 'Vue',
      },
    ],
  },
];
</script>

<template>
  <div class="sidebar">
    <div class="sidebar__actions">
      <div class="sidebar__actions-item">
        <ArchiveIcon
          class="sidebar__actions-icon icon icon--button"
          @click="isModalOpen = true"
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
      <li
        v-for="item in list"
        :key="item.id"
        class="sidebar__list-item"
      >
        <SidebarListElement :element="item" />
      </li>
    </ul>

    <p v-else class="sidebar__empty">
      У вас нет заметок.
    </p>
  </div>
  <teleport to="body">
    <transition name="fade">
      <AppModal
        v-if="isModalOpen"
        @close="isModalOpen = false"
      />
    </transition>
  </teleport>
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

      @include resetting-vertical-indentation-of-last;
    }
  }

  &__empty {}
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity $transition-duration $transition-function;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
