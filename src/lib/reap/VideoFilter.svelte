<script>
    import SideBar from './sideBar.svelte'
    import VideoListing from './videoListing.svelte'

let sideBarCategoryId = '';


   let handleSidebarClick = function(e){
       sideBarCategoryId= e.detail;
   }

   let handleClearFilter = function (e){
    sideBarCategoryId = e.detail
   }

</script>

<div class="w-full p-12 flex gap-10 bg-lightGray100 h-screen">
<div class="">
    <SideBar on:handleSideBarCategoryId ={handleSidebarClick} on:handleDispatchClearFilter ={handleClearFilter}/>
</div>
<div class="w-9/12">
    <VideoListing sideBarCategoryId={sideBarCategoryId}/>
</div>
    
    
</div>
