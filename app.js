// var input = document.getElementById("in")
function va(num){
    var input = document.getElementById("in")
    
    input.value += num
    // console.log(ins)
}
function fe(num){
    var input =document.getElementById("in")
    var r =eval(input.value)
    input.value= r
}
function one(){
    var input =document.getElementById("in")
    input.value=input.value.slice(0,-1)
}
function a(){
    var input =document.getElementById("in")
   
    input.value = ""
}