<script>

import {createEventDispatcher} from 'svelte';
const dispatch = createEventDispatcher();

let sideBarCategoryId;

    const sideBarList = [
        {
    "id": 1,
    "name": 'Most popular',
    "categoryId":"most-pop"
  },
  {
    "id": 2,
    "name": 'Agricultural programmes',
    "categoryId":"agri-prog"
  },
  {
    "id": 3,
    "name": 'Product programmes',
    "categoryId":"product-prog"
  
  },
  {
    "id": 4,
  "name": 'Process programmes',
  "categoryId":"process-prog"
  },
  {
    "id": 5,
  "name": 'General EDP',
  "categoryId":"gen-EDP"
  },
    ]
    

    function handleDespatchSidebarId (sideBarItem){
       sideBarCategoryId = sideBarItem.categoryId
        console.log(sideBarCategoryId)
        dispatch('handleSideBarCategoryId',sideBarCategoryId)
    }
    
    function handleDispatchClearFilter(){
      sideBarCategoryId = ''
      dispatch('handleDispatchClearFilter', sideBarCategoryId)

    }

</script>


<div class="tracking-wide text-base  ">
    <h2 class="pb-8">Categories</h2>

    <ul class="flex flex-col gap-y-8 ">

        {#each sideBarList as sideBarItem(sideBarItem.id)}
        <div class="hover:bg-lightGray300 hover:rounded-md">
            <a href="" class="cursor-pointer block px-3 py-2" id="most-popular" on:click={()=>handleDespatchSidebarId(sideBarItem)}>{sideBarItem.name}</a>
          </div>
        {/each}
        {#if sideBarCategoryId}

      <button class="rounded-md bg-slate-300 p-2" on:click={handleDispatchClearFilter}>Clear filter</button>

      {/if}
    </ul>

</div>