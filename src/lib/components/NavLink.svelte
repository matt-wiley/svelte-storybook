<script lang="ts">
	export let label: string = 'NavLink';
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let href: string = '#';

	const configurableStyles = {
		small: 'p-2',
		medium: 'p-3',
		large: 'p-4'
	};

	$: sizeStyle= configurableStyles[size]; 
  $: configuredClasses = [sizeStyle].join(' ').trim();

</script>

<a
	class={`block font-bold cursor-pointer hover:text-red-500 ${configuredClasses}`}
	{href}>{label}</a
>
