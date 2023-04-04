<script lang="ts" setup>
import { watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useSidebarStore } from '@/stores';

import NoteTag from '@/modules/note/NoteTag.vue';

import type { INote } from '@/common/interfaces';

const route = useRoute();
const router = useRouter();
const sidebarStore = useSidebarStore();

let note: INote;
let tags: string[];

watchEffect(() => {
	note = sidebarStore.getNoteById(route.params.id);

	if (!note) {
		router.push('/');
	}

	tags = note.tags
			.split(';')
			.map((el: string) => el.trim());
});
</script>

<template>
	<article class="note-view">
		<header class="note-view__header">
			<h2 class="note-view__title">
				{{ note.name }}
			</h2>

			<ul v-if="tags?.length" class="note-view__tags">
				<li
					v-for="(tag, index) in tags"
					:key="index"
					class="note-view__tags-item"
				>
					<NoteTag>#{{ tag }}</NoteTag>
				</li>
			</ul>
		</header>

		<div class="note-view__content">
			{{ note.content }}
		</div>
	</article>
</template>

<style lang="scss" scoped>
.note-view {
	&__header {
		margin-bottom: rem($gap);
		padding-bottom: rem($gap);

		border-bottom: rem(2px) solid $mine-shaft-2;
	}

	&__title {
		margin-bottom: rem($gap-mini);
	}

	&__tags {
		display: flex;
		flex-wrap: wrap;

		margin: rem(-$gap-mini) rem(-$gap-micro) 0;

		&-item {
			margin-top: rem($gap-mini);
			padding: 0 rem($gap-micro);
		}
	}

	&__content {}
}
</style>
