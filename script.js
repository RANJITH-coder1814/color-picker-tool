const colorPicker = document.getElementById("colorPicker");
const colorCode = document.getElementById("colorCode");

colorPicker.addEventListener("input", function(){
let color = colorPicker.value;
colorCode.textContent = color;
document.body.style.background = color;
});

function copyColor(){
navigator.clipboard.writeText(colorCode.textContent);
alert("Color code copied!");
}
