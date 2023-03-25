<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRouter } from 'vue-router';

import SidebarListElementNote from './SidebarListElementNote.vue';

export default defineComponent({
	name: 'node-tree',

	components: {
		SidebarListElementNote,
	},

	props: {
		node: Object,
		default: () => {},
	},

	setup(props) {
		const router = useRouter();

		const hasChildren = computed(() => {
			return props.node.collection && props.node.collection.length;
		});

		const folderClickHandler = (id: number | string) => {
			console.log('folder - click', id);
		};

		const noteClickHandler = (id: number | string) => {
			router.push({ path: `/${id}` });
		};

		return {
			hasChildren,
			folderClickHandler,
			noteClickHandler,
		};
	},
});
</script>

<template>
	<li class="node-tree">
		<template v-if="hasChildren">
			<sidebar-list-element-note
				:id="node.id"
				:name="node.name"
				:is-heading="true"
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

		<ul v-if="hasChildren">
			<node-tree
				v-for="child in node.collection"
				:key="child.id"
				:node="child"
			/>
		</ul>
	</li>
</template>

<style lang="scss" scoped>
ul {
	margin-left: rem($gap-medium);
}
</style>
