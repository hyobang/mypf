let grid
const frame='.productItem'
const box='.productItem article'
const speed='.35s'

window.addEventListener('load',function(){
init()
document.querySelector('.menu li a.on').click()
})

function init(){
    grid=new Isotope(frame,{
        itemSalctor:box,
        columnWidth: box,
        transitionDuration: speed,
        filter:'.ALL'
    })
}

const items=document.querySelectorAll('.menu li a')

items.forEach((item)=>{
    item.addEventListener('click',function(e){
        e.preventDefault()
        let href=this.getAttribute('href')
        grid.arrange({filter:href})

        items.forEach((item)=>{
            item.classList.remove('on')
        })
        this.classList.add('on')
    })
})


    //Examples of how to assign the Colorbox event to elements
 
   
