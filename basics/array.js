const myArray = [0,1,2,3,4,5];
const myHero = ["a","b","c","d"];
//defining array
const myArr2 = new Array(1,2,3,4);
//methods

// myArray.push(100);//adds element at end
// console.log(myArray);
// myArray.pop();//removes element from end
// console.log(myArray);
// myArray.unshift(67);//adding element at first
// console.log(myArray);
// myArray.shift();//removes element from start
// console.log(myArray);

//slice and splice

// console.log("original array",myArr2);
// const mynewarr = myArr2.slice(0,2);
// console.log("slice array",mynewarr);
// console.log("original array",myArr2);

// const mynewarr2 = myArr2.splice(0,2);
// console.log("splice array",mynewarr2);
// console.log("original array",myArr2);//change in original array

//meging array
//m1
const marvel_heros = ["thor", "IronMan", "spiderman"];
const dc_heroes = ["suprman","flash","batman"];
marvel_heros.push(dc_heroes)
console.log(marvel_heros);
//m2
 const myhero = marvel_heros.concat(dc_heroes);//concat returna new merged array
console.log(myhero);
//m3 spread  operator
 const all_newheroes = [...marvel_heros,...dc_heroes];
console.log(all_newheroes);

//
const array3 = [1,2,3,4,[5,6,7],[8,9,[10,11]],12];
const real_array3 = array3.flat(Infinity);
console.log(real_array3);

//
console.log(Array.isArray("shrey"));// checks if array or not
console.log(Array.from("shrey"));
console.log(Array.from({name : "shrey"}));

