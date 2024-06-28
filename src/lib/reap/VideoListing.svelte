<script>

import SearchBar from './SearchBar.svelte'
export let sideBarCategoryId;
console.log(sideBarCategoryId)

let searchBoxValue='';


    const videos = [
        {
    "id": 1,
    "categoryId": 'agri-prog',
    "title": "Agricultural",
    'courseName':'Course Tile',
    'description':'description',
    'numberOfVideos' : '15',
    'duration' : '3h 54mins',
    "thumbnailUrl": "https://getdummyimage.com/800/400"
  },
  {
    "id": 2,
    "categoryId": 'agri-prog',
    "title": "Agricultural",
    'courseName':'Course Tile',
    'description':'description',
    'numberOfVideos' : '15',
    'duration' : '3h 54mins',
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://getdummyimage.com/800/400"
  },
  {
    "id": 3,
    "categoryId": 'agri-prog',
    "title": "Agricultural",
    'courseName':'Course Tile',
    'description':'description',
    'numberOfVideos' : '15',
    'duration' : '3h 54mins',
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://getdummyimage.com/800/400"
  },
  {
    "id": 4,
    "categoryId": 'process-prog',
    "title": "Process",
    'courseName':'Course Tile',
    'description':'description',
    'numberOfVideos' : '15',
    'duration' : '3h 54mins',
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://getdummyimage.com/800/400"
  },
  {
    "id": 5,
    "categoryId": 'process-prog',
    "title": "Process",
    'courseName':'Course Tile',
    'description':'description',
    'numberOfVideos' : '15',
    'duration' : '3h 54mins',
    "url": "https://via.placeholder.com/600/f66b97",
    "thumbnailUrl": "https://getdummyimage.com/800/400"
  },
  {
    "id": 6,
    'courseName':'Course Tile',
    'description':'description',
    'numberOfVideos' : '15',
    'duration' : '3h 54mins',
    "categoryId": 'process-prog',
    "title": "Process",
    "url": "https://via.placeholder.com/600/56a8c2",
    "thumbnailUrl": "https://getdummyimage.com/800/400"
  },
  {
    "id": 7,
    "categoryId": 'process-prog',
    "title": "Process",
    'courseName':'Course Tile',
    'description':'description',
    'numberOfVideos' : '15',
    'duration' : '3h 54mins',
    "url": "https://via.placeholder.com/600/b0f7cc",
    "thumbnailUrl": "https://getdummyimage.com/800/400"
  },
  {
    "id": 8,
    "categoryId": 'product-prog',
    "title": "Product",
    'courseName':'Course Tile',
    'description':'description',
    'numberOfVideos' : '15',
    'duration' : '3h 54mins',
    "url": "https://via.placeholder.com/600/54176f",
    "thumbnailUrl": "https://getdummyimage.com/800/400"
  },
  {
    "id": 9,
    "categoryId": 'product-prog',
    "title": "Product",
    'courseName':'Course Tile',
    'description':'description',
    'numberOfVideos' : '15',
    'duration' : '3h 54mins',
    "url": "https://via.placeholder.com/600/51aa97",
    "thumbnailUrl": "https://getdummyimage.com/800/400"
  },
  {
    "id": 10,
    "categoryId": 'product-prog',
    "title": "Product",
    'courseName':'Course Tile',
    'description':'description',
    'numberOfVideos' : '15',
    'duration' : '3h 54mins',
    "url": "https://via.placeholder.com/600/810b14",
    "thumbnailUrl": "https://getdummyimage.com/800/400"
  },
    ]

    let videosCopy = [...videos]
    console.log(videosCopy)

    $: filteredVideos = sideBarCategoryId ? videosCopy.filter(video => video.categoryId === sideBarCategoryId) : videosCopy 

    function handleSearchBox(){
      filteredVideos = videos.filter(video => video.title.toLowerCase().includes(searchBoxValue.toLowerCase()))
      console.log(searchBoxValue)
    }

    


    $:console.log('filteredVideos', filteredVideos)
    
    

</script>



<div class="flex flex-col gap-5 ">

  <h1 class="text-2xl font-semibold pb-4 mb-8 border-b-2">Get Certifies and Get Ahead</h1>

  <div><input
    type="text"
    class="p-2 border rounded shadow-sm w-1/3" 
    placeholder="Search Box"
  bind:value={searchBoxValue}
  on:input={handleSearchBox}
  /></div>

    <div class=" flex gap-10 justify-start flex-wrap">
      {#each filteredVideos as video(video.id)}
      <div class="flex flex-col gap-1 hover:shadow-lg w-72 bg-white rounded-md shadow-sm"> 
        <img src={video.thumbnailUrl} alt= " thumbnail of the video " class="w-full p-3 pb-0 h-48 object-cover">
        <div class="m-4 flex flex-col gap-0.5 text-sm">
          <span class="font-bold text-ellipsis">{video.title}</span>
          <span>{video.courseName}</span>
          <span class="text-xs">{video.description}</span>
          <span class="text-xs">{video.numberOfVideos}</span>
          <div class="flex justify-between" >
            <span class=" text-xs rounded-full border-slate-400 border-2 w-fit p-0.5 px-2">{video.duration}
            </span>
           <span><a href="#" class="text-blue-600">Details</a></span>
          </div>

        </div>
        </div>
      {/each}

       
    </div>
</div>

