let click_img_id = document.getElementById("click_img")
let position_id = document.getElementById("image_div")
let po_text_id = document.getElementById("po_text")
let position_text_id = document.getElementById("position_text")
let po_img_id = document.getElementById("po_img")
let posi_img_id = document.getElementById("posi_img")
let position_img_id = document.getElementById("position_img")
let position_img_div_id = document.getElementById("position_img_div")
let freq_img_id = document.getElementById("freq_img")
let where_img_id = document.getElementById("where_img")
let where_div_id = document.getElementById("where_div")
let freq_div_id = document.getElementById("freq_div")
let reset_id = document.getElementById("reset")



// let chance_arr = ["doing mofa","going to park","monir shold purprise feriba","feriba should surprise monir","going to shopping","cleaning house","leting story","making barbique","going chakar with car","do what you want","doing sex","doing mofa","dance","doing faishan and take photo",]

let chance_arr= [
    {name:'doing mofa😘', imgsrc:'doing mofa.jpg'},
    {name:'doing mofa😘', imgsrc:'doing sex.jpg'},
    {name:'going to park', imgsrc:'going to park.jpg'},
    {name:'mo should sorprise Fe', imgsrc:'m to f.jpg'},
    {name:'Fe should surprise mo', imgsrc:'f to m.jpg'},
    {name:'going to shopping', imgsrc:'shopping.jpg'},
    {name:'cleaning house', imgsrc:'cleaning house.jpg'},
    {name:'telling story', imgsrc:'telling story.jpg'},
    {name:'making barbecue', imgsrc:'barbecue.jpg'},
    {name:'going picnic with the car', imgsrc:'driving.jpg'},
    {name:'do what you want', imgsrc:'what you wnat.jpg'},
    {name:'lets dance', imgsrc:'dance.jpg'},
    {name:'doig fashion and take photo', imgsrc:'fashion.jpg'}

]



click_img_id.addEventListener('click',()=>{
    reset_id.style.display='block'
    position_id.style.display='block'
    let num_arr = Math.floor(Math.random()*chance_arr.length);
    let chance_itme = chance_arr[num_arr].name
    let imgsrc = chance_arr[num_arr].imgsrc
   po_img_id.src=imgsrc
    po_text_id.style.display='block'
    po_text_id.innerHTML=chance_itme
    po_text_id.animate([
        
        {transform: 'rotate(0)',"offset": 0,opacity: 0},
        {transform: 'rotate(2880deg)',"offset": 1,opacity: 1},



    ],{
        easing:'ease-out',
        duration:2000
    })
    position_id.animate([
        
        {transform: 'rotate(0)',"offset": 0,opacity: 0},
        {transform: 'rotate(2880deg)',"offset": 1,opacity: 1},



    ],{
        easing:'ease-out',
        duration:2000
    })
   
click_img_id.style.filter="blur(2px)"

if(chance_itme==='doing mofa😘'){
    setTimeout(() => {
        posi_img_id.style.display='block'
        freq_img_id.style.display='block'
        where_img_id.style.display='block'
        where_img_id.animate([
        
        {transform: 'rotate(0)',"offset": 0,opacity: 0},
        {transform: 'rotate(0)',"offset": 1,opacity: 1},
    ],{
        easing:'ease-out',
        duration:2000
    })
    freq_img_id.animate([
        
        {transform: 'rotate(0)',"offset": 0,opacity: 0},
        {transform: 'rotate(0)',"offset": 1,opacity: 1},
    ],{
        easing:'ease-out',
        duration:2000
    })


    posi_img_id.animate([
        
        {transform: 'rotate(0)',"offset": 0,opacity: 0},
        {transform: 'rotate(0)',"offset": 1,opacity: 1},



    ],{
        easing:'ease-out',
        duration:2000
    })

    }, 2100);


}
   
},{once:'true'})



where_img_id.addEventListener('click',()=>{
    let where_arr= ["cum on the pussy","cum in the mouth","cum on the face","cum on the abdomen","cum in the pussy","cum on the legs"]

    let where_num = Math.floor(Math.random()*where_arr.length)
    let where_res = where_arr[where_num]
    where_div_id.innerHTML=where_res
    where_div_id.style.display='block'
        where_div_id.animate([
        
        {transform: 'rotate(0)',"offset": 0,opacity: 0},
        {transform: 'rotate(2880deg)',"offset": 1,opacity: 1},



    ],{
        easing:'ease-out',
        duration:2000
    })
    where_img_id.style.filter='blur(1.5px)'
},{once:'true'}) 



freq_img_id.addEventListener('click',()=>{
    let freq_arr= ["5 times","4 times","3 times","2 times","just single time"]

    let freq_num = Math.floor(Math.random()*freq_arr.length)
    let freq_res = freq_arr[freq_num]
    freq_div_id.innerHTML=freq_res
    freq_div_id.style.display='block'
        freq_div_id.animate([
        
        {transform: 'rotate(0)',"offset": 0,opacity: 0},
        {transform: 'rotate(2880deg)',"offset": 1,opacity: 1},



    ],{
        easing:'ease-out',
        duration:2000
    })
    freq_img_id.style.filter='blur(1.5px)'
} , {once:'true'})


let position_arr= [
    {name:'dogy style', imgsrc1:'dogy.jpg'},
    {name:'legs up', imgsrc1:'legs up.png'},
    {name:'from the back', imgsrc1:'back position.jpg'},
    {name:'standing', imgsrc1:'stand.jpg'},
    {name:'sleepy', imgsrc1:'position3.jpg'},
    {name:'on the table or bad', imgsrc1:'on table 2.jpg'},
    {name:'enjoy the L style', imgsrc1:'L style.jpg'},
    {name:'enjoy stand and dogy style', imgsrc1:'stand and sleep.jpg'},
    {name:'enjoy sitting on the siir', imgsrc1:'position2.jpg'},
    {name:'enjoy sitting on the siir back', imgsrc1:'position1.jpg'},
    {name:'chose and enjoy the position', imgsrc1:'all position.jpg'},
    {name:'eat the kass', imgsrc1:'lais.jpg'},
    {name:'eat the siir', imgsrc1:'lais1.jpg'}
]



posi_img_id.addEventListener('click',()=>{
    position_img_div_id.style.display='block'
    let po_num_arr = Math.floor(Math.random()*position_arr.length);
    let po_itme = position_arr[po_num_arr].name
    let imgsrc1 = position_arr[po_num_arr].imgsrc1
   position_img_id.src=imgsrc1
    position_text_id.style.display='block'
    position_text_id.innerHTML=po_itme
    position_text_id.animate([
        
        {transform: 'rotate(0)',"offset": 0,opacity: 0},
        {transform: 'rotate(2880deg)',"offset": 1,opacity: 1},



    ],{
        easing:'ease-out',
        duration:2000
    })
    position_img_div_id.animate([
        
        {transform: 'rotate(0)',"offset": 0,opacity: 0},
        {transform: 'rotate(2880deg)',"offset": 1,opacity: 1},



    ],{
        easing:'ease-out',
        duration:2000
    })
    posi_img_id.style.filter="blur(2px)"
},{once:'true'})
   
reset_id.addEventListener('click',()=>{
    window.location.reload()
})