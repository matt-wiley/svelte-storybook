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
    args: {
      title: 'Alice',
      subtitle: 'Developer',
      showPlaceholder: false
    }
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default" />
