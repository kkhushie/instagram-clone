
// stories.forEach(function(){
//   story.addEventListener("click",()=>{
//     alert("hellow")
// })  
// });
// stories.addEventListener("click",fuction())
const heart = document.querySelector(".posts .fa-heart")
const heart1 = document.querySelector(".first-post .fa-heart")
const heart2 = document.querySelector(".second-post .fa-heart")
const heart3 = document.querySelector(".third-post .fa-heart")
const heart4 = document.querySelector(".forth-post .fa-heart")
const heart5 = document.querySelector(".fifth-post .fa-heart")
const heart6 = document.querySelector(".sixth-post .fa-heart")
const heart7 = document.querySelector(".seventh-post .fa-heart")
const heart8 = document.querySelector(".eighth-post .fa-heart")
const heart9 = document.querySelector(".ninth-post .fa-heart")
const heart10 = document.querySelector(".tenth-post .fa-heart")

const arr = [heart1, heart2,heart3, heart4, heart5, heart6, heart7, heart8, heart9,heart10];


let isliked = true;
let clicked = true;
const liked = () => {
    clicked = false
    heart.classList.add("fa-solid");
    heart.style.color = "red"
}
const unlike = () => {
    clicked = true
    heart.classList.replace("fa-solid", "fa-regular");
    heart.style.color = "white"
}
 heart.addEventListener("click", () => {
     if (clicked) {
            liked()
        }
        else {
            unlike();
        }
    })
    arr.forEach(function (elem) {
   
})

// elem.addEventListener("click",()=>{
//     alert("hello")
// })

// function saved() {
//     save.classList.add("fa-solid");
// }
const save = document.querySelector(".posts .fa-bookmark")
let thik = true;
const okay = () => {
    thik = false
    save.classList.add("fa-solid");
}
const notokay = () => {
    thik = true
    save.classList.replace("fa-solid", "fa-regular");
}
save.addEventListener("click", () => {
    if (thik) {
        okay()
    }
    else {
        notokay();
    }
})


const stories = document.querySelector(".stories")
const story = document.querySelector(".story")

const data=[
// {
//     dp:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
//     image:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
// },
{
    dp:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    image:"https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    username:"iamcoder"
    
}
,{
    dp:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    image:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    username:"AnshikaG..."
}
,{
    dp:"https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
    ,image:"https://images.unsplash.com/photo-1568306281824-7afe898030d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80",
    username:"amanagg..."
    
},
{
    dp:"https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    image:"https://images.unsplash.com/photo-1560957122-6b41ccfafb89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    username:"rocky.star"
},
{
    dp:"https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    image:"https://images.unsplash.com/photo-1535528775514-4b2e1ce44dda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=680&q=80",
    username:"Ryan_shei..."
    
},
{
    dp:"https://plus.unsplash.com/premium_photo-1675034393381-7e246fc40755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    image:"https://images.unsplash.com/photo-1532664189809-02133fee698d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
    username:"humaquere..."
},
{
    dp:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    image:"https://plus.unsplash.com/premium_photo-1661964374794-dccd9e44f357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    username:"floral"
    
},
{
    dp:"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    image:"https://images.unsplash.com/photo-1547707188-cdbffa0bc270?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=374&q=80",
    username:"niasharma"
},
{
    dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
    image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
    username:"rosy.jones"
},
{
    dp:"https://images.unsplash.com/photo-1522512115668-c09775d6f424?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    image:"https://images.unsplash.com/photo-1506609657475-b6fa02f479f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    username:"aishasharma"
},
{
    dp:"https://media.istockphoto.com/id/1421370988/photo/relax-peace-and-coffee-with-a-woman-drinking-a-drink-of-caffeine-and-meditating-in-her-home.webp?b=1&s=170667a&w=0&k=20&c=DqdNtRCaaFqf21DZruRcZepvuxwIJjKuc_arjMoJ-Ls=",
    image:"https://images.unsplash.com/photo-1477591546808-36d4a193cbc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    username:"shunye_reps"
    
},
{
    dp:"https://media.istockphoto.com/id/1398385367/photo/happy-millennial-business-woman-in-glasses-posing-with-hands-folded.webp?b=1&s=170667a&w=0&k=20&c=YaXYAUQu3wpM2xiFJgorwMvK5pNnrrdnFeHd1lTVwCs=",
    image:"https://images.unsplash.com/photo-1521165946603-4019d13d7d46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    username:"gloryroy"
},
{
    dp:"https://plus.unsplash.com/premium_photo-1687832783320-35671afbf484?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    image:"https://images.unsplash.com/photo-1495298599282-d8920eb5009b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    username:"Niharika"
},
{
    dp:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    image:"https://images.unsplash.com/photo-1491332069880-905992a4c051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    username:"studio57"
},
{
    dp:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    image:"https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    username:"ben.yu"
},
{
    dp:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    image:"https://images.unsplash.com/photo-1619516388835-2b60acc4049e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    username:"snek.penthon"
},
{
    dp:"https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    image:"https://images.unsplash.com/photo-1485811661309-ab85183a729c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    username:"pinkswandy"
},
{
    dp:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    image:"https://images.unsplash.com/photo-1520014321782-49b0fe958b59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    username:"shoebmalik"
},
{
    dp:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    image:"https://images.unsplash.com/photo-1523398002811-999ca8dec234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=705&q=80",
    username:"ronnysgame"
},
// username:"loyal_banda"
]
var clutter=` <div class="mystory">
<div id="0" class="overlay"></div>
<img src="https://images.unsplash.com/photo-1688590631552-ee34ce9656a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    height="70px" width="70px">
<span>+</span>
<h3 style="color:white;text-align: center;">Your story</h3>
</div>`;
data.forEach(function(elem,index){
    // stories.addEventListener("click",(dets)=>{
       
    // })
    clutter+=`<div class="story">
    <div id="0" class="overlay"></div>
    <img id="${index}" src="${elem.dp}">
    <h3>${elem.username}</h3>
</div>`

})
let preview=document.querySelector(".viewstory")
let fullscreen=document.querySelector("#fullpreview")
let cross=document.querySelector("h5#cross")
let xmark=document.querySelector("h5#xmark")
stories.innerHTML=clutter

var grow=0;
stories.addEventListener("click",(dets)=>{
    preview.style.display="initial"
    fullscreen.style.backgroundImage=`url(${data[dets.target.id].image})`
    setTimeout(()=>{
        
        preview.style.display="none"
    },3000)
if(grow<=100){

    setInterval(()=>{
        document.querySelector("#growth").style.width=`${grow++}%`
    },30)
}
else{
    grow=0
}
})          


cross.addEventListener("click",()=>{
preview.style.display="none"
})          
xmark.addEventListener("click",()=>{
preview.style.display="none"
})          