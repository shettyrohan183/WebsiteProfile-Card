const clc = document.querySelector(".cancel");
const arr = document.querySelector(".arr_container");
const left_conatiner =document.querySelector(".left_container")
arr.addEventListener("click", ()=>{
arr.classList.add("active_arr");
if(left_conatiner.classList.contains("off"))
{
left_conatiner.classList.remove("off");
left_conatiner.classList.add("active");
}
});
clc.addEventListener("click",()=>{
arr.classList.remove("active_arr");
if(left_conatiner.classList.contains("active")){
left_conatiner.classList.remove("active");
left_conatiner.classList.add("off");
}
});
