<script>
  import { createEventDispatcher } from 'svelte';
  import {filters} from './data.js';
  import DropDown from './DropDown.svelte';
  import SearchableComboBox from './SearchableComboBox.svelte';
  import MultiSelectComboBox from './MultiSelectComboBox.svelte';


let multiSelectSavedID = [1]
let dispatch=createEventDispatcher();
 let filterDataObject={}

function handleApplyFilter(){
    dispatch('handleFilterDataObject',filterDataObject)

}

function handleFilterData(e){
    let newFilterDataObj = e.detail;
    console.log(newFilterDataObj,'newFilterDataObj')
    filterDataObject={...filterDataObject,...newFilterDataObj}

    console.log('filterDataObj', filterDataObject)

}

</script>


<div class="w-full flex justify-end items-end gap-2 flex-wrap">
{#each filters as filter(filter.categoryId)}
{#if filter.typeOfFilter === 'comboBox'}
    
<SearchableComboBox {filter}  on:handleDispatchFilterData={(e)=>handleFilterData(e)}/>
{/if}

{#if filter.typeOfFilter === 'dropDown'}

<DropDown {filter} on:handleDispatchFilterData={(e)=>handleFilterData(e)}/>
    
{/if}

{#if filter.typeOfFilter === 'multiSelectComboBox'}

<MultiSelectComboBox {filter} {multiSelectSavedID} on:handleDispatchFilterData={(e)=>handleFilterData(e)}/>

{/if}

    {/each}
 <div>
    <button type="button" class="rounded-lg bg-indigo-600 px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" on:click={handleApplyFilter}>Apply Filter</button>
 </div>
    
</div>