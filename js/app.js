/*jslint browser:true */
function showHide(event)
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
document.querySelector('.js-btn').addEventListener('click', showHide); 

