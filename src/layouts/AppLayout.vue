<script lang="ts" setup>
import { shallowRef, watch } from 'vue';
import { useRoute } from 'vue-router';
import AppLayoutDefault from '@/layouts/AppLayoutDefault.vue';

const route = useRoute();
const layout = shallowRef<any>(null);

watch(
	() => route.meta,
	async meta => {
		try {
			const component = await import(`./${meta.layout}.vue`);
			layout.value = component?.default || AppLayoutDefault;
		} catch (e) {
			layout.value = AppLayoutDefault;
		}
	},
);
</script>

<template>
	<component :is="layout">
		<slot />
	</component>
</template>
