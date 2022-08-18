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

function no_active(){
    for( i = 0 ; i<dot.length ; i++){
        dot[i].classList.remove('active');
    }
}

next.addEventListener('click',function(e){
    e.preventDefault();
    n++;
    if(n > item.length - 1){
        n = 0;
    }
    disno();
    no_active();
    item[n].style.display = 'block';
    dot[n].classList.add('active');
})

prev.addEventListener('click',function(e){
    e.preventDefault();
    n--;
    if(n < 0){
        n = item.length - 1;
    }
    disno();
    no_active();
    item[n].style.display = 'block';
    dot[n].classList.add('active');
})
setInterval(function(){
    n++;
    if(n > item.length - 1){
        n = 0;
    }
    disno();
    no_active();
    item[n].style.display = 'block';
    dot[n].classList.add('active');
},3000)