var ToggleButton = document.getElementById("toggle");
var Skills = document.getElementById("skill");
ToggleButton.addEventListener("click", function () {
    if (Skills.style.display === "none") {
        Skills.style.display = "block";
    }
    else {
        Skills.style.display = "none";
    }
});
