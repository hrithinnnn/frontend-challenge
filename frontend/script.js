radio=document.getElementsByName("position")
active=document.getElementsByClassName("item")
let myInterval;
let isSlideShow=false;
const data=[
    {
        'img-src':'../backend/download.jpg',
        'title':"breaking bad",
        'desc':"epiccccc"
    },
    {
        'bg-img':'../Niti.AI/download.jpg',
        'title':"breaking bad",
        'desc':"epiccccc"
    },
    {
        'bg-img':'../Niti.AI/download.jpg',
        'title':"breaking bad",
        'desc':"epiccccc"
    },
    {
        'bg-img':'../Niti.AI/download.jpg',
        'title':"breaking bad",
        'desc':"epiccccc"
    },
    {
        'bg-img':'../Niti.AI/download.jpg',
        'title':"breaking bad",
        'desc':"epiccccc"
    },
    {
        'bg-img':'../Niti.AI/download.jpg',
        'title':"breaking bad",
        'desc':"epiccccc"
    },
]


function next(){
    radio=document.getElementsByName("position")
    for (let i=0;i<radio.length;i++){
        if (radio[i].checked){
            radio[i].checked=false;
            radio[(i+1)%radio.length].checked=true;
            break;
        }
    }
    change()
}

function change(){
    let k;
    for (let i=0;i<active.length;i++){
            active[i].classList.remove("active1")
            active[i].classList.remove("active2")
            active[i].classList.remove("active3")
        }
    
    for(let i=0;i<radio.length;i++){
        if (radio[i].checked){
            console.log(i)
            if (active[3*i]) active[3*i]?.classList.add("active1")
            if (active[3*i+1])  active[3*(i)+1]?.classList.add("active2")
            if (active[3*i+2])  active[3*(i)+2]?.classList.add("active3")
            k=3*i;
        }
    }

}

// let buttons=document.getElementsByClassName
// addEventListener('click',change)

function previous(){
    radio=document.getElementsByName("position")
    for (let i=0;i<radio.length;i++){
        if (radio[i].checked){
            radio[i].checked=false;
            if (i!=0){

                radio[Math.abs((i-1)%radio.length)].checked=true;
            }
            else{
                radio[radio.length-1].checked=true;
            }
            break;
        }
    }
    change()
}

function start(){
    isSlideShow=true;
  let startBtn=document.getElementById("start");
  startBtn.classList.add("active")
myInterval=setInterval(next,3000);
}
function stop(){
    isSlideShow=false;
    let startBtn=document.getElementById("start");
    startBtn.classList.remove("active");
    clearInterval(myInterval);
}



