var imgOverlay = document.getElementById('img');
var overlay = document.querySelector('.overlay');
console.log(overlay);

imgOverlay.addEventListener('mouseover', ()=>{
overlay.classList.add('showOverlay');
})