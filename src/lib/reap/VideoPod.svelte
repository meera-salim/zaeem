<script>
    export let video;

</script>
<!-- Be sure to use this with a layout container that is full-width on mobile -->
<div class="overflow-hidden bg-white shadow rounded-md h-48  p-3 hover:cursor-pointer">

        <div class=" flex h-full ">
        <img src={video.thumbnailUrl} alt="" class="h-full w-1/3 rounded-md">
        <div class="flex flex-col gap-3 pl-5 w-full justify-between">
            <div class="flex flex-col gap-2">
                <span class="font-semibold flex-wrap text-sm line-clamp-2" title=
                {video.title} >{video.title}</span>
                <span class="text-xs">{video.courseName}</span>
                <span class="text-xs">{video.description}</span>
            </div>
            
            <div class="text-xs flex justify-between items-center">
                <span class="text-xs rounded-full border-slate-400 border-2 w-fit p-0.5 px-2">{video.duration}</span>
                {#if video.watched}
                <div class="flex align-middle gap-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    <span class="align-middle">watched</span></div>
                {/if}
            </div>
                
                </div>
               
    
        </div>
        
        </div>
    
   

  