// Theme switching functionality with improved practices
class ThemeManager {
    constructor() {
        this.themeSelect = document.getElementById('theme');
        this.body = document.body;
        this.logo = document.getElementById('logo');
        this.storageKey = 'theme';
        this.themes = {
            light: {
                class: '',
                logo: 'byui-logo-blue.png.png',
                alt: 'BYU-Idaho logo - blue'
            },
            dark: {
                class: 'dark',
                logo: 'byui-logo-white.png',
                alt: 'BYU-Idaho logo - white'
            }
        };
    }

    init() {
        // Load saved theme or default to light
        const savedTheme = this.getSavedTheme();
        this.applyTheme(savedTheme);
        this.themeSelect.value = savedTheme;

        // Listen for theme changes
        this.themeSelect.addEventListener('change', (e) => {
            this.handleThemeChange(e.target.value);
        });
    }

    getSavedTheme() {
        return localStorage.getItem(this.storageKey) || 'light';
    }

    handleThemeChange(theme) {
        if (this.themes[theme]) {
            this.applyTheme(theme);
            this.saveTheme(theme);
        }
    }

    applyTheme(theme) {
        const themeConfig = this.themes[theme];
        
        // Update body class
        this.body.className = themeConfig.class;
        
        // Update logo
        this.logo.src = themeConfig.logo;
        this.logo.alt = themeConfig.alt;
    }

    saveTheme(theme) {
        localStorage.setItem(this.storageKey, theme);
    }
}

// Initialize theme manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const themeManager = new ThemeManager();
    themeManager.init();
});
