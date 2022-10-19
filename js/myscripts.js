//Sort
var testArray=[10,1,2,3,4,5,6,9,24,22,45,32];
testArray.reverse();
console.log(testArray);

var testString="a,b,c,d,e,f,2,3,44,43";
var testArray=testString.split(",");
var testJoin=testArray.join(".");
console.log(testJoin);

var pairnumber= testArray.filter((num=>{return num % 2===0;}))
console.log(pairnumber);

var numberArray=[1,2,3,4,6,8];
var numberArray2=numberArray.map(function(num){return num*num;});

console.log(numberArray2);

(function(){
    document.getElementById("btn_cl").addEventListener("click",()=>{
        console.log("Click detected");
    });
})();

var course={
    title: "Course JS advanced",
    section:4,
    subsection:6,
    teacher:"Javier Prada",
    intro: function(){
        return "Welcome to "+this.title+" with "+this.section+" sections.";
    }
}

console.log(course["teacher"]);
console.log(course,teacher);

let text = course.intro();

console.log(text);