<script>
    import NavBar from "./NavBar.svelte";
    </script>
    
    
    <div class="hero-section-parent">
    <div class='hero-section'>
        <div class="hero-left">
            <h1 class="hero-heading">
                Amplify human <span class="italic">potential</span>
            </h1>
            <p class="hero-section-para">
               Power your most critical enterprise workflows with accurate,<br>
                reliable, and scalable generative AI – tailored to your specific needs.
            </p>
        </div>
        <div class="hero-right">
                    <button class="hero-right-btn-1"><span class="hero-button-text">START BUILDING</span>
                        <span ><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-diagonal-svg">
                            <path d="M12 11.5L12 0.5L1 0.5" stroke="currentColor"></path>
                            <path d="M12 0.5L1.09017 11.4098" stroke="currentColor"></span>
                    </button>
                
              
                    <button class="hero-right-btn-2"><span class="hero-button-text">EXPLORE USE CASES</span> <span ><svg
                        width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-diagonal-svg">
                        <path d="M12 11.5L12 0.5L1 0.5" stroke="currentColor"></path>
                        <path d="M12 0.5L1.09017 11.4098" stroke="currentColor"></button>     
            
        </div>
    </div>
    </div>
    
    
    <style>
        
        .hero-section-parent{
            width: 100%;
            height: 100vh;
            background-color:#f8f7fc;
            padding-left: 8rem;
            padding-right: 8rem;
            background-image: url('https://cdn.prod.website-files.com/60fd4503684b466578c0d307/662643dfe35902c73749a2fc_Mask%20group.svg');
            background-size: cover;
            background-position: center;
        }
    .hero-section{
            display: flex;
            /* align-items: center; */
            padding-top: 6rem;
            width: 100%;
            height: 100%;
           
    
             
        }
        .hero-heading{
            font-size: 7.5rem;
            line-height: 1;
            letter-spacing: -0.5rem;
            border-bottom: 1px solid #212121;
            padding-bottom: 4rem;
            color: #212121;
           
        }

    
        .italic{
        font-style: italic;
        }
    
        .hero-section-para{
            padding-top:1rem;
            font-size: 1.5rem;
            letter-spacing: -0.5px;
        }
    
        .hero-left{
            width: 65%;
            /* margin-top: -2rem; */
            transition: all 1s ease-in ;
            animation:hero-transition 0.8s ease-in;
            
          
        }
    
        .hero-right{
            width: 35%;
            border-left: 1px solid black;
            padding: 1rem;
            padding-top: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: center;
            
          
            
        
        }
    
        .hero-right button{
          display: flex;
          justify-content: space-between;
          align-items: center;
            width: 95%;
          /* padding: .9375rem 1.25rem .875rem; */
          padding: 1rem 1.25rem;
          border-radius: 40px;
          
          
        }
    
        .hero-right-btn-1{
            background-color: black;
            color: #f8f7fc;
            border: 0.5px solid inherit;
            animation:  hero-transition 0.9s ease-in;
            
        }
    
        .hero-right-btn-2{
            background-color: transparent;
            border: 0.5px solid #212121; 
            animation:  hero-transition 1s ease-in;
           
            
        }
    
        .hero-right-btn-1:hover, .hero-right-btn-2:hover{
            background-color: rgba(33, 33, 33, .07);
            color: #212121;
        }
    
    
        .hero-right-btn-1:hover .arrow-diagonal-svg{
            transition: all 0.3s ease-in;
            transform: rotate(90deg);
            
        }
    
        .hero-right-btn-2:hover .arrow-diagonal-svg{
            transition: all 0.3s ease-in;
            transform: rotate(90deg);
    
        }
        .hero-button-text{
         text-align: left;
         letter-spacing: -0.5px;
         text-transform: uppercase;
         font-weight: 300;
         
        }
    
        .arrow-diagonal-svg1{
            fill: #f8f7fc;
         
        }
    
        @keyframes hero-transition{
            0%{
        transform: translateY(5rem);
        opacity: 0;
            }
    
            100%{
                transform: translateY(0);
                opacity: 1;
            }
        }
    
     
    
    </style>