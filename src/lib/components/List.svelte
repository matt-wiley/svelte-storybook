<script lang="ts">
  type D = any;
  type P = Record<string, any>;
  type I = any;
  import TwoLineListItem from "./TwoLineListItem.svelte";

  const defaultItemComponent = TwoLineListItem;
  const defaultData = [
    { title: "Item 1", subtitle: "Subtitle 1" },
    { title: "Item 2", subtitle: "Subtitle 2" },
    { title: "Item 3", subtitle: "Subtitle 3" },
  ]

  export let data: D[] = defaultData;
  export let ItemComponent: I = defaultItemComponent;
  export let adaptData = (item: D): P => item;

  $: adaptedData = data.map(adaptData);

</script>

{#each adaptedData as item}
  <svelte:component this={ItemComponent} {item} />
{/each}