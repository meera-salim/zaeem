<script>
    import SingleCollaborationInstitute from "./SingleCollaborationInstitute.svelte";
    import { collaboratingInstitutes } from "../data.js";
    console.log(collaboratingInstitutes,'general stats in parent')
  
  </script>
  
  
  <div>
  <div class="text-sm ">A collaborative effort of</div>
  <div class="grid grid-cols-2 rounded-lg p-2.5 justify-items-center sm:grid-cols-4">
    <SingleCollaborationInstitute {collaboratingInstitutes} />
  
  </div>
</div>