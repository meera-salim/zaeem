<script>
    import DropdownProduct from "./DropdownProduct.svelte";
    import DropdownCompany from "./DropdownCompany.svelte";
    import { onMount } from "svelte";
   
    let mouseEnterProduct = false;
    let mouseEnterCompany = false;
    
  
  
    function handleDropdownProduct() {
      mouseEnterProduct = !mouseEnterProduct;
    }
  
    function handleDropdownCompany() {
      mouseEnterCompany = !mouseEnterCompany;
    }
  
    // onMount(()=>{
  
    //For Achieving fixed class that changes to more white in color once it moves//
    //   const nav = document.querySelector('.navigation-header-parent')
    // console.log(nav)
  
    // function obsCallback(entries){
    //   const [entry]=entries;
    //   console.log(entry)
    //   if(entry.intersecting)
    //   nav.classList.add('sticky')
  
    // }
  
    // const obsOptions = {
    //   root:null,
    //   threshold :0.1,
  
    // }
  
    // const observer = new IntersectionObserver(obsCallback, obsOptions)
  
    // observer.observe(nav)
  
    // })
  </script>
  
  <div class="navigation-header-parent">
  <div class="navigation-header">
    <div class="nav-left">
      <div class="logo">Logo</div>
      <div
        class="dropdown"
  
        on:mouseenter={handleDropdownProduct}
        on:mouseleave={handleDropdownProduct}
        
      >
      <!-- <div
        class="dropdown"
        on:mouseover={handleDropdownProduct}
      > -->
        <div>Products</div>
        <svg
        class:active-nav-left-svg={mouseEnterProduct === true}
          class="show-dropdown"
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L4 4L7 1"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <div
          class="dropdown-content-parent dropdown-content-product-width"
          class:active={mouseEnterProduct === true}
  
        >
          <DropdownProduct />
        </div>
      </div>
  
      <div>Solutions</div>
      <div
        class="dropdown"
        on:mouseenter={handleDropdownCompany}
        on:mouseleave={handleDropdownCompany}
      >
        <div>Company</div>
        <svg
          class="show-dropdown"
          class:active-nav-left-svg={mouseEnterCompany === true}
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L4 4L7 1"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <div
          class="dropdown-content-parent dropdown-content-company-width"
          class:active={mouseEnterCompany === true}
  
        >
          <DropdownCompany />
        </div>
      </div>
    </div>
    <div class="nav-right">
   
      <span>Let's talk</span>
      <span 
      ><svg 
     
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="arrow-diagonal-svg"
        >
          <path
            d="M12 11.5L12 0.5L1 0.5"
            stroke="currentColor"
          ></path>
          <path
            d="M12 0.5L1.09017 11.4098"
            stroke="currentColor"
          ></path>
        </svg></span
      >
    </div>
  </div>
  </div>
  
  <style>
    /*Navigation*/
  
    .navigation-header-parent{
      width: 100%;
          background-color:rgba(248, 247, 252,0.5);
          padding-left: 8rem;
          padding-right: 8rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          position: fixed;
          backdrop-filter: blur(10px);
          
  
    }
  
    .navigation-header {
      display: flex;
      justify-content: space-between;
      padding-top: 1rem;
      font-size: 1.125rem;
      color: #212121;
      font-weight: 300;
      flex-wrap: nowrap;
    
      
    }
  
    .nav-left {
      display: flex;
      gap: 3rem;
    }
    .nav-right {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  
    /*Dropdown*/
    .dropdown {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .show-dropdown {
      vertical-align: text-top;
    }
  
    .dropdown-content-parent {
      position: absolute;
      z-index: 100;
      top: 4rem;
      opacity:0;
      transition: all 0.2s ease-in;
      pointer-events: none;
    }
  
  
    .dropdown-content-product-width {
      width: 32rem;
    }
  
    .dropdown-content-company-width {
      width: 12rem;
    }
  
    .active {
      opacity: 1;
      top: 2.5rem;
    }
  
   .show-dropdown{
    transition: all 0.2s ease-in;
    }
  
    .dropdown-hover{
      opacity: 1;
    }
  
    .arrow-diagonal-svg{
      transition: all 0.2s ease-in;
    }
  
    .nav-right:hover .arrow-diagonal-svg{
      transform: rotate(90deg)
    }
   
   
    .active-nav-left-svg{
      transform: rotate(180deg);
    }
  
    .sticky{
      position: fixed;
      color: black;
    }
    
  </style>
  