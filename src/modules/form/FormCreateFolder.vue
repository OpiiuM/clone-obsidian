<script lang="ts" setup>
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';

import { MessageError } from '@/common/enums/messageError';

const emits = defineEmits<{
	(e: 'submit'): void;
}>();

const state = reactive({
	name: '',
	folder: '',
});

const rules = {
	name: { required },  
};

const v$ = useVuelidate(rules, state);

const handleSubmit = async () => {
	const isValid = await v$.value.$validate();
	isValid && emits('submit');
};
</script>

<template>
	<form class="form" @submit.prevent="handleSubmit">
		<div class="form__block">
			<div class="form__field">
				<AppInput
					v-model="state.name"
					id="title"
					label="Название группы"
					required
					:has-error="v$.name.$error"
					:error-text="MessageError.Required"
				/>
			</div>
			<div class="form__field">
				<AppInput
					v-model="state.folder"
					id="folder"
					label="Родительская группа"
				/>
			</div>
		</div>
		<div class="form__block">
			<AppButton type="submit">
				Создать Группу
			</AppButton>
		</div>
	</form>
</template>
