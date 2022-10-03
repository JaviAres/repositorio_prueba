
let operator_a=3;
let operator_b=3;
let expo= operator_a**operator_b;
let incr=++operator_a;
let decr=--operator_a;

console.log(expo);
console.log(incr);
console.log(decr);

let x =5;
let y=6;
console.log(x+=5);
console.log(x-=5);
console.log(x*=3);
console.log(y/=2);

let testBoolean=true;
let testNumber=12;
let testString="Hlelo!"
let testBooleanObject=new Boolean(true);

console.log(typeof(testBoolean));
console.log(typeof(testNumber));
console.log(typeof(testString));
console.log(typeof(testBooleanObject));

let testNull=null;
console.log(typeof(testNull));
let testUndefined;
console.log(typeof(testUndefined));

var first_array=[];
var second_array= new Array(3);
var third_array= new Array(3,5);
var fourth_array = new Array(3,5,"Sevile",true,third_array);
console.log(first_array);
console.log(second_array);
console.log(third_array);
console.log(fourth_array);
console.log(third_array[1]);
console.log(fourth_array[4][0]);
console.log(fourth_array.length);
console.log(fourth_array.push("Spain")) ;
console.log(fourth_array);   
fourth_array.unshift(1);
console.log(fourth_array);

fourth_array.forEach(function(element){

    console.log("Fourth Iteration "+element);
})

let aux=3;
if(aux >0){
    console.log("this number is positive");
} else if(aux<0){
    console.log("this njumber is negative")

}else{
    console.log("this number is 0")
}

var DNI_REGEX=/^(\d{8})([A-Z])$/;
let dni="12345678K";
if(dni.match(DNI_REGEX)){
    console.log("Correct DNI");
}else{
    console.log("incorrect DNI");
}

console.log(8==8)
console.log(8=="8")
console.log(8===8)
console.log(8==="8")

console.log(5>8);
console.log(5<8);
console.log(5>=8);
console.log(5<=8);

console.log("test"=="test")
console.log("test"==="test")
console.log("test"=="Test")

var i=1
while (i<10){
    console.log("the number is "+i);
    i++;
}

let today=new Date();
let first_october= new Date(2022,9,1);
console.log(today);
console.log(first_october);
console.log(today.getDay());

if(today>first_october){
    console.log("despues dle primero")
}else{
    console.log("antes del primero")
}
function myFirstFunction(){
console.log("Thank you for your click");
}
function mySecondFunction(){
    console.log("Thank you for your interest")
}

var div=document.getElementById("my_div");
div.classList.add("my_class");
console.log(div);
var div=document.getElementsByTagName("div")
console.log(div)

var second_div = document.querySelector("#my_second_div");
console.log(second_div)

function $(selector){
    return document.querySelectorAll(selector);
}
console.log($(".div_especial"))

var numbers=[1,2,3,4]
var n_elevator_2=numbers.map(function(n){ return n*n;})
console.log(n_elevator_2);

var n_elevator_2=numbers.map((n)=>{return n*n});
console.log (n_elevator_2);

var n_elevator_2=numbers.map(n=> n*n)
console.log(n_elevator_2)

let numbers2=[[1,2],[2,3],[3,4],[4,5]];
let itself=numbers2.map(([x,y])=>x*y)
console.log(itself);


$("#btn2").addEventListener("click",function(){
    var input=document.createElement("input");
    input.setAttribute("type","email")
    input.setAttribute("placeholder","E-mail")
    input.setAttribute("name","emails")
    $("#form").appendChild(input)
    myAlert("Add a new email input")
});
function myAlert(msg){
    //console.log("body").children[1]);
    var div=document.createElement("div")
    div.classList.add("alert")
    div.innerHTML=msg
    var close =document.createElement("spam")
    close.style.float="right"
    close.classList.add("close")
    close.innerHTML="X"
    div.appendChild(close)
    $("body").insertBefore(div,$("body").firstChild);
    bind_close();


}
function $(selector){
    return document.querySelector(selector);
}

function bind_close(){
    let elements=document.querySelectorAll(".close")
    for(var i=elements.length-1;i>=0;i--){
        let el=elements[i];
        el.addEventListener("click",function(){
              this.parentNode.style.display="none";
        })
      
    }
}