

// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Function to set the background color and store it in localStorage
    window.changeColor = function(color) {
        document.body.style.backgroundColor = color;
        localStorage.setItem('backgroundColor', color);
    };

    // Function to update the current background color input value
    function updateCurrentColorInput() {
        const currentColorInput = document.getElementById('colorPicker');
        const storedColor = localStorage.getItem('backgroundColor');
        currentColorInput.value = storedColor || '#ffffff';
    }

    // Apply the stored color or use a default color
    const storedColor = localStorage.getItem('backgroundColor');
    document.body.style.backgroundColor = storedColor || '#ffffff';

    // Listen for changes to the localStorage made by other tabs/windows
    window.addEventListener('storage', function(event) {
        if (event.key === 'backgroundColor') {
            // Update the background color if it changes in another tab/window
            document.body.style.backgroundColor = event.newValue;
            // Update the current background color input value
            updateCurrentColorInput();
        }
    });

    // Set the default value of the current background color input
    updateCurrentColorInput();
});
