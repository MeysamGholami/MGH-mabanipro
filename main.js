var item = document.getElementsByClassName('item');
var dot = document.getElementsByClassName('dot');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var n = 0;
var i;

function disno(){
    for(i = 0 ; i<item.length ; i++){
        item[i].style.display = 'none';
    }
}

next.addEventListener('click',function(e){
    e.preventDefault();
    n++;
    if(n > item.length - 1){
        n = 0;
    }
    disno();
    item[n].style.display = 'block';
})