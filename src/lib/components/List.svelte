<script lang="ts">
	type D = any;
	type P = Record<string, any>;
	type I = any;
	type E = any;
	import TwoLineListItem from './TwoLineListItem.svelte';

	const defaultItemComponent = TwoLineListItem;
	const defaultData: any[] = [];

	export let data: D[] = defaultData;
	export let ItemComponent: I = defaultItemComponent;
	export let EmptyListComponent: E = null;
	export let adaptData = (item: D): P => item;

	$: adaptedData = data.map(adaptData);
</script>

{#if adaptedData.length === 0}
	{#if EmptyListComponent}
		<svelte:component this={EmptyListComponent} />
	{:else}
		<p>No items to display</p>
	{/if}
{:else}
	{#each adaptedData as item}
		<svelte:component this={ItemComponent} {item} />
	{/each}
{/if}
