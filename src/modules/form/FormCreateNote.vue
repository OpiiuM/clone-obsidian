<script lang="ts" setup>
import { reactive } from 'vue';

import { MessageError } from '@/common/enums/messageError';

type formNote = {
	[attr: string]: string,
}

const emits = defineEmits<{
	(e: 'submit', formData: formNote ): void;
}>();

const formData: formNote = reactive({
	title: '',
	folder: '',
	tags: '',
	content: '',
});

const handleSubmit = () => {
	emits('submit', formData);
};
</script>

<template>
	<form-kit
		type="form"
		class="form"
		submit-label="Создать заметку"
		:incomplete-message="false"
		@submit="handleSubmit"
	>
		<div class="form__block">
			<div class="form__field">
				<form-kit
					type="text"
					v-model="formData.title"
					name="title"
					label="Заголовок"
					autocomplete="off"
					validation="required"
					:validation-messages="{ required: MessageError.Required }"
				/>
			</div>
			<div class="form__field">
				<form-kit
					type="text"
					v-model="formData.folder"
					name="folder"
					label="Группа Заметок"
					autocomplete="off"
				/>
			</div>
			<div class="form__field">
				<form-kit
					type="text"
					v-model="formData.tags"
					name="tags"
					label="Тэги"
					autocomplete="off"
					placeholder="Разработка; Тайм-менеджмент; Дизайн"
					validation="required"
					:validation-messages="{ required: MessageError.Required }"
				/>
			</div>
		</div>
		<div class="form__block">
			<div class="form__field">
				<form-kit
					type="textarea"
					v-model="formData.content"
					name="content"
					label="Текст"
					validation="required"
					:validation-messages="{ required: MessageError.Required }"
				/>
			</div>
		</div>
	</form-kit>
</template>
