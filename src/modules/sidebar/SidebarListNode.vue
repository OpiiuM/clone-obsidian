<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useSidebarStore, useNotesStore } from '@/stores';

import SidebarListElementNote from './SidebarListElementNote.vue';

export default defineComponent({
	name: 'sidebar-list-node',

	components: {
		SidebarListElementNote,
	},

	props: {
		node: {
			type: Object,
			default: () => {},
		},
	},

	setup(props) {
		const router = useRouter();
		const sidebarStore = useSidebarStore();
		const notesStore = useNotesStore();

		const isOpenNode = ref(false);

		watch(
			() => sidebarStore.getFolderExpanded,
			(newValue) => {
				isOpenNode.value = newValue;
			},
		);

		const hasChildren = computed(() => {
			return props.node.collection && props.node.collection.length;
		});

		const folderClickHandler = (id: string, openStatus: boolean) => {
			isOpenNode.value = openStatus;
		};

		const noteClickHandler = (id: string) => {
			router.push(`/${id}`);
			notesStore.addNoteToHistory(id);
		};

		return {
			isOpenNode,
			hasChildren,
			folderClickHandler,
			noteClickHandler,
		};
	},
});
</script>

<template>
	<li
		class="sidebar-list-node"
		:class="{ 'sidebar-list-node--open': node.collection && isOpenNode }"
	>
		<template v-if="node.collection">
			<sidebar-list-element-note
				class="sidebar-list-node__name"
				:id="node.id"
				:name="node.name"
				:is-heading="true"
				:is-open="isOpenNode"
				@click-note="folderClickHandler"
			/>
		</template>
		<template v-else>
			<sidebar-list-element-note
				:id="node.id"
				:name="node.name"
				@click-note="noteClickHandler"
			/>
		</template>

		<ul v-if="hasChildren" class="sidebar-list-node__list">
			<sidebar-list-node
				v-for="child in node.collection"
				:key="child.id"
				:node="child"
			/>
		</ul>
	</li>
</template>

<style lang="scss" scoped>
.sidebar-list-node {
	&--open & {
		&__list {
			display: block;
		}

		&__list &__list {
			display: none;
		}
	}

	&__list {
		position: relative;

		display: none;

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
	}
}
</style>
