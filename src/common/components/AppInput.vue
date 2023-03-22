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
		component: {
			type: String,
			default: 'input',
		},
		errorText: {
			type: String,
		},
	},

	setup(props) {
		const computedClass = computed(() => {
			return {
				'field--textarea': props.component === 'textarea',
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
			v-if="errorText"
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
			display: initial;
		}
	}

	&--textarea & {
		&__input {
			min-height: rem(140px);

			resize: none;
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
		display: none;

		margin-top: rem($gap-mini);

		color: $milano-red;
	}
}
</style>
