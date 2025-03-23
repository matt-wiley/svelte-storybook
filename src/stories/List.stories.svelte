<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import List from '$lib/components/List.svelte';
	import TwoLineListItem from '$lib/components/TwoLineListItem.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Components/List',
		component: List,
		tags: ['autodocs'],
		argTypes: {},
		args: {}
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default (TwoLineListItem)" />

<Story
	name="Custom Data (TwoLineListItem)"
	args={{
		data: [
			{ name: 'Alice', jobTitle: 'Developer' },
			{ name: 'Bob', jobTitle: 'Designer' },
			{ name: 'Charlie', jobTitle: 'Product Manager' }
		],
		ItemComponent: TwoLineListItem,
		adaptData: (item) => ({ title: item.name, subtitle: item.jobTitle })
	}}
/>

<Story
	name="Custom w/ Placeholder Image (TwoLineListItem)"
	args={{
		data: [
			{ name: 'Alice', jobTitle: 'Developer' },
			{ name: 'Bob', jobTitle: 'Designer' },
			{ name: 'Charlie', jobTitle: 'Product Manager' }
		],
		ItemComponent: TwoLineListItem,
		adaptData: (item) => ({ title: item.name, subtitle: item.jobTitle, showPlaceholder: true })
	}}
/>
