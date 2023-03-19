<script lang="ts" setup>
import AppLayoutSidebar from '@/layouts/AppLayoutSidebar.vue';
import AppLayoutContentPanel from '@/layouts/AppLayoutContentPanel.vue';
</script>

<template>
	<div class="app-layout app-layout--main">
		<AppLayoutSidebar class="app-layout__sidebar" />
		<div class="app-layout__content">
			<AppLayoutContentPanel class="app-layout__content-panel" />
			<AppContainer>
				<slot />
			</AppContainer>
		</div>
	</div>
</template>
