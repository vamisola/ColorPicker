    var pickButton = document.querySelector("#pickColor");   
    var rgbBox = document.querySelector("#rgbBox");
    var colorDisplay = document.querySelector("#colorDisplay");
    var pickOpacity = document.querySelector("select");

    var arr = [], randomColor;
    
    pickButton.addEventListener("click", function(){
        
            pickColor();
            var backColor = "rgb("+ randomColor + ")";         bgColor(backColor);
        pickOpacity.style.display = "inline-block";
            
    });
    
    pickOpacity.addEventListener("change", function(){
        arr.push(randomColor);
         
        var numSelect = pickOpacity.value;      
    
        if(numSelect === "1" || numSelect === "0.1" || numSelect === "0.2" || numSelect === "0.3" || numSelect === "0.4" || numSelect === "0.5" || numSelect === "0.6" || numSelect === "0.7" || numSelect === "0.8" || numSelect === "0.9" || numSelect === "0"){
            var backColor = optionOpacity(arr[0], numSelect);
            bgColor(backColor);

        }else{
            arr.push(randomColor);
            var backColor = "rgb("+ randomColor + ")";
            bgColor(backColor);
        }
    });

function pickColor(){
    arr.length = 0;
    var r = Math.round(Math.random() * 256);
    var g = Math.round(Math.random() * 256);
    var b = Math.round(Math.random() * 256);
    randomColor = ""+ r + ", " + g + ", " + b + "";
    arr.push(randomColor);   
    pickOpacity.value = "none";
}

function bgColor(color){
    rgbBox.style.background = color;
    colorDisplay.textContent = color;
}
    
function optionOpacity(randomColor, numSelect){
    return color = "rgba(" + randomColor + ", " + numSelect + ")";
}