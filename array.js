// JavaScript array Iteration methods 

// 1.  for each()  :- This methodscan help  you to loop array's items.

const arr=[1,2,3,4,5,6];
arr.forEach(item=>{
    console.log(item);
    console.log(typeof(item))
});

// 2. includes()  (returen true false) :-This is Methods check if array  includes the items passed in the methods

const vrr = [1,2,3,4,5,6];
console.log(vrr.includes(6));
// console.log(typeof(vrr.includes))

//  3. filter() :- This methods create new array with only element passed condition inside  the provided function 
const srr = [1,2,3,4,5,6,7,8,9,10];
// const srr = [vijay,raj,hariom,kaka]

const arrfilter=srr.filter(num=>num>3);
console.log(arrfilter);
console.log(srr)

// 4. map() :- This methods create new array by calling the provided    function in every elements.

const maap = [1,2,3,4,5,6];
const oneAdded = maap.map(num => num + 1);
console.log(maap)
console.log(oneAdded)


// 5. reduce () :- This reduce() methods applies a functions asgainst  an accumulator and each element in the 
 // array (from left to right) to reduce  it to a single value  - MON 

const red = [9,9,9,9,9,9,9,9,9,9];
const sum = red .reduce((total,value) => total + value,0);
console.log(sum);
console.log(red);

// 6. some() :- This Methods check it at least one of array's item passed the condition If passed, 
// it return 'true' otherwish 'false'

const som = [1,2.3,4,5,6];
const largNum = som.some(num => num > 4);
console.log(largNum);
const smallNum = som.some(num => num <= 0);
console.log(smallNum); 
console.log(typeof(largNum,smallNum));

// 7. every :- This methods check if all array's items passed the condition. If passed,
// it return 'true' otherwish 'false'

const ev = [1,2,3,4,5,6];
const greaterFour  = ev.every(num => num > 4);
console.log(greaterFour);
const lassTen = ev.every(num => num < 10);
console.log(lassTen);

// 8. sort() :- This methods used to arreng/sort array's item either ascending or descending Order. 

const so = [1,2,3,4,5,6];
const alpha =['e','a','c','u','y'];

// sort in desanding order 
descOrder = so.sort((a,b) => a > b ? -1 : 1);
console.log(descOrder);

// sort in ascending order
ascOrder = alpha.sort((a,b) => a > b ? 1 : -1);
console.log(ascOrder);
 
// 9. Array.form () :- This change all thing that are array-like or itrable into true array especially
 // when working with DOM 
 // so that you can use other array methods like reduce, map, filter and so on. 

 const name  = 'vijay';
const nameArray = Array.from(name);

console.log(name);
console.log(nameArray);

// 10. Arrayof() :- this create array from every argument passed into it.

const Come = Array.of(9,8,7,6,5,4,3,2,1);
console.log(Come);
console.log(typeof(Come))

const Com = Array.of(9,8,7,6,5,4,3,2,1);
console.log(Com);
console.log(typeof(Com))









