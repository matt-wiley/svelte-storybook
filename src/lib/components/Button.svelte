<script lang="ts">
	export let label: string = 'Button';
	export let primary: boolean = false;
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let onClick: () => void;

  const configurableStyles = {
			primary: 'bg-blue-500 text-white hover:bg-blue-700',
			secondary: 'bg-gray-300 text-gray-700 hover:bg-gray-400',
			small: 'p-2',
			medium: 'p-3',
			large: 'p-4'
		};
  $: prominenceStyle = configurableStyles[primary ? 'primary' : 'secondary'];
  $: sizeStyle = configurableStyles[size];
  $: configuredClasses = [prominenceStyle, sizeStyle].join(' ').trim();
  
</script>

<button
	type="button"
	class={`cursor-pointer rounded-xl font-bold ${configuredClasses}`}
	onclick={onClick}>{label}</button
>
