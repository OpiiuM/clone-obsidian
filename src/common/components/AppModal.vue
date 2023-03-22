<script lang="ts" setup>
import { reactive } from 'vue';

import CloseIcon from '@/assets/icons/close.svg';

defineEmits<{
	(e: 'close'): void;
}>();

const state = reactive({
	title: '',
	tags: '',
	content: '',
});
</script>

<template>
	<div
		class="modal-overlay"
		@click.self="$emit('close')"
	>
		<div class="modal">
			<CloseIcon
				class="modal__close icon icon--button"
				@click="$emit('close')"
			/>
			<div class="modal__content">
				<div class="modal__container">
					<form class="form">
						<div class="form__block">
							<div class="form__field">
								<AppInput
									v-model="state.title"
									id="title"
									label="Заголовок"
								/>
							</div>
							<div class="form__field">
								<AppInput
									v-model="state.tags"
									id="tags"
									label="Тэги"
									placeholder="Разработка; Тайм-менеджмент; Дизайн"
								/>
							</div>
						</div>
						<div class="form__block">
							<div class="form__field">
								<AppInput
									component="textarea"
									v-model="state.content"
									id="content"
									label="Текст"
								/>
							</div>
						</div>
						<div class="form__block">
							<AppButton type="submit">
								Создать заметку
							</AppButton>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.modal {
	position: relative;

	width: 100%;
	max-width: rem($container-width);
	max-height: 90vh;

	color: $white;
	border-radius: rem($border-radius-micro);
	background-color: $mine-shaft;

	&-overlay {
		@include position-stretching(fixed, $z-index-popup);

		display: flex;
		align-items: center;
		justify-content: center;

		background-color: rgba($black, .55);
		backdrop-filter: blur($gap-micro);
	}

	&__close {
		position: absolute;
		top: rem(-$gap);
		right: 0;

		color: $white;
	}

	&__content {
		overflow: hidden;

		padding: rem($gap-medium);
	}

	&__container {}
}
</style>
