<script lang="ts" setup>
import { useNotesStore } from '@/stores/notes';

import AppLayoutSidebar from '@/layouts/AppLayoutSidebar.vue';
import AppLayoutContentPanel from '@/layouts/AppLayoutContentPanel.vue';

const notesStore = useNotesStore();
</script>

<template>
	<div class="app-layout app-layout--main">
		<AppLayoutSidebar
			class="app-layout__sidebar"
		/>
		<div class="app-layout__content">
			<AppLayoutContentPanel
				class="app-layout__content-panel"
			/>
			<div class="app-layout__content-container container">
				<slot />
			</div>
		</div>
	</div>
</template>
