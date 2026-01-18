// Theme switching functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme');
    const body = document.body;
    const logo = document.getElementById('logo');

    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    themeSelect.value = savedTheme;

    // Listen for theme changes
    themeSelect.addEventListener('change', (e) => {
        const selectedTheme = e.target.value;
        applyTheme(selectedTheme);
        localStorage.setItem('theme', selectedTheme);
    });

    // Apply theme and update logo
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark');
            logo.src = 'byui-logo-white.png';
            logo.alt = 'BYU-Idaho logo - white';
        } else {
            body.classList.remove('dark');
            logo.src = 'byui-logo-blue.png.png';
            logo.alt = 'BYU-Idaho logo - blue';
        }
    }
});
