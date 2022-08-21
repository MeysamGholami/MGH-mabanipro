var sitem = document.getElementsByClassName('sitem');
var dot = document.getElementsByClassName('dot');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var n = 0;
var i;

function disno(){
    for(i = 0 ; i<sitem.length ; i++){
        sitem[i].style.display = 'none';
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
    if(n > sitem.length - 1){
        n = 0;
    }
    disno();
    no_active();
    sitem[n].style.display = 'block';
    dot[n].classList.add('active');
})

prev.addEventListener('click',function(e){
    e.preventDefault();
    n--;
    if(n < 0){
        n = sitem.length - 1;
    }
    disno();
    no_active();
    sitem[n].style.display = 'block';
    dot[n].classList.add('active');
})
setInterval(function(){
    n++;
    if(n > sitem.length - 1){
        n = 0;
    }
    disno();
    no_active();
    sitem[n].style.display = 'block';
    dot[n].classList.add('active');
},3000)


let rtime = 172800;

function setTime(){
    if(rtime == 0) return;
    let h = Math.floor(rtime/3600);
    let m = Math.floor((rtime%3600)/60);
    let s = (rtime%3600)%60;
    document.querySelector('#hou').innerHTML = h
    document.querySelector('#min').innerHTML = m
    document.querySelector('#sec').innerHTML = s
}
setInterval(() => {
    rtime -= 1;
    setTime()
}, 1000);