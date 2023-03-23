<script lang="ts" setup>
import CloseIcon from '@/assets/icons/close.svg';

defineEmits<{
	(e: 'close'): void;
}>();
</script>

<template>
	<teleport to="#popup">
		<transition name="fade" appear>
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
							<slot />
						</div>
					</div>
				</div>
			</div>
		</transition>
	</teleport>
</template>

<style lang="scss" scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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

		transition: opacity $transition-duration $transition-function;

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
}
</style>
