// let container = document.querySelector('.container');
// let wrap = document.querySelector('.wrap');
// let child = document.querySelectorAll('.child');

// let arr = [];

// for(let i=0; i<child.length; i++){
// 	arr.push(child[i].offsetHeight);
// };

// console.log(arr)
// console.log(child[0].offsetHeight)
// console.log(child[1].offsetHeight)
// console.log(child[2].offsetHeight)
// console.log(child[3].offsetHeight)

// function sum(total, num){
// 	return total + num;
// }

// let scrollY = window.scrollY;
// container.style.bottom = -scrollY

// let childHeightSum = arr.reduce(sum);

// container.style.height = `${childHeightSum}px`
// wrap.style.height = `${childHeightSum}px`

// window.addEventListener('scroll', function(){
// 	let scrollY = window.scrollY;
// 	container.style.bottom = -scrollY
// });


// setTimeout(function(){
// let container = document.querySelector('.container');
// let wrap = document.querySelector('.wrap');
// let child = document.querySelectorAll('.child');

// let arr = [];

// for(let i=0; i<child.length; i++){
// 	arr.push(child[i].offsetHeight);
// };

// console.log(arr)
// console.log(child[0].offsetHeight)
// console.log(child[1].offsetHeight)
// console.log(child[2].offsetHeight)
// console.log(child[3].offsetHeight)

// function sum(total, num){
// 	return total + num;
// }



// let childHeightSum = arr.reduce(sum);

// container.style.height = `${childHeightSum-100}px`
// wrap.style.height = `${childHeightSum-100}px`


// window.addEventListener('scroll', function(){
// 	let scrollY = window.scrollY;
// 	container.style.bottom = -scrollY
// });

// },2000)




window.addEventListener('load', function(){
	let container = document.querySelector('.container');
let wrap = document.querySelector('.wrap');
let child = document.querySelectorAll('.child');

let arr = [];

for(let i=0; i<child.length; i++){
	arr.push(child[i].offsetHeight);
};

console.log(arr)
console.log(child[0].offsetHeight)
console.log(child[1].offsetHeight)
console.log(child[2].offsetHeight)
console.log(child[3].offsetHeight)

function sum(total, num){
	return total + num;
}



let childHeightSum = arr.reduce(sum);

container.style.height = `${childHeightSum}px`
wrap.style.height = `${childHeightSum}px`


window.addEventListener('scroll', function(){
	let scrollY = window.scrollY;
	container.style.bottom = -scrollY
});
})