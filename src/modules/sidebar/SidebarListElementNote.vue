<script lang="ts" setup>
import AngleRightIcon from '@/assets/icons/angle-right.svg';
import AngleBottomIcon from '@/assets/icons/angle-bottom.svg';

const props = defineProps<{
	id: number | string,
	name: string,
	isHeading?: boolean,
	isOpen?: boolean,
}>();
const emits = defineEmits<{
	(e: 'click-note', id: number | string, isOpen?: Boolean): void;
}>();

const handleClick = () => {
	if (props.isHeading) {
		emits('click-note', props.id, !props.isOpen);
	} else {
		emits('click-note', props.id);
	}
};
</script>

<template>
	<div
		class="note"
		@click="handleClick"
	>
		<template v-if="props.isHeading">
			<angle-bottom-icon
				v-if="isOpen"
				class="note__icon icon"
			/>
			<angle-right-icon
				v-else
				class="note__icon icon"
			/>
		</template>

		<span class="note__name">
			{{ props.name }}
		</span>
	</div>
</template>

<style lang="scss" scoped>
.note {
	display: flex;
	align-items: center;

	padding: rem($gap-micro) rem($gap-mini);

	transition: background-color $transition-duration $transition-function;

	cursor: pointer;

	border-radius: rem($border-radius);

	&:hover {
		background-color: $mine-shaft-2;
	}

	&__icon {
		flex-shrink: 0;

		margin: rem(-$gap-micro);
		padding-right: rem($gap-micro);

		transform-origin: center; 
	}

	&__name {
		@include text-size(16px, 28px);

		flex-grow: 1;

		user-select: none;
		white-space: pre-wrap;
	}
}
</style>
