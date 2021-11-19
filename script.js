console.log('Im linked');
const fishFilter = document.querySelector("#fishFilter");
const searchFilter = document.querySelector("#searchFilter");
const list = document.getElementById('list');

let objectArray = [
    {
    sku: 123,
    Recipe:'./img/recipe.jpeg',
    name: 'snapper',
    price: 45,
    Kind: 'fillet',
    Tag: ['smoked','salmon','boneless','snapper', 'whole fish'],
    image: './img/snapper-3.jpeg',
    showAll: 'all'
},

{
    sku: 345,
    Recipe:'./img/recipe2.jpeg',
    name: 'trevally',
    price: 35,
    Kind: 'bone-in',
    Tag: ['smoked','salmon','boneless','snapper', 'whole fish', 'bone-in'],
    image: './img/trevally.jpeg',
    showAll: 'all'
},

{
    sku: 567,
    Recipe:'./img/recipe-03.jpeg',
    name: 'tuna-steak',
    Kind: 'steak',
    Tag: ['smoked','salmon','boneless','snapper', 'whole fish', 'bone-in'],
    price: 75,
    image: './img/Tuna-Steak-Main_2.jpeg',
    showAll: 'all'
},


{
    sku: 890,
    Recipe:'./img/recipe-04.png',
    name: 'salmon',
    Kind: 'smoked',
    Tag: ['smoked','salmon','boneless','snapper', 'whole fish'],
    price: 65,
    image: './img/smoked_salmon.jpeg',
    showAll: 'all'
},
{
    sku: 931,
    Recipe:'./img/recipe-05.jpg',
    name: 'tarakihi',
    Kind: 'fillet',
    Tag: ['smoked','salmon','boneless','snapper', 'whole fish'],
    price: 65,
    image: './img/Tarakihi.jpg',
    showAll: 'all'
},

{
    sku: 932,
    Recipe:'./img/recipe-06.jpeg',
    name: 'flounder',
    Kind: 'whole fish',
    Tag: ['smoked','salmon','boneless','snapper', 'whole fish'],
    price: 65,
    image: './img/flounder.jpg',
    showAll: 'all'
},

];

function setList(group) {
    clearList();
    for (const objectArray of group) {
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        const text = document.createTextNode(objectArray.name);
        item.appendChild(text);
        list.appendChild(item);
    }
    if (group.length === 0) {
        setNoResults();
    }

}
function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);

    }

}
function setNoResults() {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const text = document.createTextNode('No results found');
    item.appendChild(text);
    list.appendChild(item);

}
function getRelevancy(value,searchTerm) {
    if (value === searchTerm) {
        return 2;
    } else if (value.startsWith(searchTerm)) {
            return 1;
    } else {
        return 0;
        }
    }

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
    let value = event.target.value;
    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase();
        setList(objectArray.filter(fish => {
            return fish.name.includes(value);
        }).sort((fishA, fishB) => {
            return getRelevancy(fishA.name, value) - getRelevancy(fishB.name, value);

        }));

    }   else {
            clearList();
    }

    });


//end of search


function objectArrayCardInfo(){
    let i = 0;
    for(i = 0; i<objectArray.length; i++){
        $('#cardContent').append(
            `
            <div class="card" style="width: 15rem;">
            <img class="card-img-top" src="${objectArray[i].image}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${objectArray[i].name}</h5>
                <p class="card-text">${objectArray[i].Kind}</p>
                <p class="card-text">NZD$ ${objectArray[i].price}</p>
                <button id="${objectArray[i].sku}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">free recipe
                </button>
            </div>
        </div>

            `
        );
    };
};



function objectsLoop(){
    objectArrayCardInfo();

$(".moreInformation").click(function(){
        console.log("clicked");
        let i = 0;
        for(i = 0; i< objectArray.length; i++){
            if(parseInt(this.id) === objectArray[i].sku){
                $("#objectArrayModalInfo").empty().append(

                    `
                     <p>${objectArray[i].name}</p>
                     <p>We update our recipe weekly</p>
                     <img class="card-img-top" src="${objectArray[i].Recipe}" alt="Recipe Download">

                    `
                );

            }
        }
    });
}

//end of modal

objectsLoop();

// filter function
function Fishkind(event){
    $('#cardContent').empty();
    event.preventDefault();
    let selectedFish = [];
    // start of value check
    console.log(selectedFish);
    $('input[name="fish"]:checked').each( function(){
       selectedFish.push(this.value);
    });
    console.log(selectedFish);
    // end of value check

    let i = 0;
    // start of selcted loop
    for(i = 0; i < selectedFish.length; i++){

        if(selectedFish[i] === 'snapper'){
           let i = 0;
           for(i = 0; i<objectArray.length; i++){
                //    start of if statement
                // check to see if fish is equal to kind of fish
                if(objectArray[i].Kind === 'salmon'){
                    let i = 0;
                    for(i =0; i<objectArray.length; i++);
                        //    start of append
                        $('#cardContent').append(
                            `
                                    <div class="card card--style" style="width: 18rem;">
                                        <div class="img-container">
                                        <img class="card-img-top" src="${objectArray[i].image}" alt="Card image cap">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">${objectArray[i].name}</h5>
                                            <p class="card-text">${objectArray[i].Kind}</p>
                                            <p class="card-text">$${objectArray[i].price}</p>
                                            <button id="${objectArray[i].sku}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
                                                more info
                                            </button>
                                        </div>
                                    </div>
                            `
                        );
                        // end of append
                };
                    //    end of of statement
           }
        }

        if(selectedFish[i] === 'salmon'){
            let i = 0;
           for(i = 0; i<objectArray.length; i++){
                //    start of if statement
                // check to see if salmon is equal to smoked salmon
                if(objectArray[i].Kind === 'smoked'){
                        //    start of append
                        $('#cardContent').append(
                            `
                                    <div class="card card--style" style="width: 18rem;">
                                        <div class="img-container">
                                        <img class="card-img-top" src="${objectArray[i].image}" alt="Card image cap">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">${objectArray[i].name}</h5>
                                            <p class="card-text">${objectArray[i].Kind}</p>
                                            <p class="card-text">$${objectArray[i].price}</p>
                                            <button id="${objectArray[i].sku}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
                                                more info
                                            </button>
                                        </div>
                                    </div>
                            `
                        );
                        // end of append
                };
                    //    end of of statement
           }
        }

        if(selectedFish[i] === 'steak'){
            console.log('is equal to steak');
        }

        if(selectedFish[i] === 'smoked'){
            console.log('is equal to smoked');
        }

    };
    // end of selected loop



modal();

};
//end


function filterSearchWord(){
    //the prop() method sets or return properties and values of selected elements
    $('input[type=checkbox]').prop('checked', false); //if change to true


    console.log('clicked');
    let searchWord = $('#searchWord').val();
    console.log(searchWord);
    filterByWord(searchWord);
    $('input[name=search]').val('');
};

function filterByWord(word){
    console.log(word);
    $('#cardContent').empty();
    let i,j;
    for(i = 0; i<objectArray.length; i++){
        for(j = 0; j<objectArray[i].name.length; j++){
            if(word === objectArray[i].name[j]){
                // console.log(word.toLowerCase());
                generateCard(i);
                modal();
            }
        }
    }
    if(word ===''){
        nonInput();

    }
}
function nonInput(){
    for(let i = 0; i <objectArray.length; i++){
        generateCard(i);
    }
}
//use tolowercase so that user can type anything



function generateCard(x){
    // let x = i;
    $('#cardContent').append(
        `
                <div class="card card--style" style="width: 18rem;">
                    <div class="img-container">
                    <img class="card-img-top" src="${objectArray[x].image}" alt="Card image cap">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${objectArray[x].name}</h5>
                        <p class="card-text">${objectArray[x].Kind}</p>
                        <p class="card-text">$${objectArray[x].price}</p>
                        <button id="${objectArray[x].sku}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
                            more info
                        </button>
                    </div>
                </div>
        `
    );
}


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterSeafood");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");

  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//

//start validation sign up

const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');


const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'The password does not match');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));
