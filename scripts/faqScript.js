const fraqQuestions = document.querySelectorAll('.question');
fraqQuestions.forEach( function(element) {

    element.addEventListener('click', function () {
        fraqQuestions.forEach( function(removeActive) {
            removeActive.classList.remove('active');
        });

        this.classList.toggle('active');
    });

});
window.addEventListener('DOMContentLoaded', function() {
    const newFaq = document.getElementById('newFaq');
    const textarea = document.getElementById('message');
    const feedback = document.getElementById('feedback');

    newFaq.addEventListener('submit', function (event) {
        event.preventDefault();
        checkTextarea();
    });

        
        function checkTextarea() {
            if (textarea.value.trim() === '') {
                feedback.textContent = "Empty textarea.";
                feedback.className = "Message error";
            } else {
                feedback.textContent = "Question successfully submitted.";
                feedback.className = "Message success";
                addNewFaq(textarea.value.trim());
                textarea.value = "";
            }
               
        }
        function addNewFaq(message) {
            const existingFaq = document.querySelectorAll('.question');
            const newFaq = document.createElement('div');
            newFaq.className = 'faq-item';
            newFaq.textContent = message;
            existingFaq.appendChild(newFaq);
        }
    });
