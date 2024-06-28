<script>
    import {filters} from './data.js'
  import SearchableComboBox from './SearchableComboBox.svelte';
//   const [filter]=filters;
//   console.log(filter)

function handleApplyFilter(){

}

</script>


<div class="flex justify-around items-center">
{#each filters as filter(filter.categoryId)}
    <SearchableComboBox filter = {filter}/>

    {/each}
 <div>
    <button type="button" class="rounded-lg bg-indigo-600 px-2 py-0.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" on:click={handleApplyFilter}>Apply Filter</button>
 </div>
    
</div>