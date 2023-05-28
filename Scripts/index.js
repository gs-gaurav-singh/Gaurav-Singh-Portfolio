// To open work experince Overaly
document.getElementById("work-experience").addEventListener("click", function () {
    var e = document.getElementsByClassName("w-modalbox");
    e[0].style.display = "contents";
});

// To open the education overlay
document.getElementById("education").addEventListener("click", function () {
    var e = document.getElementsByClassName("e-modalbox");
    e[0].style.display = "contents";
});

// To close the Overlay
document.getElementById("close").addEventListener("click", function () {
    var e = document.getElementsByClassName("w-modalbox");
    e[0].style.display = 'none';
})

// To close the Overlay
document.getElementById("close1").addEventListener("click", function () {
    var e = document.getElementsByClassName("e-modalbox");
    e[0].style.display = 'none';
})