const form = document.querySelector('form');

const inputSurname = document.getElementById('form-surname');
const inputName = document.getElementById('form-name');
const inputPhone = document.getElementById('form-phone');
const inputMail = document.getElementById('form-mail');
const inputMsg = document.getElementById('form-msg');
const submitBtn = document.getElementById('form-btn');

const errSurname = document.getElementById('errSurname');
const errName = document.getElementById('errName');
const errPhone = document.getElementById('errPhone');
const errMail = document.getElementById('errMail');
const errMsg = document.getElementById('errMsg');
const errEmpty = document.getElementById('errEmpty');

const modalOn = document.getElementById('modal');
const modalOffBtn = document.getElementById('modal-off');


let isTestSurnameValid = true;
function testSurname() {
    inputSurname.addEventListener('input', () => {
        const valSur = inputSurname.value;
        const regText = /^[a-zA-Z ]{3,}$/g;

        if (!regText.test(valSur)) {
            errSurname.innerHTML = '<p>Please enter at least 3 characters and use only letters</>';
            return isTestSurnameValid = false;
        } else {
            errSurname.innerHTML = '';
            return isTestSurnameValid = true;
        }
    });
    return isTestSurnameValid;
};
testSurname();

let isTestNameValid = true;
function testName() {
    inputName.addEventListener('input', () => {
        const valName = inputName.value;
        const regText = /^[a-zA-Z ]{3,}$/g;

        if (!regText.test(valName)) {
            errName.innerHTML = '<p>Please enter at least 3 characters and use only letters</>';
            return isTestNameValid = false;
        } else {
            errName.innerHTML = '';
            return isTestNameValid = true;
        }
    });
    return isTestNameValid;
};
testName();

let isTestPhoneValid = true;
function testPhone() {
    inputPhone.addEventListener('input', () => {
        const valPhone = inputPhone.value;
        const regPhone = /^\d{9}$/;

        if (!regPhone.test(valPhone)) {
            errPhone.innerHTML = '<p>Please enter 9 characters and use only numbers</>';
            return isTestPhoneValid = false;
        } else {
            errPhone.innerHTML = '';
            return isTestPhoneValid = true;
        }
    });
    return isTestPhoneValid;
};
testPhone();

let isTestMailValid = true;
function testMail() {
    inputMail.addEventListener('input', () => {
        const valMail = inputMail.value;
        const regMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!regMail.test(valMail)) {
            errMail.innerHTML = '<p>Please enter the full domain name and use the @ character</>';
            return isTestMailValid = false;
        } else {
            errMail.innerHTML = '';
            return isTestMailValid = true;
        }
    });
    return isTestMailValid;
};
testMail();

let isTestMsgValid = true;
function testMsg() {
    inputMsg.addEventListener('input', () => {
        const valMsg = inputMsg.value;

        if ((valMsg.length < 6) || (valMsg.length > 200)) {
            errMsg.innerHTML = '<p>Please enter between 6 and 100 characters</>';
            return isTestMsgValid = false;
        } else {
            errMsg.innerHTML = '';
            return isTestMsgValid = true;
        }
    });
    return isTestMsgValid;
};
testMsg();

function isInputEmpty() {
    if ((inputSurname.value == null || inputSurname.value == '') ||
        (inputName.value == null || inputName.value == '') ||
        (inputPhone.value == null || inputPhone.value == '') ||
        (inputMail.value == null || inputMail.value == '') ||
        (inputMsg.value == null || inputMsg.value == '')) {
        return true;
    } else {
        errMsg.innerHTML = '';
        return false;
    }
};
isInputEmpty();

function sendFormData() {
    const formInputData = {};

    formInputData.surname = inputSurname.value;
    formInputData.name = inputName.value;
    formInputData.phone = inputPhone.value;
    formInputData.email = inputMail.value;
    formInputData.message = inputMsg.value;
    return formInputData;
};

function clearForm() {
    form.reset();
    errEmpty.innerHTML = '';
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (testSurname() &&
        testName() &&
        testPhone() &&
        testMail() &&
        testMsg() &&
        isInputEmpty() === false) {
        modalOn.style.display = 'block';
        console.log(sendFormData());
    } else {
        errEmpty.innerHTML = '<p>Fields with (*) cannot be empty</p>';
    }
});

modalOffBtn.addEventListener('click', () => {
    modalOn.style.display = 'none';
    clearForm();
});

window.addEventListener('click', (e) => {
    if (e.target == modalOn) {
        modalOn.style.display = 'none';
        clearForm();
    }

});