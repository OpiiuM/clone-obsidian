<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useNotesStore } from '@/stores/notes';

import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import CloseIcon from '@/assets/icons/close.svg';

const router = useRouter();
const notesStore = useNotesStore();

const closeCurrentNote = () => {
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
						@click="notesStore.toPrevNote"
					/>
				</div>
				<div class="content-panel__actions-item">
					<arrow-right-icon
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
