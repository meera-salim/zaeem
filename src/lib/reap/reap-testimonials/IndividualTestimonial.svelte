<script>
    export let testimonials;
    console.log(testimonials,'testimonials')
</script>

{#each testimonials as testimonial}



<div class=" flex flex-col shadow-lg rounded-lg px-10 py-4  gap-5 justify-between  items-start text-DarkGray ">
   
<div class="flex flex-col gap-2">
    <div >
        <img src={testimonial.img} alt="" class="object-contain px-6 py-4">
        <div class="flex flex-col  pb-4">
            <div class="text-sm font-bold ">{testimonial.name}</div>
            <p class="text-xs">{testimonial.designation}</p>
            
        </div>
        
    </div>
    


    
<div class="flexflex-col items-center">
  

    
    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.545455 8V5.95454C0.545455 5.33333 0.655303 4.67424 0.875 3.97727C1.10227 3.27273 1.42803 2.5947 1.85227 1.94318C2.28409 1.28409 2.80303 0.71212 3.40909 0.227272L4.86364 1.40909C4.38636 2.09091 3.9697 2.80303 3.61364 3.54545C3.26515 4.2803 3.09091 5.06818 3.09091 5.90909V8H0.545455ZM6.36364 8V5.95454C6.36364 5.33333 6.47348 4.67424 6.69318 3.97727C6.92045 3.27273 7.24621 2.5947 7.67045 1.94318C8.10227 1.28409 8.62121 0.71212 9.22727 0.227272L10.6818 1.40909C10.2045 2.09091 9.78788 2.80303 9.43182 3.54545C9.08333 4.2803 8.90909 5.06818 8.90909 5.90909V8H6.36364Z" fill="#424242" class="inline"/>
        </svg>
    
        
    <p class="text-sm leading-normal text-darkGray px-2">
        
       {testimonial.testimonialText}
    </p>
        
</div>
</div>



    <a href="" class="text-xs text-secondary tracking-tight ">Visit {testimonial.course} course →</a>
</div>

{/each}
