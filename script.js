let title= document.querySelector(".title");
let advice= document.querySelector(".advice")
fetch("https://api.adviceslip.com/advice").then((res)=>{
    return res.json();
}).then(data=>{
    title.innerHTML=`Advice #${data.slip.id}`;
    advice.innerHTML=`"${data.slip.advice}"`
})