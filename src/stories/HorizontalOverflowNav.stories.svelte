<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import HorizontalOverflowNav from '$lib/components/HorizontalOverflowNav.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Components/HorizontalOverflowNav',
		component: HorizontalOverflowNav,
		tags: ['autodocs'],
		argTypes: {
			navItems: { control: 'object' }
		},
		args: {
			navItems: [
				{ label: 'Home', href: '/' },
				{ label: 'About', href: '/about' },
				{ label: 'Contact', href: '/contact' },
				{ label: 'Blog', href: '/blog' },
				{ label: 'Portfolio', href: '/portfolio' }
			]
		}
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Reactive" args={{}} />
