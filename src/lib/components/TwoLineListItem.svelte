<script lang="ts">
  import type { Optional } from "$lib/types";

  // Define the expected props type
  interface ItemProps {
    title: string;
    subtitle?: string;
    imageUrl?: string;
    showPlaceholder?: boolean;
    placeholderImage?: string;
  }

  export let item: Optional<ItemProps>;

  export let title: string = "No title";
  export let subtitle: string = "No subtitle";
  export let imageUrl: string = "";
  export let showPlaceholder: boolean = false;
  export let placeholderImage: string = "https://placehold.co/100x100/gray/white?text=O";

  let _title: string;
  let _subtitle: string;
  let _imageUrl: string;
  let _showPlaceholder: boolean;
  let _placeholderImage: string;

  let _imageToShow: string;
  let _showImage: boolean;

  $: {
    _title = item?.title ?? title;
    _subtitle = item?.subtitle ?? subtitle;
    _imageUrl = item?.imageUrl ?? imageUrl;
    _showPlaceholder = item?.showPlaceholder ?? showPlaceholder;
    _placeholderImage = item?.placeholderImage ?? placeholderImage;

    _imageToShow = _imageUrl ? _imageUrl : _showPlaceholder ? _placeholderImage : "";
    _showImage = _imageToShow !== "";
  }
</script>

<div class="flex p-4 border-b-gray-600 align-middle justify-between" >
  
  {#if _showImage}
    <div class="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden mr-4 ml-0">
      <img class="w-full h-full object-cover" src={_imageToShow} alt="Item thumbnail" />
    </div>
  {/if}
  
  <div class="flex-grow min-w-0">
    <div class="font-medium text-md text-gray-900 whitespace-nowrap mb-1 overflow-hidden overflow-ellipsis">{_title}</div>
    <div class="text-sm text-gray-500 whitespace-nowrap overflow-hidden overflow-ellipsis">{_subtitle}</div>
  </div>
  
</div>