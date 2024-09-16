let submitBtnEl = document.getElementById("submit-button")
let feedbackCard = document.getElementById("feedback-card-container")
let resultfeedbackEl = document.getElementById("result-feedback")
let unhappyEl = document.getElementById("unhappy")
let neutralEl = document.getElementById("neutral")
let satisfyEl = document.getElementById("satisfy")

feedbackCard.style.display = "None"

unhappyEl.onclick = function() {
    feedbackCard.style.display = "block"
    resultfeedbackEl.textContent = "Feedback: UNHAPPY"
}
neutralEl.onclick = function() {
    feedbackCard.style.display = "block"
    resultfeedbackEl.textContent = "Feedback: NEUTRAL"
}
satisfyEl.onclick = function() {
    feedbackCard.style.display = "block"
    resultfeedbackEl.textContent = "Feedback: SATISFIED"
}