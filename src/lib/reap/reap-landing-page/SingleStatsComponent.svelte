<script>
    export let generalStats;
    console.log('generalStats', generalStats)
</script>

{#each generalStats as stats}

<div class="flex flex-col py-2 px-2 items-center  flex-grow w-fit flex-nowrap  ">
    <div class="display-inline text-xl lg:text-2xl font-bold leading-tight text-primary  tracking-tight ">{stats.statValue}</div>
    <div class="text-xs font-normal leading-normal w-fit">{stats.statName}</div>
</div>



{/each}

