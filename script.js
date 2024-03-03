// Get the div element by its id
const myDiv = document.getElementById('myDiv');
let clicked=getCookie('clicked');









// Get the container div
const chessboard = document.querySelector('.chessboard');

// Create the chessboard grid dynamically
for (let i = 0; i < 64; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    //square.textContent = 'negr'; // Display square number (optional)

    chessboard.appendChild(square);
}










// Check if x is null or undefined (meaning it's not set)
// If it's not set, initialize it to a default value
if (clicked === null || clicked === undefined) {
    clicked = 0; // Set a default value for x
}

myDiv.addEventListener('click', function() {
    // Change the background color of the body
    if(clicked===0){
    document.body.style.backgroundColor = 'green';
    clicked=1;
    setCookie('clicked', clicked, 1);
    }else{
        document.body.style.backgroundColor = '';
    clicked=0;
    }
});



// Add a mouseenter event listener to the div
myDiv.addEventListener('mouseenter', function() {
    // Change the background color of the body
    if(clicked===0){
    document.body.style.backgroundColor = 'lightblue';
    }
});

// Add a mouseleave event listener to revert changes when mouse leaves the div
myDiv.addEventListener('mouseleave', function() {
    // Revert the background color of the body
    if(clicked===0){
    document.body.style.backgroundColor = ''; // Reverts to the default background color
    }
});









// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie value by name
function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}
