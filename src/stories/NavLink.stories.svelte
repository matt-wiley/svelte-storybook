<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import NavLink from '$lib/components/NavLink.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Components/NavLink',
    component: NavLink,
    tags: ['autodocs'],
    argTypes: {
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
      href: { control: 'text' }
    },
    args: {}
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Small" args={{ size: "small" }} />

<Story name="Medium" args={{ size: "medium" }} />

<Story name="Large" args={{ size: "large" }} />
