// import axios from 'axios';
const BASE_URL = 'http://localhost:5000';
let data=[]
let myInterval;
const getItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    const dataRes = response.data.data;
    data=dataRes;
    console.log(data);
    load();
  } catch (errors) {
    console.error(errors);
  }
};

function load(){
    let btns=document.getElementById('radio-btn-container');
    let carousel=document.getElementById('carousel');
    let n=(data.length/3);
    let btnHtml='';
    btnHtml+=`<input onchange="change()" type="radio" name="position" checked/>`
    if(n>1){
        for (let i=0; i<n-1; i++){
            btnHtml+=`<input onchange="change()" type="radio" name="position" />`
        }
    }
    console.log(n,btnHtml)
    btns.innerHTML=btnHtml;

   let carouselHtml=''
    n=data.length;
    for (let i=0;i<n;i++){
        carouselHtml+=`     <a target="_blank"cd  href=${data[i].link} <div class="item-container" style="height: fit-content;">
        <div class="item" style="background: url(${data[i]["img-src"]}) no-repeat center; background-size:cover;">
            <div style="position:relative; height: 100%; width:100%" class="card-container">
            </div>
            <div class="desc-container" style="position: relative;">
              <h1 style="text-align: center; margin: 0;;">${data[i].title}</h1>
              <h3 style="margin: 0; text-align:center; margin-top:2%">${data[i].desc}</h3>
            </div>
          </div>
        </div>
        </a>`
    }
    carousel.innerHTML+=carouselHtml;
    change()
}

function change(){
    let radio=document.getElementsByName("position")
    let active=document.getElementsByClassName("item")
    console.log(radio,active)

    let k;
    for (let i=0;i<active.length;i++){
            active[i]?.classList.remove("active1")
            active[i]?.classList.remove("active2")
            active[i]?.classList.remove("active3")
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
function stop(){
  clearInterval(myInterval);
}
window.onload=getItems;




