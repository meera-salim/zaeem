<script>
  import { videos } from "./data.js";
  export let sideBarCategoryId;
  export let applyFilterDataObj = "";
  let appliedFilterVideos = "";

  let searchBoxValue = "";

  let videosCopy = [...videos];
  $: filteredVideos = "";

  $: handleFilter(sideBarCategoryId, searchBoxValue,applyFilterDataObj);
  function handleFilter() {
    let localFilteredCopy = videosCopy;
    if (sideBarCategoryId) {
      localFilteredCopy = localFilteredCopy.filter(
        (video) => video.categoryId === sideBarCategoryId
      );
    }
    if (searchBoxValue) {
      console.log(localFilteredCopy)
      localFilteredCopy = localFilteredCopy.filter((video) =>
        video.title.toLowerCase().includes(searchBoxValue.toLowerCase())
      );
    }

    if(applyFilterDataObj)
    {
     localFilteredCopy = handleShowApplyFilterData(localFilteredCopy)
     console.log(localFilteredCopy)
    }

    filteredVideos = localFilteredCopy;
  }

  function handleFilterDataArray(array,objKey,coursesCopy){
    console.log(coursesCopy)
   
    array.forEach((obj)=> {
      if (obj.hasOwnProperty("selectedItemId")) {
        appliedFilterVideos = coursesCopy.filter((courseObj) => {
          if (courseObj.hasOwnProperty(objKey)) {
            let selectedValue = Number(obj["selectedItemId"]);
            

            return selectedValue === Number(courseObj[objKey]);
          }
        });
        coursesCopy = appliedFilterVideos;
       
      }
    });
    console.log(coursesCopy,'coursesCopy in data Array')
    return coursesCopy
      }
    
  function handleShowApplyFilterData(localFilteredCopy) {
    let coursesCopy = [...localFilteredCopy];

    Object.entries(applyFilterDataObj).forEach(([key, value]) => {
      let objKey = key + "Id";

    //  if(Array.isArray(value)){
    //    coursesCopy = handleFilterDataArray (value,objKey,coursesCopy)
    //   } 
      
      if (value.hasOwnProperty("selectedItemId")) {
        const [itemId, itemName] = Object.entries(value);
        appliedFilterVideos = coursesCopy.filter((courseObj) => {
          if (courseObj.hasOwnProperty(objKey)) {
            let selectedValue = Number(value["selectedItemId"]);

            return selectedValue === Number(courseObj[objKey]);
          }
        });
        coursesCopy = appliedFilterVideos;
        console.log("videosCopy", coursesCopy);
      }
    }
  // }
  );
    return coursesCopy
  
  }
</script>

<div class="flex flex-col">
  <h1 class="text-2xl font-semibold pb-4 mb-4 border-b-2">
    Get Certifies and Get Ahead
  </h1>

  <div>
    <input
      type="text"
      class="p-2 border rounded shadow-sm mb-2"
      placeholder="Search Box"
      bind:value={searchBoxValue}
      on:input={handleFilter}
    />
  </div>

  <div class=" grid grid-cols-3 gap-6">
    {#each filteredVideos as video (video.id)}
      <div
        class="flex flex-col gap-1 hover:shadow-lg w-68 bg-white rounded-md shadow-sm"
      >
        <img
          src={video.thumbnailUrl}
          alt=" thumbnail of the video "
          class="w-full p-3 pb-0 h-48 object-cover"
        />
        <div class="m-4 flex flex-col gap-1 text-sm justify-between">
          <div class="flex flex-col">
            <span class="font-semibold text-sm line-clamp-2">{video.title}</span
            >
            <span class="text-xs">{video.courseName}</span>
            <span class="text-xs">{video.description}</span>
            <span class="text-xs">{video.numberOfVideos}</span>
          </div>

          <div class="text-xs flex justify-between items-center">
            <span
              class=" text-xs rounded-full border-slate-400 border-2 w-fit p-0.5 px-2"
              >{video.duration}
            </span>
            <span
              ><a
                href="#"
                class="text-blue-600">Details</a
              ></span
            >
          </div>
        </div>
      </div>
    {/each}
    
  </div>
  
</div>
