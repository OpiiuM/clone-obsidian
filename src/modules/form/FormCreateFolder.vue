<script lang="ts" setup>
import { reactive } from 'vue';

import { MessageError } from '@/common/enums/messageError';

type formFolder = {
	[attr: string]: string,
}

const emits = defineEmits<{
	(e: 'submit', formData: formFolder): void;
}>();

const formData: formFolder = reactive({
	name: '',
	folder: '',
});

const existFolders = ['', 'WebDev', 'Career', 'Study', 'Projects'];

const handleSubmit = () => {
	emits('submit', formData);
};
</script>

<template>
	<form-kit
		type="form"
		class="form"
		submit-label="Создать Группу"
		:incomplete-message="false"
		@submit="handleSubmit"
	>
		<div class="form__block">
			<div class="form__field">
				<form-kit
					type="text"
					v-model="formData.name"
					name="name"
					label="Название группы"
					autocomplete="off"
					validation="required"
					:validation-messages="{
						required: MessageError.Required,
					}"
				/>
			</div>
			<div class="form__field">
				<form-kit
					type="select"
					v-model="formData.folder"
					name="folder"
					label="Родительская группа"
					:options="existFolders"
				/>
			</div>
		</div>
	</form-kit>
</template>
