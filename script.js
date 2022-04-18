userInput = localStorage.getItem("9")
var currentTime = new Date().getHours();
console.log(currentTime)


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

var buttons =document.getElementsByClassName("saveBtn")
console.log(buttons)
Array.from(buttons).forEach(element => {
    element.addEventListener("click", function(event){
        var elementId = event.target.id.split("-")[1]
        var textEl = document.getElementById("text-" + elementId)
 console.log(textEl)
        var userInput = textEl.value 
        var storageKey = textEl.id.split("-")[1]
        console.log(userInput) 
        localStorage.setItem(storageKey, userInput)
        console.log(event.target.id.split("-"))
    })
});

searchHistory = localStorage.getItem("9");
textEl9 = document.getElementById("text-9");
textEl9.value = searchHistory;

searchHistory = localStorage.getItem("10");
textEl10 = document.getElementById("text-10");
textEl10.value = searchHistory

searchHistory = localStorage.getItem("11");
textEl10 = document.getElementById("text-11");
textEl10.value = searchHistory

searchHistory = localStorage.getItem("12");
textEl10 = document.getElementById("text-12");
textEl10.value = searchHistory

searchHistory = localStorage.getItem("13");
textEl10 = document.getElementById("text-13");
textEl10.value = searchHistory

searchHistory = localStorage.getItem("14");
textEl10 = document.getElementById("text-14");
textEl10.value = searchHistory

searchHistory = localStorage.getItem("15");
textEl10 = document.getElementById("text-15");
textEl10.value = searchHistory

searchHistory = localStorage.getItem("16");
textEl10 = document.getElementById("text-16");
textEl10.value = searchHistory

searchHistory = localStorage.getItem("17");
textEl10 = document.getElementById("text-17");
textEl10.value = searchHistory

