const fraqQuestions = document.querySelectorAll('.question');
fraqQuestions.forEach( function(element) {
    
    element.addEventListener('click', function () {
        fraqQuestions.forEach( function(removeActive) {
            removeActive.classList.remove('active');
        });

        this.classList.toggle('active');
    });

});