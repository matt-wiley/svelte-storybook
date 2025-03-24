<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TwoLineListItem from '$lib/components/TwoLineListItem.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Components/TwoLineListItem',
    component: TwoLineListItem,
    tags: ['autodocs'],
    argTypes: {
      title: { control: 'text' },
      subtitle: { control: 'text' },
      imageUrl: { control: 'text' },
      showPlaceholder: { control: 'boolean' },
      placeholderImage: { control: 'text' }
    },
    args: {}
  });
</script>

<!--
By default, the component will render with the `title` "No title", the `subtitle` "No subtitle", and no image shown.
-->
<Story name="Default" />


<!-- 
If provided, the component will render with the given `title` and `subtitle`.
-->
<Story name="With Title and Subtitle" args={{
  title: 'Alice',
  subtitle: 'Developer'
}} />

<!-- 
If an `imageUrl` is provided, the component will render with the given title, subtitle, and image.
-->
<Story name="With Title, Subtitle, and Image" args={{
  imageUrl: 'https://placehold.co/100x100/red/white?text=A'
}} />


<!--
If no `imageUrl` is provided, the `showPlaceholder` flag can be set to `true` to render a placeholder image.
-->
<Story name="With Placeholder Image" args={{
  showPlaceholder: true
}} />

<!--
The `imageUrl` will take precedence over the `showPlaceholder` flag.
-->
<Story name="With Image and Placeholder Image" args={{
  imageUrl: 'https://placehold.co/100x100/blue/white?text=B',
  showPlaceholder: true
}} />

<!-- 
Putting it all together.
-->
<Story name="With All Props" args={{
  title: 'Charlie',
  subtitle: 'Product Manager',
  imageUrl: 'https://placehold.co/100x100/green/white?text=C',
  showPlaceholder: true
}} />
