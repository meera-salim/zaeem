
export const videos = [
    {
"id": 1,
"categoryId": 'agri-prog',
"title": "Agricultural Programming Module on Organic Farming Methods and Use of Fertilizers Agricultural Programming Module on Organic ",
'courseName':'Course Tile',
'description':'description',
'numberOfVideos' : '15',
'duration' : '3h 54mins',
"thumbnailUrl": "https://placehold.co/600x400",
"watched": true, 
'stateId':1,
'RSETIId':1,
'statusId': 1,
'modeId':1,

},
{
"id": 2,
"categoryId": 'agri-prog',
"title": "Farming Methods and Use of Fertilizers Agricultural Programming Module on Organic ",
'courseName':'Course Tile',
'description':'description',
'numberOfVideos' : '15',
'duration' : '3h 54mins',
"url": "https://via.placeholder.com/600/771796",
"thumbnailUrl": "https://placehold.co/600x400",
"watched": true,
'stateId':1,
'RSETIId':3,
'statusId': 2,
'modeId':2,
},
{
"id": 3,
"categoryId": 'agri-prog',
"title": "Agricultural -Animal Husbandry",
'courseName':'Course Tile',
'description':'description',
'numberOfVideos' : '15',
'duration' : '3h 54mins',
"url": "https://via.placeholder.com/600/24f355",
"thumbnailUrl": "https://placehold.co/600x400",
"watched": false,
'stateId':2,
'RSETIId':2,
'statusId': 1,
'modeId':2,
},
{
"id": 4,
"categoryId": 'process-prog',
"title": "Process - Welding",
'courseName':'Course Tile',
'description':'description',
'numberOfVideos' : '15',
'duration' : '3h 54mins',
"url": "https://via.placeholder.com/600/d32776",
"thumbnailUrl": "https://placehold.co/600x400",
"watched": false,
'stateId':2,
'RSETIId':2,
'statusId': '1',
'modeId':3,
},
{
"id": 5,
"categoryId": 'process-prog',
"title": "Process - Carpentry",
'courseName':'Course Tile',
'description':'description',
'numberOfVideos' : '15',
'duration' : '3h 54mins',
"url": "https://via.placeholder.com/600/f66b97",
"thumbnailUrl": "https://placehold.co/600x400",
"watched": true,
'stateId':1,
'RSETIId':1,
'statusId': 2,
'modeId':3,
},
{
"id": 6,
'courseName':'Course Tile',
'description':'description',
'numberOfVideos' : '15',
'duration' : '3h 54mins',
"categoryId": 'process-prog',
"title": "Process - Brass Polishing",
"url": "https://via.placeholder.com/600/56a8c2",
"thumbnailUrl": "https://placehold.co/600x400",
"watched": true,
'stateId':2,
'RSETIId':4,
'statusId': 2,
'modeId':1,
},
{
"id": 7,
"categoryId": 'process-prog',
"title": "Process - DeSalination",
'courseName':'Course Tile',
'description':'description',
'numberOfVideos' : '15',
'duration' : '3h 54mins',
"url": "https://via.placeholder.com/600/b0f7cc",
"thumbnailUrl": "https://placehold.co/600x400",
"watched": false,
'stateId':5,
'RSETIId':1,
'statusId': 1,
'modeId':1,
},
{
"id": 8,
"categoryId": 'product-prog',
"title": "Product - Organic Products",
'courseName':'Course Tile',
'description':'description',
'numberOfVideos' : '15',
'duration' : '3h 54mins',
"url": "https://via.placeholder.com/600/54176f",
"thumbnailUrl": "https://placehold.co/600x400",
"watched": false,
'stateId':3,
'RSETIId':4,
'statusId': 2,
'modeId':2,
},
{
"id": 9,
"categoryId": 'product-prog',
"title": "Product - Khadi Artefacts",
'courseName':'Course Tile',
'description':'description',
'numberOfVideos' : '15',
'duration' : '3h 54mins',
"url": "https://via.placeholder.com/600/51aa97",
"thumbnailUrl": "https://placehold.co/600x400",
"watched": false,
'stateId':5,
'RSETIId':1,
'statusId': 2,
'modeId':2,
},
{
"id": 10,
"categoryId": 'product-prog',
"title": "Product - Forest Produces",
'courseName':'Course Tile',
'description':'description',
'numberOfVideos' : '15',
'duration' : '3h 54mins',
"url": "https://via.placeholder.com/600/810b14",
"thumbnailUrl": "https://placehold.co/600x400",
"watched": true,
'stateId':4,
'RSETIId':5,
'statusId': 1,
'modeId':3,
},
]

export const filters =[
    {  
        'categoryId':1,
        'filterCategory':'state',
        'data':[{
            'id':1,
            'item': 'Rajasthan',
        },
        {
            'id':2,
            'item': 'Tamil Nadu', 
        },{
            'id':3,
            'item': 'Kerala',
        },
        {
            'id':4,
            'item': 'Goa',
        },
        {
            'id':5,
            'item': 'Telengana',
        }],
        'typeOfFilter':'comboBox',
        'searchable':true,


    },
    {  
        'categoryId':2,
        'filterCategory':'RSETI',
        'data':[{
            'id':1,
            'item': 'Orysis Skilling centre',
        },
        {
            'id':2,
            'item': 'MG Polytechnic for Women', 
        },{
            'id':3,
            'item': 'Ambedkar Centre for Vocational training',
        },
        {
            'id':4,
            'item': 'CDAC IT Centre',
        },
        {
            'id':5,
            'item': 'Indira Gandhi Skilling centre for Women',
        }],
        'typeOfFilter':'comboBox',
        'searchable':true,


    },
    {
        'categoryId':3,
        'filterCategory':'status',
        'data':[{
            'id':1,
            'item': 'active',
        },
    {
        'id':2,
        'item': 'inactive',
    }],
    'typeOfFilter':'dropDown',
    'searchable':false,
    },

    {
        'categoryId':4,
        'filterCategory':'mode',
        'data':[{
            'id':1,
            'item': 'online',
        },
    {
        'id':2,
        'item': 'offline',
    },
    {
        'id':3,
        'item': 'hybrid',
    }],

    'typeOfFilter':'multiSelectComboBox',
    'searchable':false, 
    },

]



export const generalStats = [
    {
        'statName':'courses',
        'statValue':'64+'
    },
    {
        'statName':'domains',
        'statValue':'20+'
    },
    {
        'statName':'learning centre',
        'statValue':'640+'
    },
    {
        'statName':'trainees enrolled',
        'statValue':'6 lakh+'
    },
]

export const collaboratingInstitutes = [
    {
        'institute':'MoRD',
        'image':'/reap/mord-logo.png'
    },
    {
        'institute':'NABARD',
        'image':'/reap/nabard.jpg'
    },
    {
        'institute':'NAR',
        'image':'/reap/nar.jpg'
    },
    {
        'institute':'IITM',
        'image':'/reap/iit-logo.jpeg'
    },
    
]


export const testimonials =[
    {
        'name':'Manoj Kumar Jha',
        'designation':'Suit specialist, Ranchi, Jharkhand',
        'testimonialText':"REAP's Tailoring and stitching course was my lifeline. Learned new techniques and now, clients praise my work. ",
        'img':'/reap/tailor.png',
        'course':'Tailoring and Stiching',
    },
    {
        'name':'Rishabh Yadav',
        'designation':'Bike mechanic, Hissar, Haryana',
        'testimonialText':'Bike repair and Servicing course  was my lifeline. Learned new techniques, tackled fancy fabrics.',
        'img':'/reap/mechanic.webp',
        'course':'Bike repair',
        
    },
    {
        'name':'Sai Saranya',
        'designation':'Needleworker, Guntur, Andhra Pradesh',
        'testimonialText':"REAP's Embroidery and needlecraft course was my lifeline. Learned new techniques and now, clients praise my work. Tailoring's not just a job anymore, it's my passion reborn.",
        'img':'/reap/embroidery.webp',
        'course':'Embroidery and needlecraft',
    },

    {
        'name':'Manoj Kumar Jha',
        'designation':'Suit specialist, Ranchi, Jharkhand',
        'testimonialText':"REAP's Tailoring and stitching course was my lifeline. Learned new techniques and now, clients praise my work. Tailoring's not just a job anymore, it's my passion reborn.",
        'img':'/reap/tailor.png',
        'course':'Tailoring and Stiching',
    },
   

]


export const studentLifeCycle = [
    {
        'description':'Explore and find the course which suites your taste. Register with the learning center near you.',
        'img':'/reap/life-cycle-1.png'
    },
    {
        'description':'Reskill and upskill under the guidance of expert mentors.',
        'img':'/reap/life-cycle-2.png'
    },
    {
        'description':'Complete the course with flying colors',
        'img':'/reap/life-cycle-3.png'
    },
    {
        'description':'Be a star employee or start your own business.',
        'img':'/reap/life-cycle-4.png'
    },

]

