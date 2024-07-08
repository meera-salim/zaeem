<script>
import {testimonials} from '../data.js'
  import IndividualTestimonial from './IndividualTestimonial.svelte';
  console.log(testimonials,'testimonials in parent')
</script>

<div class="py-16 px-24">
    <div class="text-3xl font-semibold text-primary mb-8">Hear from our alumni.</div>
    <div class="grid grid-cols-4 gap-5">
    
        <IndividualTestimonial {testimonials}/>
    </div>
</div>
