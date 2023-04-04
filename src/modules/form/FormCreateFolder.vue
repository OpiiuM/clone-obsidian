<script lang="ts" setup>
import { reactive } from 'vue';

import { useSidebarStore } from '@/stores';

import { MessageError } from '@/common/enums';
import type { FormData } from '@/common/types';

const sidebarStore = useSidebarStore();

const emits = defineEmits<{
	(e: 'submit', formData: FormData): void;
}>();

const formData: FormData = reactive({
	name: '',
	parent: '',
});

const existFolders = ['', 'WebDev', 'Career', 'Study', 'Projects'];

const handleSubmit = () => {
	const index = sidebarStore.list.findIndex((el) => {
		return el?.collection && el.name === formData.name;
	});

	if (index === -1) {
		emits('submit', formData);
	} else {
		console.error('Same folder name');
	}
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
					v-model="formData.parent"
					name="folder"
					label="Родительская группа"
					:options="existFolders"
				/>
			</div>
		</div>
	</form-kit>
</template>
