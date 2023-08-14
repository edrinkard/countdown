const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check if dark mode preference exists in local storage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Apply dark mode if it was previously enabled
if (isDarkMode) {
    body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    // Toggle the dark mode class on the body element
    body.classList.toggle('dark-mode');

    // Save the dark mode preference to local storage
    const isDarkModeNow = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkModeNow);
});
