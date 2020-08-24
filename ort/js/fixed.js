var finish = document.querySelector('#table_2');
var stickymenu = document.getElementById("stickymenu")
var stickymenuoffset = stickymenu.offsetTop;
var finishTotal = finish.offsetHeight + finish.offsetTop;
console.log(stickymenuoffset);
console.log(window.pageYOffset);
window.addEventListener("scroll", function(e) {
    requestAnimationFrame(function() {
        if (!(window.pageYOffset >= 0 && window.pageYOffset <= stickymenuoffset)) {
            stickymenu.id.add('hidden');
        } else {
            stickymenu.id.remove('hidden');
        }
    });
    requestAnimationFrame(function() {
        if (window.pageYOffset > stickymenuoffset) {
            stickymenu.classList.add('sticky')
        } else {
            stickymenu.classList.remove('sticky')
        }
    })
});