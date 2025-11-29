function start()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('surnameOutput').innerHTML = initPerson.surName;
    document.getElementById('genderOutput').innerHTML = initPerson.gender;
    document.getElementById('birthYearOutput').innerHTML = initPerson.birthDate + ' года рождения';
    document.getElementById('profession').innerHTML = initPerson.profession;
};

function clear() {
    window.location.href = "index.html"
};

const clearBtn = document.querySelector('#clear-btn');
const generateBtn = document.querySelector('#generate-btn');

generateBtn.addEventListener('click', start);
clearBtn.addEventListener('click', clear);