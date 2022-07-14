const Button = document.getElementById("addBtn");
const lists = document.getElementById("ButtonGroup");
let currentNo = 0;

async function createButton() {


    const res = await fetch("/data/questions.json");
    const question = await res.json();

    if (currentNo === question.questions.length - 1) {
        location.href = "/view/result.html";
    }
    while (lists.firstChild) {
        lists.removeChild(lists.firstChild);
    }

    question.questions[currentNo].answers.map((answer, index) => {
        const newbutton = document.createElement("button");
        newbutton.innerText = answer;
        lists.appendChild(newbutton);
        console.log(lists);
        console.log(newbutton);
        newbutton.className = "answerButton";

        newbutton.onclick = function () {
            currentNo++;
            createButton();
        }
    });
}


createButton();