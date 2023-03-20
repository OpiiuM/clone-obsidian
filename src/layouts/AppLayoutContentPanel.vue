<script lang="ts" setup>
import { useNotesStore } from '@/stores/notes';

import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import CloseIcon from '@/assets/icons/close.svg';

const notesStore = useNotesStore(); 
</script>

<template>
	<div class="content-panel">
		<div class="content-panel__actions">
			<div class="content-panel__actions-item">
				<ArrowLeftIcon
					class="content-panel__actions-icon icon icon--button"
					@click="notesStore.toPrevNote"
				/>
			</div>
			<div class="content-panel__actions-item">
				<ArrowRightIcon
					class="content-panel__actions-icon icon icon--button"
					@click="notesStore.toNextNote"
				/>
			</div>
		</div>

		<p class="content-panel__name">
			BASE / Pinia - изменение данных
		</p>

		<div class="content-panel__actions">
			<div class="content-panel__actions-item">
				<CloseIcon
					class="content-panel__actions-icon icon icon--button"
					@click="notesStore.closeCurrentNote"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.content-panel {
	display: flex;
	align-items: center;
	justify-content: space-between;

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
