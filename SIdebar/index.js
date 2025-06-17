const toggleBtn = document.getElementById('toggle-btn');
const panel = document.getElementById('panel');
const closeButton = document.getElementById('close-btn');
 const menuItems=document.querySelectorAll('.menu-item');
toggleBtn.addEventListener('click',()=>{
   panel.style.right="0px";
})
closeButton.addEventListener('click',()=>{
    panel.style.right="-360px";
})

menuItems.forEach((item)=>{
    item.addEventListener("click",()=>{
        alert(`Hello from ${item.innerText}`);
        panel.style.right= "-360px"
    })
})



document.addEventListener('click',(e)=>{
    if(!panel.contains(e.target) && e.target!==toggleBtn){
        panel.style.right="-360px";
    }
})
