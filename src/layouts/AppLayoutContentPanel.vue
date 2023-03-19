<script lang="ts" setup>
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import CloseIcon from '@/assets/icons/close.svg';
</script>

<template>
	<div class="content-panel">
		<div class="content-panel__actions">
			<div class="content-panel__actions-item">
				<ArrowLeftIcon class="icon icon--button" />
			</div>
			<div class="content-panel__actions-item">
				<ArrowRightIcon class="icon icon--button" />
			</div>
		</div>

		<p class="content-panel__name">
			BASE / Pinia - изменение данных
		</p>

		<div class="content-panel__actions">
			<div class="content-panel__actions-item">
				<CloseIcon class="icon icon--button" />
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
	}

	&__actions-item {}

	&__name {}
}
</style>
