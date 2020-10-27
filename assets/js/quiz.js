function divClick(eventTarget) {
    eventTarget.style.display = 'none';
    //eventTarget.classList.add('yes');
    document.querySelector('.arrows-container').style.display = 'none';
    document.getElementById('quiz-1').style.display = 'block';

    scrollToElement(document.querySelector('#quiz-1'));
}


function handleButtonClick(currentElement, isCurrentAnswerCorrect, questionNumber) {
    currentElement.classList.add(isCurrentAnswerCorrect ? 'answer__button_correct' : 'answer__button_wrong');

    console.log(questionNumber);
    if (questionNumber === 5) {
        //showform
        return;
    }

    if (isCurrentAnswerCorrect) {
        showNextButton(questionNumber);
    } else {
        setTimeout(() => {
            currentElement.classList.remove('answer__button_wrong');
        }, 2000)
    }

    scrollToElement(document.querySelector('#quiz-' + questionNumber + ' .feedback-block'));
}

let openPopUp = () => {
    document.querySelector('.q8-wrap-pop-up').style.display = 'flex';
}

function showNextStep(index) {
    document.getElementById(`quiz-${index}`).style.display = 'none'
    document.getElementById(`quiz-${index + 1}`).style.display = 'block'

    scrollToElement(document.querySelector('#quiz-' + (index + 1)));
}


function showNextButton(questionNumber) {
    document.querySelector(`#quiz-${questionNumber} .feedback-block`).style.display = 'flex'
}

document.querySelector('.close-pop-up-button').addEventListener('click', () => {
    document.querySelector('.q8-wrap-pop-up').style.display = 'none';
    document.location.reload();
})

function scrollToElement(element) {
    element.scrollIntoView({block: "center", behavior: "smooth"});
}