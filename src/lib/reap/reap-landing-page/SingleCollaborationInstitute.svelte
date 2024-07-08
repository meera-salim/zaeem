<script>
    export let collaboratingInstitutes;
    console.log('collaborating', collaboratingInstitutes)
</script>

{#each collaboratingInstitutes as institute}

<div class="flex flex-col py-2 px-5 items-center md:items-start flex-grow w-fit ">
    <div class="text-3xl font-bold leading-tight text-primary w-fit tracking-tight">
        <img src={institute.image}   alt="" class="h-12 pb-1 object-contain">
    </div>
    <div class="text-xs font-normal leading-normal w-fit">{institute.institute}</div>
</div>

{/each}