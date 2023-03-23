<template>
	<button
		v-bind="$attrs"
		class="button"
	>
		<span v-if="$slots.prefix" class="button__prefix">
			<slot name="prefix" />
		</span>
		<span class="button__text">
			<slot />
		</span>
		<span v-if="$slots.suffix" class="button__suffix">
			<slot name="suffix" />
		</span>
	</button>
</template>

<style lang="scss" scoped>
.button {
	position: relative;

	display: inline-flex;
	align-items: center;

	padding: rem(10px) rem(12px);

	user-select: none;
	cursor: pointer;
	transition: background-color $transition-duration $transition-function;
	text-decoration: none;
	white-space: nowrap;

	color: $white;
	border: rem(1px) solid $mine-shaft;
	border-radius: rem($border-radius);
	background-color: $milano-red;

	&:hover,
	&--active {
		background-color: lighten($milano-red, 10%);
	}

	&[disabled] {
		cursor: not-allowed;
	}

	&__prefix {
		flex-shrink: 0;

		margin-right: rem($gap-micro);
	}

	&__text {
		@include text-size(16px, 20px, $font-weight-average);
	}

	&__suffix {
		flex-shrink: 0;

		margin-left: rem($gap-micro);
	}
}
</style>
