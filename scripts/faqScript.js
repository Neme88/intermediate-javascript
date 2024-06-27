const numQuestions = document.getElementById('questions').children;
function toggleThroughQuestions(event){
            const fraqQuestions = document.querySelectorAll('.question');
            fraqQuestions.forEach( function(removeActive) {
                if(removeActive !== event.currentTarget){
                    removeActive.classList.remove('active');
                }
                
            });
    
             event.currentTarget.classList.toggle('active');   
};
const fraqQuestions = document.querySelectorAll('.question');
fraqQuestions.forEach(function(question) {
    question.addEventListener('click', toggleThroughQuestions);
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
            p.textContent = "Here I am.";
            newFaq.appendChild(h3);
            newFaq.appendChild(p);
            faqContainer.appendChild(newFaq);
            newFaq.addEventListener('click', toggleThroughQuestions);        }
    });
