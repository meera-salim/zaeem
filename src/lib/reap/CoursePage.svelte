<script>
  import ApplyFilterComponent from './ApplyFilterComponent.svelte';
    import SideBar from './CourseSideBar.svelte'
    import CourseListing from './CourseListing.svelte'

let sideBarCategoryId = '';
let applyFilterDataObj = '';


   let handleSidebarClick = function(e){
       sideBarCategoryId= e.detail;
   }

   let handleSidebarClearFilter = function (e){
    sideBarCategoryId = ''
   }

   let handleApplyFilter= function(e){
    applyFilterDataObj=e.detail

   }

</script>

<div class="w-full p-12 flex gap-10 bg-lightGray100 ">
<div class="w-2/12">
    <SideBar on:handleSideBarCategoryId ={handleSidebarClick} on:handleDispatchClearFilter ={handleSidebarClearFilter}/>
</div>
<div class="w-10/12 flex flex-col gap-4">
    <ApplyFilterComponent on:handleFilterDataObject={handleApplyFilter} />
    <CourseListing sideBarCategoryId={sideBarCategoryId} applyFilterDataObj ={applyFilterDataObj}/>
</div>
    
    
</div>
