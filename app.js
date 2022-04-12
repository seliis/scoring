const serverAddr = "http://127.0.0.1:8080/"
const questionAmount = 3

function makeQuestions() {
    const questionArea = document.getElementById("question-area")
    let stream = ""

    for (let i=0; i < questionAmount; i++) {
        let num = i + 1
        stream += `
            <div class="question-each">
                <h2 class="question-number">
                    Question ${i+1}
                </h2>
                <div class="answer-list">
                    ${makeQuestionBtn(num)}
                </div>
            </div>
        `
    }

    questionArea.innerHTML = stream
}

function makeQuestionBtn(questionNumber) {
    let stream = ""
    for (let i=0; i < 5; i++) {
        const name = `question-${questionNumber}-answer`
        const id = name + "-" + (i + 1)
        stream += `
            <div class="answer-each">
                <label for="${id}">${i + 1}</label>
                <input type="radio" id="${id}" class="answer-btn" name="${name}" value="${i + 1}"/>
            </div>
        `
    }
    return stream
}

function submitData() {
    let answerData = []
    for (i=0; i < questionAmount; i++) {
        const answer = document.querySelector(`input[name="question-${i+1}-answer"]:checked`)
        if (answer == null) {
            alert("answer not given at question " + (i + 1))
            break
        } else {
            answerData.push(answer.value)
        }
    }
    if (answerData.length == (questionAmount)) {
        const headerData = {
            method: "POST",
            body: JSON.stringify(answerData),
            headers: {
                "content-type": "application/json; charset=utf-8"
            }
        }
        fetch(
            serverAddr, headerData
        ).then(
            alert("sumitted")
        )
    }
}

window.onload = function() {
    makeQuestions()
}