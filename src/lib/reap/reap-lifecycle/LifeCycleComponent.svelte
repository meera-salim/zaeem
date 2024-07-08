<script>
     import { studentLifeCycle } from "../data.js";
     import SingleLifeCycleElement from './SingleLifeCycleElement.svelte'
</script>

<div>
    <h1 class="text-3xl font-semibold text-primary">Invest in yourself and REAP the rewards</h1>
    <p>Upskill , Reskill and Transform your careers with Government of India approved courses</p>
<div class="grid grid-cols-2 rounded-lg p-2.5 lg:grid-cols-4  justify-items-start  md:justify-items-center ">
    <SingleLifeCycleElement {studentLifeCycle}/>
  
  </div>
  </div>