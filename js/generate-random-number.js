// Definer elementer
const outputNumber = document.getElementById("showNumber");
const outputBtn = document.querySelector(".btnNumber");


// Funktion (funktionens navn kan ændres til alt)
function Generator() {

    // Udregninger
    let outputBtn = Math.floor(Math.random() * 101);

    // Print nummer til knap
    document.getElementById("showNumber").innerHTML = outputBtn;
}



///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
/*                                           COLOR CHANGER WITH ARRAYS                           */
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////



// Arrays of Colors
const changeColor = document.getElementById('changeColor'),
    // Define Colors
    colors = ['red', 'green', 'blue', 'yellow', 'black', 'orange', 'navy'];

// Define Colorindex
let colorIndex = 0;

// Add event listener add click change color
changeColor.addEventListener('click', () => {

    // If higher then use variable colorindex
    document.body.style.backgroundColor = colors[colorIndex];
    
    // Color index + 1
    colorIndex = (colorIndex + 1) % colors.length
});