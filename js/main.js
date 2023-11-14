let cardlist =document.querySelectorAll(".card");
let  unread =document.querySelectorAll(".unread");
let allMessage=document.querySelectorAll(".message");
let count =document.getElementById("count");
let markAll =document.getElementById("markAll");
count.innerText=unread.length;
markAll.addEventListener("click",function(){
    cardlist.forEach((p)=>{
        p.classList.remove("unread");
        let unread =document.querySelectorAll(".unread");
        count.innerText=unread.length;
    });
});
cardlist.forEach((ele , index)=>{
    ele.addEventListener("click",(e)=>{
        e.stopPropagation();
        allMessage.forEach((ms)=>{ ms.classList.remove("show"); });
        allMessage[index].classList.add("show");
        allMessage[index].classList.remove("hide");
        cardlist[index].classList.remove("unread");
        let  unread =document.querySelectorAll(".unread");
        count.innerText=unread.length;
    });
});


