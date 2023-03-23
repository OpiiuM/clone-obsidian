<script lang="ts" setup>
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';

import { MessageError } from '@/common/enums/messageError';

const emits = defineEmits<{
	(e: 'submit'): void;
}>();

const state = reactive({
	title: '',
	folder: '',
	tags: '',
	content: '',
});

const rules = {
	title: { required }, 
	tags: { required }, 
	content: { required }, 
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
					v-model="state.title"
					id="title"
					label="Заголовок"
					required
					:has-error="v$.title.$error"
					:error-text="MessageError.Required"
				/>
			</div>
			<div class="form__field">
				<AppInput
					v-model="state.folder"
					id="folder"
					label="Группа Заметок"
				/>
			</div>
			<div class="form__field">
				<AppInput
					v-model="state.tags"
					id="tags"
					label="Тэги"
					required
					placeholder="Разработка; Тайм-менеджмент; Дизайн"
					:has-error="v$.tags.$error"
					:error-text="MessageError.Required"
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
					required
					:has-error="v$.content.$error"
					:error-text="MessageError.Required"
				/>
			</div>
		</div>
		<div class="form__block">
			<AppButton type="submit">
				Создать заметку
			</AppButton>
		</div>
	</form>
</template>
