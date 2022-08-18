var item = document.getElementsByClassName('item');
var dot = document.getElementsByClassName('dot');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var n = 0;

next.addEventListener('click',function(e){
    e.preventDefault();
    n++;
    item[n].style.display = 'block';
})