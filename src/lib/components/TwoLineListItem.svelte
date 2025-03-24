<script lang="ts">
  export let title: string = "No title";
  export let subtitle: string = "No subtitle";
  export let imageUrl: string = "";
  export let showPlaceholder: boolean = false;
  export let placeholderImage: string = "https://placehold.co/100x100/gray/white?text=O";

  $: imageToShow = imageUrl ? imageUrl : showPlaceholder ? placeholderImage : "";
  $: showImage = imageToShow !== "";

</script>

<div class="flex flex-row p-4 border-b-gray-600 justify-start" >
  
  {#if showImage}
    <div class="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden mr-4 ml-0">
      <img class="w-full h-full object-cover" src={imageToShow} alt="Item thumbnail" />
    </div>
  {/if}
  
  <div class="flex-grow min-w-0 h-full align-middle">
    <div class="font-medium text-md text-gray-900 whitespace-nowrap mb-1 overflow-hidden overflow-ellipsis">{title}</div>
    <div class="text-sm text-gray-500 whitespace-nowrap overflow-hidden overflow-ellipsis">{subtitle}</div>
  </div>
  
</div>