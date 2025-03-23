<script lang="ts">
  // Define the expected props type
  interface ItemProps {
    title: string;
    subtitle?: string;
    imageUrl?: string;
    showPlaceholder?: boolean;
    placeholderImage?: string;
    [key: string]: any;
  }

  export let item: ItemProps;
  
  const defaultPlaceholder = "https://placehold.co/100x100/gray/white?text=O";

  // Determine which image URL to use
  let imageToShow: string;
  $: {
    if (item.imageUrl) {
      imageToShow = item.imageUrl;
    } else if (item.showPlaceholder) {
      if (item.placeholderImage) {
        imageToShow = item.placeholderImage;
      } else {
        imageToShow = defaultPlaceholder;
      }
    } else {
      imageToShow = "";
    }
  }
  
  // Determine if we should show any image
  $: showImage = imageToShow !== "";
</script>

<div class="flex p-4 border-b-gray-600 align-middle justify-between" >
  
  {#if showImage}
    <div class="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden mr-4 ml-0">
      <img class="w-full h-full object-cover" src={imageToShow} alt="Item thumbnail" />
    </div>
  {/if}
  
  <div class="flex-grow min-w-0">
    <div class="font-medium text-md text-gray-900 whitespace-nowrap mb-1 overflow-hidden overflow-ellipsis">{item.title || 'No title'}</div>
    <div class="text-sm text-gray-500 whitespace-nowrap overflow-hidden overflow-ellipsis">{item.subtitle || ''}</div>
  </div>
  
</div>