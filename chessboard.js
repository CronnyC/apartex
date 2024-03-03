// Get the container element
const chessboard = document.querySelector('.chessboard');
const myDiv = document.getElementById('navline');



function cesbort(){
    
    
    let columns = Math.floor(window.innerWidth/100);
    //let size = (Math.floor(((window.innerWidth-(window.innerWidth/80)) / columns)/5))*4;
    let size = Math.floor(window.innerWidth / columns);
    let gapp=size/4;
    chessboard.style.position = 'absolute';

    //chessboard.textContent = window.innerWidth;
    



    chessboard.style.display = 'grid';
    chessboard.style.gridTemplateColumns = `repeat(20, ${size/20}vw)`; // Use backticks for string interpolation
    chessboard.style.gridTemplateRows = `repeat(30, ${size/20}vw)`; // Use backticks for string interpolation
    chessboard.style.gap = 0;
    chessboard.style.width = '100%';
    chessboard.style.height = '100%';
    chessboard.style.padding = 0;
    chessboard.style.margin = 0;
    chessboard.style.left = 0;



    // Create squares dynamically
    for (let i = 0; i < columns * 20; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        //square.style.backgroundColor = 'rgba(231, 100, 100, 0)'; // Default color
        square.style.background= 'radial-gradient(rgba(255, 255, 255, 0.05) 70%, rgba(0, 0, 0, 0) 70%)'; // Default color
        
        square.style.boxSizing = 'border-box';
        square.style.display = 'flex';
        square.style.alignItems = 'center';
        square.style.justifyContent = 'center';
        square.style.zIndex = '1';
        chessboard.appendChild(square);
        
        // Add event listeners for hover effect
        square.addEventListener('mouseenter', function() {
            //square.style.backgroundColor = 'rgba(255, 255, 0, 0.35)'; // Change background color on hover
            square.style.background= 'radial-gradient(rgba(255, 255, 255, 0.1) 70%, rgba(0, 0, 0, 0) 70%)'; // Default color
            square.style.transform = 'scale(1.3)';
            square.style.borderRadius = '20%';
            square.style.zIndex = '12';
            square.style.transition = 'background-color 0.1s ease, transform 0.1s ease, border-radius 0.2s ease'; // Smooth transition for color change
        });
        square.addEventListener('mouseleave', function() {
            //square.style.background= 'radial-gradient(rgba(0, 255, 174, 0.8), rgba(0, 0, 255, 0) 60.71%)'; // Default color
            square.style.background= 'radial-gradient(rgba(255, 255, 255, 0.05) 70%, rgba(0, 0, 0, 0) 70%)'; // Default color
            square.style.transform = 'scale(1)';
            square.style.borderRadius = 0;
            square.style.zIndex = '1';
            square.style.transition = 'background-color 0.6s ease, transform 0.7s ease'; // Smooth transition for color change
        });
    }
}

window.addEventListener('DOMContentLoaded', cesbort);

// Update the chessboard when the window is resized
window.addEventListener('resize', cesbort);

window.onscroll = function() {skrol()};
            
            function skrol() {
              var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
              //alert(winScroll+"negr");
              if(15-(winScroll/50)>7)
                navline.style.height=15-(winScroll/50)+'%';
              var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
              var scrolled = (winScroll / height) * 100;
              document.getElementById("myBar").style.width = scrolled + "%";
            }