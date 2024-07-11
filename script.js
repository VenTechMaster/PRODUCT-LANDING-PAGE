function navi(index) {
    const nav = document.getElementById("nav");
    const navchild = nav.children;
    for (var i = 0; i < navchild.length; i++) {
        navchild[i].className = "";
    }
    navchild[index].className = "active";
}
window.addEventListener("scroll", () => {
    const nav = document.getElementById("nav").children;
    const content = document.getElementsByClassName("content");
    for (var i = 0; i < content.length; i++) {
        var offtop = content[i].getBoundingClientRect().top;
        if (offtop <= 225) {
            for (var j = 0; j < nav.length; j++) {
                nav[j].className = "";
            }
            nav[i].className = "active";
        }
    }
});
var count=1;
setInterval(function(){
	document.getElementById("radio"+count).checked=true;
	count=count+1;
	if(count>4){
		count=1;
	}
},3000);
function Redirect(event) {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    if(username&&email){
    alert("Your response was recorded!!");
    }
}
