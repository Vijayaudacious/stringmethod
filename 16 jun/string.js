let x = "This is My first msg"
console.log(x)
let y = "This is My 'first' Msg"
console.log(y)
document.write(x +" "+ y);
console.log(typeof(y))


var a = "Vijay Saratkar";
console.log(a.slice(6,15));
document.write(a.slice(9,15));            //return string 
console.log(typeof(a));

//string length
const z = "Good Morning Team";               //return number 
console.log(z.length);

//slice str
const st = "apply, boy, girl";
const ts = st.slice(7,10);                  
console.log(ts);                               //return string
console.log(typeof ts);

 //replace str  & (/i & /g) same example
const re = "raj";
const rep = re.replace("raj", "vijay");
console.log(rep);                                  //return string
console.log(typeof rep);

//toUpperCase str
const nam = "vijay saratkar";
const naam = nam.toUpperCase();
console.log(naam);                                     //return string
console.log(typeof naam)

//toLowerCase str
const naaam = naam.toLowerCase()
console.log(naaam)                                     //return string 

//concat str
let text = "Hello";
let text2 = "world";
let text3 = text.concat(" ",text2);
console.log(text3 );

//trim str
const text4 = "       raj yadav       ";
const text5 =  text4.trim(" ");
console.log(text4);
console.log(text5);                           //return string 

//padStart str //padend
const txt = "10";
const txt1 = txt.padStart(4);
console.log(txt1);
console.log(typeof txt1);

// charAt & charcodeAt
 const test = " hello world ";
 const test1 = test.charAt(10);
 console.log(test1);                                 //return string 

 const test2 = test.charCodeAt(3);
 console.log(test2);

// split str
let tet = "a,b,c,d,e,f";
const myArray = tet.split(",");
console.log(myArray[2]);

//STRING SEARCH :- 1. indexOf() 2. lastIndexOf() 3. startsWith() 4. endsWith() 5. search() 6. includes 

const last = "Please locate where 'locate' occurs";
const lat = last.indexOf("please");                  //return number 
const wat =  last.lastIndexOf("occurs");             //return number 
const wait = last.startsWith("where", 14);           //return true and false (boolean)
const wit = last.endsWith("where", 18);              //return true and false (boolean)
const num = last.search("where")                    //return number   
const inc = last.includes("occurs")                 //return true and false  (boolean)

console.log(lat);
console.log(wat);
console.log(wait);
console.log(wit);
console.log(num)
console.log(inc)


//  String match()
const mach = "The rain in SPAIN stays mainly in the plain vain";
const mat = mach.match(/ain/g);
console.log(mat)                                   //returen string





// return value
// const str = "ghkhk"
// const num  = 144
// const boolean =  true
// const obj = {name : "om"}
// const und = undefined
// const nll =  null 
// const arr = [12,241,41524,122]
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof boolean);
// console.log(typeof obj);
// console.log(typeof und);
// console.log(typeof nll);
// console.log(typeof (arr));
