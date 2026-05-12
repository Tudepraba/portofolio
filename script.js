
function scrollToProjects(){
document.getElementById("projects").scrollIntoView({
behavior:"smooth"
});
}

document.getElementById("contactForm")
.addEventListener("submit",function(e){

e.preventDefault();

alert("Pesan berhasil dikirim!");

});
