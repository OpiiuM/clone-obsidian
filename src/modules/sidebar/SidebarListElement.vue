<script lang="ts" setup>
// import { useRouter } from 'vue-router';

import SidebarListElementNote from './SidebarListElementNote.vue';

import type { Note } from '@/common/types/note';
import type { Folder } from '@/common/types/folder';

// const router = useRouter();

const props = defineProps<{
	element: Note | Folder,
}>();

// const folderClickHandler = (id: number | string) => {
// 	console.log('folder - click', id);
// };

// const noteClickHandler = (id: number | string) => {
// 	router.push({ path: `/${id}` });
// };
</script>

<template>
	<div class="sidebar-element">
		<template v-if="props.element.collection">
			<div class="sidebar-element__folder folder">
				<sidebar-list-element-note
					:id="props.element.id"
					:name="props.element.name"
					:is-heading="true"
					@click-note="folderClickHandler"
				/>
				<ul class="folder__list">
					<li
						v-for="note in props.element.collection"
						:key="note.id"
						class="folder__list-item"
					>
						<sidebar-list-element-note
							:id="note.id"
							:name="note.title"
							@click-note="subNoteClickHandler"
						/>
					</li>
				</ul>
			</div>
		</template>
		<template v-else>
			<sidebar-list-element-note
				:id="props.element.id"
				:name="props.element.title"
				@click-note="noteClickHandler(props.element.id)"
			/>
		</template>
	</div>
</template>

<style lang="scss" scoped>
.folder {
	&__list {
		position: relative;

		padding-left: rem($gap-medium);

		&::before {
			position: absolute;
			top: rem($gap-micro);
			bottom: rem($gap-micro);
			left: rem(15px);

			width: rem(1px);

			content: "";

			background-color: $white;
		}

		&-item {}
	}
}    
</style>
