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
    // selectedItemId=1
    // selectedItemName=filter.data[0].state
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

</script>

<div class="relative inline-block text-left">
  <div  bind:this={dropDownRef}>
    <label for="button" class="text-sm">Status</label>
    <button type="button" class="capitalize inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true"
    on:focus={() => (showDropdown = true)}>
      {selectedItemName ? selectedItemName :'Select'}
      <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

 

  
  <div class=" absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"
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
