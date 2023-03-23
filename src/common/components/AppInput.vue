<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
	inheritAttrs: false,
	
	props: {
		modelValue: {
			type: String,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
		label: {
			type: String,
		},
		required: {
			type: Boolean,
			default: false,	
		},
		component: {
			type: String,
			default: 'input',
		},
		hasError: {
			type: Boolean,
			default: false,
		},
		errorText: {
			type: String,
		},
	},

	setup(props) {
		const computedClass = computed(() => {
			return {
				'field--textarea': props.component === 'textarea',
				'field--has-error': props.hasError,
				'field--required': props.required,
			};
		});

		return {
			computedClass,
		};
	},
});
</script>

<template>
	<div class="field" :class="computedClass">
		<label
			v-if="label"
			:for="id"
			class="field__label"
		>
			{{ label }}
		</label>
		<div class="field__control">
			<component
				:is="component"
				v-bind="$attrs"
				:value="modelValue"
				:id="id"
				class="field__input"
				@input="$emit('update:modelValue', $event.target.value)"
			/>
		</div>
		<div
			v-if="hasError && errorText"
			class="field__error"
		>
			{{ errorText }}
		</div>
	</div>
</template>

<style lang="scss" scoped>
.field {
	&--has-error & {
		&__error {
			display: block;
		}
	}

	&--textarea & {
		&__input {
			min-height: rem(140px);

			resize: none;
		}
	}

	&--required & {
		&__label {
			&::after {
				content: " *";
			}
		}
	}

	&__label {
		display: block;

		margin-bottom: rem($gap-mini);
	}

	&__control {}

	&__input {
		width: 100%;
		padding: rem($gap-mini) rem(10px);

		transition: border-color $transition-duration $transition-function;

		color: $white;
		border: rem(1px) solid $mine-shaft-2;
		border-radius: rem($border-radius-micro);
		background-color: $mine-shaft-3;

		&:focus {
			border-color: $white;
			outline: none;
		}
	}

	&__error {
		@include text-size(12px, 14px);

		display: none;

		margin-top: rem($gap-mini);

		color: $milano-red;
	}
}
</style>
