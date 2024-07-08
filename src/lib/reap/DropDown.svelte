<script>
  import {onMount, createEventDispatcher} from 'svelte'
  const dispatch = createEventDispatcher()
  export let filter;
  export let selectedItemId = "";
  export let selectedItemName = "";
  let filterData = filter.data;
  let showDropdown = false;
  let dropDownRef;

  onMount(() => {
    document.addEventListener("click", handleClickOnDocument);
    function handleClickOnDocument(e) {
      if (dropDownRef && dropDownRef.contains(e.target)) showDropdown = true;
      else showDropdown = false;
    }
  });

  function handleListItemSelection(e) {
    e.preventDefault();
    selectedItemId = e.target.closest("a").dataset.id;
    let selectedItemTextContent = e.target.textContent;
    selectedItemName = selectedItemTextContent.toLowerCase()
    showDropdown = false;
    console.log(selectedItemName,'dropdown name')
    dispatch('handleDispatchFilterData', {[filter.filterCategory]:{selectedItemId,selectedItemName}})
  }

  function handleClearSelection(){
  console.log('clear clicked')
 selectedItemId = "";
 selectedItemName = "";
 showDropdown = false
}
</script>

<div class="relative inline-block text-left ">
  
    <label for="button" class="block text-sm font-medium leading-5 text-gray-900 capitalize">Status</label>
    <div class="relative mt-2" bind:this={dropDownRef}>
    <button type="button" class="capitalize inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white py-1.5 pl-3 pr-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50  md:text-sm lg:text-sm" id="menu-button" aria-expanded="true" aria-haspopup="true"
    on:focus={() => (showDropdown = true)}>
      {selectedItemName ? selectedItemName :'Select'}

      {#if showDropdown === false}
      <div class="">
        <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>
      </div>
      {:else}
      <button  on:click={handleClearSelection}>
      <svg class="-mr-1 h-5 w-5 size-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      {/if}

    </button>
  </div>

 

  
  <div class=" absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-0 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"
 >
  {#if showDropdown}
    <div class="py-1" role="none"  on:click={handleListItemSelection}>
 {#each filterData as data}
      <a  data-id={data.id} href="#" class="capitalize block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0" >{data.item}</a>
      {/each}
      
    </div>
    {/if}
  </div>
</div>
