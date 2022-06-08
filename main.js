// var height = 0;
// var intervalId;
// function playFunc(){
//    intervalId = setInterval(()=>{
//         div_1.style.height = height++ + "px";
//     },10)

//    }
//   function stopFunc(){
//     clearInterval(intervalId);
//   }

//   function stopWithEnter(e){
//    if(e.key == "Enter"){
//        stopFunc();
//     }
// }

// function pressMe(){
//    var color1 = Math.floor(Math.random()*256);
//    var color2 = Math.floor(Math.random()*256);
//    var color3 = Math.floor(Math.random()*256);
//    div_2.style.backgroundColor = "rgb("+color1+","+color2+","+color3+")";
// }

// var dictance = 0;
// var intervalId;
// function getHeightWidth(){
// intervalId = setInterval(()=>{
//     if(height_input.value > dictance){
//         div_3.style.height = dictance++ + "px";
//     }
//     if(width_input.value > dictance){
//        div_3.style.width = dictance++ + "px";
//     }50
// },10)
// }

// function stopSpace() {
//     clearInterval(intervalId);
// }

var colorsArray =[];
var intervalId;
var randomColor;
function startMyFunc(){
    if(colorsArray.length<=5){
        colorsArray.push(color_id.value);
    }
    if(colorsArray.length == 5){
        intervalId = setInterval(()=>{
        h1_id.innerHTML = text_id.value;
        randomColor = Math.floor(Math.random()*6);
        h1_id.style.color = colorsArray[randomColor];
     },10)
  }
}

function stopFunc(){
    clearInterval(intervalId);
}
