<script>
  import SingleStatsComponent from "./SingleStatsComponent.svelte";
  import { generalStats } from "../data.js";
  console.log(generalStats,'general stats in parent')

</script>

<!-- <div class=" flex flex-wrap sm:flex sm:flex-row space-between bg-ivory rounded-lg items-center  sm:gap-16 p-2.5 shrink-0 sm:flex-nowrap md:flex-nowrap">
  <SingleStatsComponent {generalStats} />

</div> -->

<div class="grid grid-cols-2 bg-orange-10 rounded-lg p-2.5 lg:grid-cols-4  justify-items-start  md:justify-items-center ">
  <SingleStatsComponent {generalStats} />

</div>