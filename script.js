let templateImage = document.querySelector("#templateImage");
let url;


let personalInfo = document.querySelector("#personalInfo");

/*      PERSONAL INFO       */
let genderInput = document.querySelector('#genderInput');
let fatherNameInput = document.querySelector('#father-name');
let dobInput = document.querySelector('#dobInput');
let languageInput = document.querySelector('#languageInput');
let nationalityInput = document.querySelector('#nationalityInput');
let maritalStatusInput = document.querySelector('#maritalStatusInput');
/*      PERSONAL INFO       */




let formSubmit = document.querySelector('form');
let createBtn = document.querySelector('#create');

/*        variebals          */
let formImage = document.querySelector("#formImage");
let fullNameInput = document.querySelector('#fullNameInput');
let houseNoInput = document.querySelector('#houseNoInput');
let landmarkInput = document.querySelector('#landmarkInput');
let areaInput = document.querySelector('#areaInput');
let stateCityInput = document.querySelector('#stateCityInput');
let pincodeInput = document.querySelector('#pincodeInput');
let noInput = document.querySelector('#noInput');
let emailInput = document.querySelector('#emailInput');
let profileInput = document.querySelector('#profileInput');

/*        variebals          */

/*        qualification          */

let qualification = document.querySelector("#qualification");
let uniInput = document.querySelector("#uniInput");
let yearInput = document.querySelector("#yearInput");
let perInput = document.querySelector("#perInput");

/*        qualification          */

/*        OTHER QUALIFICATION          */
let otherQualiInput1 = document.querySelector('#otherQualiInput1');
/*        OTHER QUALIFICATION         */

/*   Work Experience     */
let workExInput = document.querySelector("#workExInput");
/*   Work Experience     */

/*        section 2          */

let careerObjective = document.querySelector('.careerObjective');
let objective = document.querySelector('#objective');
let careerText = document.querySelector('#careerText');


careerObjective.onchange =
    function ik() {
        if (careerObjective.value === 'Entry-level Position') {
            careerText.value = "To make contribution in the organization with best of my ability and also to Develop new skills during the interaction to achieve new heights.";
        }
        else {
            careerText.value = "";
        }
    }

// objective()

/*        section 2          */


function createContent() {
    // if (formImage.src == "") {
    //     console.log("image not selected")
    // } else {
    //     templateImage.style.display = "none";
    // }


    let content = document.querySelector('#content');

    content.innerHTML = `
                    <h3 class="name">${fullNameInput.value}</h3>
                    <p>${houseNoInput.value}</p>
                    <p>${landmarkInput.value}</p>
                    <p>${areaInput.value} - ${pincodeInput.value}</p>
                    <p>Mobile No. : ${noInput.value} </p>
                    <p>Email Id : ${emailInput.value}</p>
                    <p id="profile">Profile : ${profileInput.value}</p>
        `;



    // document.querySelector("#templateImage").style.display = "none";



    /*    qualification     */
    let objective = document.querySelector("#objective");
    objective.innerText = careerText.value;

    // let indexNoDiv1 = document.querySelector("#indexNoDiv1");
    // indexNoDiv1.innerText = .value;

    let qualificationDiv1 = document.querySelector("#qualificationDiv1");
    qualificationDiv1.innerHTML = `<P>${qualificationInput.value}</P>`;

    let schoolDiv1 = document.querySelector("#schoolDiv1");
    schoolDiv1.innerHTML = `<P>${uniInput.value}</P>`;

    let passingYear1 = document.querySelector("#passingYear1");
    passingYear1.innerHTML = `<P>${yearInput.value}</P>`;

    let per1 = document.querySelector("#per1");
    per1.innerHTML = `<P>${perInput.value}</P>`;
    /*    qualification     */



    /*    OTHER QUALIFICATION     */
    let otherQualificationList = document.querySelector("#otherQualificationList");
    otherQualificationList.innerHTML = `<li>${otherQualiInput1.value}</li>`;
    /*    OTHER QUALIFICATION     */



    /*   Work Experience     */
    let workExpList = document.querySelector('#workExpList');
    workExpList.innerHTML = `<li>${workExInput.value}</li>`;
    /*   Work Experience     */


    /*      PERSONAL INFO       */
    let personalInfo = document.querySelector("#personalInfo");
    personalInfo.innerHTML = `
        <div>
            <div>
              <p>Father's Name</p>
              <p>:</p>
            </div>
            <div>
              <p>${fatherNameInput.value}</p>
            </div>
        </div>
        <div>
            <div>
              <p>Date of Birth</p>
              <p>:</p>
            </div>
            <div>
              <p>${dobInput.value}</p>
            </div>
        </div>
        <div>
            <div>
              <p>Language Known</p>
              <p>:</p>
            </div>
            <div>
              <p>${languageInput.value}</p>
            </div>
        </div>
        <div>
            <div>
              <p>Gender</p>
              <p>:</p>
            </div>
            <div>
              <p>${genderInput.value}</p>
            </div>
        </div>
        <div>
            <div>
              <p>Nationality</p>
              <p>:</p>
            </div>
            <div>
              <p>${nationalityInput.value}</p>
            </div>
        </div>
        <div>
            <div>
              <p>Marital Status</p>
              <p>:</p>
            </div>
            <div>
              <p>${maritalStatusInput.value}</p>
            </div>
        </div>
    `;
    /*      PERSONAL INFO       */

    /*     footer     */
    let footer = document.querySelector('.footer');
    footer.innerHTML = `
                    <h4>Date : </h4>
                    <div>
                        <h4>Place : ${areaInput.value}</h4>
                        <h4>(${fullNameInput.value})</h4>
                    </div>
                    `;

    /*     footer     */
}





function pdf() {
    const { jsPDF } = window.jspdf;
    const doc = jsPDF();

    doc.html(
        document.querySelector('#template'),
        {
            callback: function (doc) {
                doc.save('resume.pdf');
            },
            x: 10,
            y: 10,
            width: 190,
            // margin: [11, 11, 11, 11],
            autoPaging: 'text',
            html2canvas: {
                scale: 0.24,
                useCORS: true,
                // allowTaint: false,
                 logging: false,
            },
            windowWidth: 1000,
        }
    );
}


function hide() {
    if (profileInput.value == "") {
        let profile = document.querySelector("#profile");
        profile.style.display = "none";
    }
    if (formImage.src == "") {
        templateImage.style.display = "none";
    }
}
/*
All fields marked with * are required
* Required field
*/

let imgInput = document.querySelector("#imgInput");
imgInput.onchange = function (e) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = function () {
        url = reader.result;
        templateImage.src = url;
        formImage.src = url;
    }
}



createBtn.onclick =
    function () {
        if (
            (!fullNameInput.value == "") && (!houseNoInput.value == "") && (!areaInput.value == "") && (!stateCityInput.value == "") && (!pincodeInput.value == "") && (!noInput.value == "") && (!careerText.value == "") && (!qualificationInput.value == "") && (!perInput.value == "") && (!yearInput.value == "") && (!uniInput.value == "") && (!otherQualiInput1.value == "") && (!workExInput.value == "") && (!fatherNameInput.value == "") && (!dobInput.value == "") && (!languageInput.value == "") && (!genderInput.value == "") && (!nationalityInput.value == "") && (!maritalStatusInput.value == "")
        ) {
            createContent();
            hide();
            pdf();
        }
        else {
            alert("* Required field");
        }
    }

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
});