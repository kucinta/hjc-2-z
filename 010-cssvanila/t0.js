function openNav() {
    document.getElementById("mySidenav").style.display = "block";

}

function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
}
var input = document.getElementById("myInput");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});