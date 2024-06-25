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

        // check if the textarea is empty.
        function checkTextarea() {
            console.log('Checking textarea'); 
            console.log(textarea.value); 
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
        // add the new faq to the page.gi
        function addNewFaq(message) {
            const faqContainer = document.getElementById('questions');
            const newFaq = document.createElement('div');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');
            newFaq.className = 'question';
            //newFaq.textContent = message;
            h3.textContent = message;
            p.textContent = "";
            newFaq.appendChild(h3);
            newFaq.appendChild(p);
            faqContainer.appendChild(newFaq);
        }
    });
