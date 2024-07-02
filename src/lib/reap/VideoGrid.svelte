<script>
    import FilterComponent from './ApplyFilterComponent.svelte';
import VideoPod from './VideoPod.svelte'
    import {videos} from './data.js'
    
</script>
<!-- 
<div class="sm:grid-cols-1 grid lg:grid-cols-3 md:grid-cols-2 gap-2 m-6">

    {#each videos as video(video.id)}
    <VideoPod video={video}/>
    {/each}

</div> -->

<FilterComponent />