<script lang="ts" setup>
import AppLayoutSidebar from '@/layouts/AppLayoutSidebar.vue';
import AppLayoutContentPanel from '@/layouts/AppLayoutContentPanel.vue';
</script>

<template>
	<div class="app-layout app-layout--main">
		<app-layout-sidebar />
		<div class="app-layout__content">
			<app-layout-content-panel
				class="app-layout__content-panel"
			/>
			<div class="app-layout__content-container container">
				<slot />
			</div>
		</div>
	</div>
</template>
