let container = document.querySelector('.container');
let wrap = document.querySelector('.wrap');
let child = document.querySelectorAll('.child');

let arr = [];

for(let i=0; i<child.length; i++){
	arr.push(child[i].clientHeight);
};

function sum(total, num){
	return total + num;
}

let childHeightSum = arr.reduce(sum);

container.style.height = `${childHeightSum}px`
wrap.style.height = `${childHeightSum}px`

window.addEventListener('scroll', function(){
	let scrollY = window.scrollY;
	container.style.bottom = -scrollY
})