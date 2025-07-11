




let addQualification = document.querySelector(".addQualification");

addQualification.onclick = function () {

    let qualificationDiv = document.querySelector("#qualification");
    let container2 = document.createElement("div");
    container2.setAttribute("class", "container2");
    container2.innerHTML =
        `
        <input required type="text" class="newQualificationInput" id="qualificationInput"
            placeholder="Qualification*">

        <input required type="text" class="newBoardInput" id="uniInput" placeholder="University / Board *">

        <input required type="number" class="newYearInput" id="yearInput" placeholder="Year *">

        <input required type="number" class="newPerInput" id="perInput" placeholder="Per % *">

        <button class="remove" type="button">Remove</button>
        `;
    qualificationDiv.appendChild(container2);
    // qualificationFunction();
    selectInputs();
    removeFiled();

    addQualification.remove();
    qualificationDiv.appendChild(addQualification);
}

function removeFiled() {
    let removeBtn = document.querySelectorAll('.remove');
    for (let i = 0; i < removeBtn.length; i++) {
        removeBtn[i].onclick =
            function () {
                this.parentElement.remove();
                // qualificationFunction();
                selectInputs();     
            }
    }
}
removeFiled();

let addOtherQualification = document.querySelectorAll(".addPoint");
let workExDiv = document.querySelector("#workEx");

let workMain = document.querySelector("#workMain");
let otherMain = document.querySelector("#otherMain");
for (let i = 0; i < addOtherQualification.length; i++) {
    addOtherQualification[i].onclick =
        function () {
            if (this.parentElement == workExDiv) {
                let workEx = document.createElement("div");
                workEx.innerHTML = `
                <input required class="side" id="workExInput" type="text"
                placeholder="Company Name and Years Or Fresher *">
                <span class="side-btn remove">X</span>
                `;
                workMain.appendChild(workEx);
                removeFiled();
                // workExpListFunction();
                selectInputs();
            }
            else {
                let otherQual = document.createElement("div");
                otherQual.innerHTML = `
                    <input required class="side" id="otherQualiInput" type="text" placeholder="Basic Computer,Telly *">
                    <span class="side-btn remove">X</span>
                `;
                otherMain.appendChild(otherQual);
                removeFiled();
                // otherQualiFunction();
                selectInputs();
            }
        }
}

