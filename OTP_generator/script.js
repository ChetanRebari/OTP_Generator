const buttonEl=document.querySelector("button");
const box1El=document.querySelector(".box_1");
const box2El=document.querySelector(".box_2");
const box3El=document.querySelector(".box_3");
const box4El=document.querySelector(".box_4");


function Generateotp(){
    const box1=Math.floor(Math.random()*9);
    const box2=Math.floor(Math.random()*9);
    const box3=Math.floor(Math.random()*9);
    const box4=Math.floor(Math.random()*9);
    let otp=`${box1},${box2},${box3},${box4}`
    return otp
}

buttonEl.addEventListener("click",()=>{
        const newotp=Generateotp();
        box1El.innerHTML=newotp[0];
        box2El.innerHTML=newotp[2];
        box3El.innerHTML=newotp[2];
        box4El.innerHTML=newotp[4];
});