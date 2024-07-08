<script>
    export let studentLifeCycle;
    console.log(studentLifeCycle.description)
    
</script>





{#each studentLifeCycle as lifeCycle}

<div class="flex flex-col py-2 px-5 items-center flex-grow w-fit ">
    <div class="text-3xl font-bold leading-tight text-primary w-fit tracking-tight">
        <img src={lifeCycle.img}   alt="" class="h-48 pb-1 object-contain">
    </div>
    <div class="text-xs font-normal leading-normal w-fit">{lifeCycle.description}</div>
</div>

{/each}

