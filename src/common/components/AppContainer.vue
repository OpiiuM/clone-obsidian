<template>
	<div class="container">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.container {
	max-width: rem($container-width);
	margin: 0 auto;
	padding: 0 rem($gap-small);
}
</style>
