/*jslint browser:true */
function showHide(button)
{
var div = document.querySelector("#primary_nav");
if (div.style.display !== "none") {
    div.style.display = "none";
}
else {
    div.style.display = "block";
}
event.stopPropagation();
 }	
var button = document.querySelector('.to_nav').addEventListener('click', showHide); 

