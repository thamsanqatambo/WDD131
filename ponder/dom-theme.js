// Apply themes based on the select value and persist preference
(function(){
  const SELECT_ID = 'theme-select';
  const STORAGE_KEY = 'ponder-theme';
  const available = ['ocean','forest','desert'];

  function applyTheme(name) {
    document.body.classList.remove(...available);
    if (name && available.includes(name)) document.body.classList.add(name);
  }

  function saveTheme(name) {
    if (name) localStorage.setItem(STORAGE_KEY, name);
    else localStorage.removeItem(STORAGE_KEY);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById(SELECT_ID);
    if (!select) return;

    // load saved theme
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && available.includes(saved)) {
      applyTheme(saved);
      select.value = saved;
    }

    // handle user changes
    select.addEventListener('change', (e) => {
      const val = e.target.value;
      if (val === '') {
        applyTheme('');
        saveTheme('');
      } else if (available.includes(val)) {
        applyTheme(val);
        saveTheme(val);
      }
    });
  });
})();