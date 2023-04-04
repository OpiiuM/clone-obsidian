<script lang="ts" setup>
import { watchEffect, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useNotesStore, useSidebarStore } from '@/stores';

import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import CloseIcon from '@/assets/icons/close.svg';

const router = useRouter();
const route = useRoute();

const notesStore = useNotesStore();
const sidebarStore = useSidebarStore();

const noteName = computed(() => {
	return sidebarStore.getNoteById(route.params.id)?.name ?? 'Empty note';
});

const previousClickHandler = () => {
	notesStore.toPrevNote();
	router.push(`/${notesStore.selectIndex}`);
};

const nextClickHandler = () => {
	notesStore.toNextNote();
	router.push(`/${notesStore.selectIndex}`);
};

const closeCurrentNote = () => {
	notesStore.$reset();
	router.push('/');
};
</script>

<template>
	<div class="content-panel">
		<div class="content-panel__wrapper">
			<div class="content-panel__actions">
				<div class="content-panel__actions-item">
					<arrow-left-icon
						class="content-panel__actions-icon icon icon--button"
						:class="{ 'icon--disable': notesStore.isFirstHistoryNote }"
						@click="previousClickHandler"
					/>
				</div>
				<div class="content-panel__actions-item">
					<arrow-right-icon
						class="content-panel__actions-icon icon icon--button"
						:class="{ 'icon--disable': notesStore.isLastHistoryNote }"
						@click="nextClickHandler"
					/>
				</div>
			</div>
	
			<p class="content-panel__name">
				{{ noteName }}
			</p>
	
			<div class="content-panel__actions">
				<div class="content-panel__actions-item">
					<close-icon
						class="content-panel__actions-icon icon icon--button"
						@click="closeCurrentNote"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.content-panel {
	background-color: $cod-gray;
	
	&__wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: rem(10px) rem($gap-small);
	}

	&__actions {
		display: flex;

		&-item {}

		&-icon {
			transition: color $transition-duration $transition-function;

			color: $dove-gray;

			&:hover {
				color: $white;
			}
		}
	}

	&__name {}
}
</style>
