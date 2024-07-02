<script>
    import { createEventDispatcher, onMount } from "svelte";
    const dispatch = createEventDispatcher();
    
  
    export let filter;
    export let selectedItemId = "";
    export let selectedItemName = "";
    export let multiSelectSavedID;
    let filterData = filter.data;
    let showDropdown = false;
    let dropDownRef;
    let selectedItems=multiSelectSavedID?multiSelectSavedID:''
    let objToDispatch = []
  
    
  
    onMount(() => {
      document.addEventListener("click", handleClickOnDocument);
      function handleClickOnDocument(e) {
        if (dropDownRef && dropDownRef.contains(e.target)) showDropdown = true;
        else showDropdown = false;
      }
    
    });


    function handleCheck(id){
      
      for(let i=0;i<selectedItems.length;i++){
        if(Number(selectedItems[i].id) === Number(id))return true
        else return false
      }
  }
  
  

  function handleListItemSelection(e) {
      
      selectedItemId = e.target.closest("li").dataset.id;
      selectedItemName = e.target.closest('label').textContent;
      console.log(selectedItems)
      let newObj = [selectedItemId,selectedItemName]
      
      objToDispatch = [...objToDispatch,newObj]
      dispatch('handleDispatchFilterData', {[filter.filterCategory]:objToDispatch})
    }

  
  
  function clearSelection() {
      showDropdown = false;
      selectedItemName = "";
      selectedItemId =""
      dispatch('handleDispatchFilterData', {[filter.filterCategory]:{}})
  
    }

  </script>
  
  <div>
    {#if filter.typeOfFilter === "multiSelectComboBox"}
      <label
        for="combobox"
        class="block text-sm font-medium leading-5 text-gray-900 capitalize"
        >{filter.filterCategory}</label
      >
      <div
        class=" relative mt-2"
        bind:this={dropDownRef}
      >
        <input
          id="combobox" class="capitalize w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " role="combobox" aria-controls="options" aria-expanded="false"
          placeholder= {`Select ${filter.filterCategory}`}
         
        />
        {#if selectedItemName}
          <button
            type="button"
            class="absolute inset-y-0 right-4 flex items-center rounded-r-md px-4 focus:outline-none"
            on:click={clearSelection}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        {/if}
  
        <button
          type="button"
          class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
          on:focus={() => (showDropdown = !showDropdown)}
        >
          <svg
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
  
        {#if showDropdown}
          <ul
            class=" absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            id="options"
            role="listbox"
            on:click|capture={handleListItemSelection}
          
          >
            {#each filterData as data}
              {#if data}
              
                <li
                  data-id={data.id}
                  class="  relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                  id="option-0"
                  role="option"
                  tabindex="-1"
                
                >

                    <div class="space-y-5 capitalize">
                     
                        <div class="relative flex items-start">
                           
                            <div class="ml-3 text-sm leading-6">
                              <label for={data.id} class="font-medium text-gray-900"> 
                                
                                    <div class="flex h-6 items-center">
                                    <input id={data.id} data-id={data.id} aria-describedby="comments-description" name={data.id} type="checkbox" value={data.id} class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                 
                                    bind:group={selectedItems}
    
                                 
                                    > 
                                    <div class="pl-2">
                                      {data.item}
                                    </div>
                                  </div></label> 
                              
                        
                            </div>
                          </div>
                        
                    
                    </div>
                  
  
                </li>
              {/if}
            {/each}
          </ul>
        {/if}
      </div>
    {/if}
  </div>
  