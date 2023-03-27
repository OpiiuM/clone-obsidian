<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useSidebarStore } from '@/stores/sidebar';

import SidebarListNode from '@/modules/sidebar/SidebarListNode.vue';
import FormCreateNote from '@/modules/form/FormCreateNote.vue';
import FormCreateFolder from '@/modules/form/FormCreateFolder.vue';

import ArchiveIcon from '@/assets/icons/archive.svg';
import FolderIcon from '@/assets/icons/folder.svg';
import CollapseIcon from '@/assets/icons/collapse.svg';
import ExpandIcon from '@/assets/icons/expand.svg';

const { list } = useSidebarStore();

const modals = reactive({
  note: false,
  folder: false,
});

const isExpanded = ref(false);

const modalAction = (modalType: 'note' | 'folder', status: boolean): void => {
  modals[modalType] = status;
};

const expandAction = () => {
  isExpanded.value = false;
};

const collapseAction = () => {
  isExpanded.value = true;
};

const createNoteHandler = (data: { [attr: string]: string }) => {
  console.log(data);

  modalAction('note', false);
};

const createFolderHandler = (data: { [attr: string]: string }) => {
  console.log(data);

  modalAction('folder', false);
};
</script>

<template>
  <div class="app-layout__sidebar sidebar">
    <div class="sidebar__actions">
      <div class="sidebar__actions-item">
        <archive-icon
          class="sidebar__actions-icon icon icon--button"
          @click="modalAction('note', true)"
        />
      </div>
      <div class="sidebar__actions-item">
        <folder-icon
          class="sidebar__actions-icon icon icon--button"
          @click="modalAction('folder', true)"
        />
      </div>
      <div
        v-if="list.length"
        class="sidebar__actions-item"
      >
        <expand-icon
          v-if="isExpanded"
          class="sidebar__actions-icon icon icon--button"
          @click="expandAction"
        />
        <collapse-icon
          v-else
          class="sidebar__actions-icon icon icon--button"
          @click="collapseAction"
        />
      </div>
    </div>

    <ul v-if="list.length" class="sidebar__list">
      <sidebar-list-node
        v-for="item in list"
        :key="item.id"
        class="sidebar__list-item"
        :node="item"
      />
    </ul>

    <p v-else class="sidebar__empty">
      У вас нет заметок.
    </p>
  </div>

  <app-modal
    v-if="modals.note"
    @close="modalAction('note', false)"
  >
    <form-create-note
      @submit="createNoteHandler"
    />
  </app-modal>

  <app-modal
    v-if="modals.folder"
    @close="modalAction('folder', false)"
  >
    <form-create-folder
      @submit="createFolderHandler"
    />
  </app-modal>
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

  &__empty {
    text-align: center;
  }
}
</style>
