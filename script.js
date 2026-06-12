
setTimeout(function(){
    document.getElementById('splash').style.display='none';
    document.getElementById('app').classList.remove('hidden');
}, 4000);
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let actual = 0;

function mostrarSlide(index){

    slides.forEach(slide =>
        slide.classList.remove('active')
    );

    dots.forEach(dot =>
        dot.classList.remove('active-dot')
    );

    slides[index].classList.add('active');
    dots[index].classList.add('active-dot');
}

setInterval(() => {

    actual++;

    if(actual >= slides.length){
        actual = 0;
    }

    mostrarSlide(actual);

}, 3500);
