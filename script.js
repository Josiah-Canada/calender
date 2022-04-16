//var row1 = document.getElementById("9am")

var currentTime = new Date().getHours();
console.log(currentTime)
// var currentHour = document.getElementById(currentTime)
// currentHour.setAttribute("class", "row time-block present")

for (var i = 9; i <= 17; i++) {
    var currentHour = document.getElementById(i)
    if (i==currentTime) {
        currentHour.setAttribute("class", "row time-block present")
    } else if (i < currentTime) {
        currentHour.setAttribute("class", "row time-block past")
    } else {
        currentHour.setAttribute("class", "row time-block future")
    }
}
document.getElementById("11").getElementsByClassName("saveBtn")[0].addEventListener("click", function(){
    console.log("hi")
});
//console.log(document.getElementById("11").getElementsByClassName("saveBtn")[0])
document.getElementById("9").getElementsByClassName("saveBtn")[0].addEventListener("click", function(){
    localStorage.setItem("9", "saveBtn")
})
