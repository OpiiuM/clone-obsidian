<script lang="ts" setup>
import { reactive } from 'vue';

import { useSidebarStore } from '@/stores';

import { MessageError } from '@/common/enums';
import type { FormData } from '@/common/types';

const sidebarStore = useSidebarStore();

const emits = defineEmits<{
	(e: 'submit', formData: FormData ): void;
}>();

const formData: FormData = reactive({
	name: '',
	tags: '',
	content: '',
});

const handleSubmit = () => {
	const index = sidebarStore.list.findIndex((el) => {
		return !el?.collection && el?.name === formData.name;
	});

	if (index === -1) {
		emits('submit', formData);
	} else {
		console.error('Same note name');
	}
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
					v-model="formData.name"
					name="name"
					label="Заголовок"
					autocomplete="off"
					validation="required"
					:validation-messages="{ required: MessageError.Required }"
				/>
			</div>
			<!-- <div class="form__field">
				<form-kit
					type="text"
					v-model="formData.folder"
					name="folder"
					label="Группа Заметок"
					autocomplete="off"
				/>
			</div> -->
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
