//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.

    var scope = {
    info1:"Before ES6 (2015), JavaScript had only Global Scope and Function Scope.",
    info2:"ES6 introduced two important new JavaScript keywords: let and const.",
    info3:"Global Scope : A variable declared at the top of a program or outside of a function is considered a global scope variable.",
    info4:"Local Scope : Variables declared within a JavaScript function, become LOCAL to the function.",
    info5:"Block Scope : Variables declared inside a { } block cannot be accessed from outside the block:",
    info6:"./img/scope.png",
    info7:"Advance_js_topic.mp4",



}
var hoisting ={
    info1:"Hoisting is JavaScript's default behavior of moving declarations to the top.",
    info2:"In JavaScript, a variable can be declared after it has been used.",
    info3:"JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.",
    info4:'Hoisting allows functions to be safely used in code before they are declared.',
    info5:"Variable and class declarations are also hoisted, so they too can be referenced before they are declared. Note that doing so can lead to unexpected errors, and is not generally recommended.",
    info6:"./img/hoisting.png",
    info7:"Advance_js_topic.mp4",

}
var constructor={
    info1:"A constructor is a special function that creates and initializes an object instance of a class.",
    info2:"A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.",
    info3:"Syntax: constructor() { /* ... */ }",
    info4:"The ValidationError class doesn't need an explicit constructor, because it doesn't need to do any custom initialization. The default constructor then takes care of initializing the parent Error from the argument it is given.",
    info6:"A constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties",
    info5:"./img/constructor.png",
    info7:"Advance_js_topic.mp4",


}
var prototype ={
    info1:"The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.",
    info2:"Every function includes prototype object by default.",
    info3:"The prototype object is special type of enumerable object to which additional properties can be attached to it which will be shared across all the instances of it's constructor function.",
    info4:"Every object which is created using literal syntax or constructor syntax with the new keyword, includes __proto__ property that points to prototype object of a function that created this object.",
    info5:"All JavaScript objects inherit properties and methods from a prototype.",
    info6:"./img/prototype.png",
    info7:"Advance_js_topic.mp4",


}
// console.log(scope.info1)



localStorage.setItem("scope",JSON.stringify(scope));
localStorage.setItem("hoisting",JSON.stringify(hoisting));
localStorage.setItem("constructor",JSON.stringify(constructor));
localStorage.setItem("prototype",JSON.stringify(prototype));


document.querySelector("#scope").addEventListener("click",scopeing);
document.querySelector("#hoisting").addEventListener("click",hoistings);
document.querySelector("#constructor").addEventListener("click",constructors);
document.querySelector("#prototype").addEventListener("click",proto);


function scopeing(){
    document.querySelector("#information").innerHTML="";

        var div = document.createElement("div");
        div.setAttribute("class","format");
        div.innerText ="Scope";
    var ull = document.createElement("ul");
    var li1 = document.createElement("li");
    li1.innerHTML = scope.info1;
    var li2 = document.createElement("li");
    li2.innerHTML = scope.info2;
    var li3 = document.createElement("li");
    li3.innerHTML = scope.info3;
    var li4 = document.createElement("li");
    li4.innerHTML = scope.info4;
    var li5 = document.createElement("li");
    li5.innerHTML = scope.info5;
    var li6 = document.createElement("li");
    li6.style.listStyle="none";
    
    var img2 = document.createElement("img");
    img2.src = scope.info6;
    li6.append(img2);

    ull.append(li1,li2,li3,li4,li5,li6);
    div.append(ull);
    
    var div1 = document.createElement("div");
    var vid = document.createElement("video");
    vid.style.width="600px";
    vid.style.height="400px";
    vid.style.margin="45px 50px";
    vid.controls=true;

    var sou = document.createElement("source");
    sou.src = scope.info7;
    vid.append(sou);
    div1.append(vid);



    document.querySelector("#information").append(div,div1)
   
    
}
function hoistings(){
    document.querySelector("#information").innerHTML="";

    var div = document.createElement("div");
    div.setAttribute("class","format");
    div.innerText ="Hoisting";
    var ull = document.createElement("ul");
    var li1 = document.createElement("li");
    li1.innerHTML = hoisting.info1;
    var li2 = document.createElement("li");
    li2.innerHTML = hoisting.info2;
    var li3 = document.createElement("li");
    li3.innerHTML = hoisting.info3;
    var li4 = document.createElement("li");
    li4.innerHTML = hoisting.info4;
    var li5 = document.createElement("li");
    li5.innerHTML = hoisting.info5;    
    var li6 = document.createElement("li");
    li6.style.listStyle="none";
    var img2 = document.createElement("img");
    img2.src = hoisting.info6;
    li6.append(img2);
    

    ull.append(li1,li2,li3,li4,li5,li6);
    div.append(ull); 
    
    var div1 = document.createElement("div");
    var vid = document.createElement("video");
    vid.style.width="600px";
    vid.style.height="400px";
    vid.style.margin="45px 50px";
    vid.controls=true;
    
    var sou = document.createElement("source");
    sou.src = hoisting.info7;
    vid.append(sou);
    div1.append(vid);


    document.querySelector("#information").append(div,div1)
    
}
function constructors(){
    document.querySelector("#information").innerHTML="";

    var div = document.createElement("div");
    div.setAttribute("class","format");
    div.innerText ="Constructor Functions";
    var ull = document.createElement("ul");
    var li1 = document.createElement("li");
    li1.innerHTML = constructor.info1;
    var li2 = document.createElement("li");
    li2.innerHTML = constructor.info2;
    var li3 = document.createElement("li");
    li3.innerHTML = constructor.info3;
    var li4 = document.createElement("li");
    li4.innerHTML = constructor.info4;    
    var li5 = document.createElement("li");
    li5.style.listStyle="none";
    var img2 = document.createElement("img");
    img2.src = constructor.info5;
    li5.append(img2);
    var li6 = document.createElement("li");
    li6.innerHTML = constructor.info6;

    ull.append(li1,li2,li3,li4,li6,li5);
    div.append(ull);
    var div1 = document.createElement("div");
    var vid = document.createElement("video");
   vid.style.width="600px";
    vid.style.height="400px";
    vid.style.margin="45px 50px";
    vid.controls=true;
       var sou = document.createElement("source");
       sou.src = constructor.info7;
       vid.append(sou);
       div1.append(vid);



    document.querySelector("#information").append(div,div1)
    
}
function proto(){
    document.querySelector("#information").innerHTML="";
    var div = document.createElement("div");
    div.setAttribute("class","format");
    div.innerText ="Prototype";
    var ull = document.createElement("ul");
    var li1 = document.createElement("li");
    li1.innerHTML = prototype.info1;
    var li2 = document.createElement("li");
    li2.innerHTML = prototype.info2;
    var li3 = document.createElement("li");
    li3.innerHTML = prototype.info3;
    var li4 = document.createElement("li");
    li4.innerHTML = prototype.info4;
    var li5 = document.createElement("li");
    li5.innerHTML = prototype.info5;
    var li6 = document.createElement("li");
    li6.style.listStyle="none";
    var img2 = document.createElement("img");
    img2.src = prototype.info6;
    li6.append(img2);

    

    ull.append(li1,li2,li3,li4,li5,li6);
    div.append(ull);

    var div1 = document.createElement("div");       
       var vid = document.createElement("video");
   vid.style.width="600px";
    vid.style.height="400px";
    vid.style.margin="45px 50px";
    vid.controls=true;
       var sou = document.createElement("source");
       sou.src = prototype.info7;
       vid.append(sou);
       div1.append(vid);


    document.querySelector("#information").append(div,div1)
}