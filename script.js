const navBtn=document.getElementById('nav-btn');
const cancelbtn=document.getElementById('cancel-btn');
const sidenav=document.getElementById('sidenav');
const modal=document.getElementById('modal');
 
navBtn.addEventListener("click",function(){
    sidenav.classList.add('show');
    modal.classList.add('showModal');
});
navBtn.addEventListener("click",function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});
Window.addEventListener('click',function(event){
    if(event,target===modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showmodal');
    }
});