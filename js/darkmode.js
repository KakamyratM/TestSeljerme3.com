// darkmode.js - Full Theme Selector with Dropdown
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeMenu = document.getElementById('theme-menu');
  const currentIcon = document.getElementById('current-theme-icon');
  const root = document.documentElement;

  if (!toggleBtn) {
    console.error('Theme toggle button not found!');
    return;
  }
  if (!themeMenu) console.warn('Theme menu not found – simple toggle only');
  if (!currentIcon) console.warn('Theme icon not found');

  // Load saved theme or system default
  const savedTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const isDark = savedTheme === 'dark';
  root.classList.toggle('dark', isDark);
  if (currentIcon) currentIcon.textContent = isDark ? '🌙' : '☀️';
  console.log('Theme loaded:', savedTheme);

  // Toggle dropdown visibility (if menu exists)
  if (themeMenu) {
    toggleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const isVisible = themeMenu.getAttribute('aria-hidden') === 'false';
      themeMenu.setAttribute('aria-hidden', !isVisible ? 'false' : 'true');
      console.log('Dropdown toggled:', !isVisible);
    });

    // Close on outside click
    document.addEventListener('click', function(e) {
      if (!toggleBtn.contains(e.target) && !themeMenu.contains(e.target)) {
        themeMenu.setAttribute('aria-hidden', 'true');
      }
    });

    // Handle theme selection
    document.querySelectorAll('.mode-option').forEach(option => {
      option.addEventListener('click', function(e) {
        e.preventDefault();
        const newTheme = this.getAttribute('data-theme');
        const isDarkNew = newTheme === 'dark';
        root.classList.toggle('dark', isDarkNew);
        localStorage.setItem('theme', isDarkNew ? 'dark' : 'light');
        if (currentIcon) currentIcon.textContent = isDarkNew ? '🌙' : '☀️';
        themeMenu.setAttribute('aria-hidden', 'true');
        console.log('Theme switched to:', newTheme);
      });
    });
  } else {
    // Fallback simple toggle on button click
    toggleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const isDark = root.classList.contains('dark');
      root.classList.toggle('dark');
      const newDark = !isDark;
      localStorage.setItem('theme', newDark ? 'dark' : 'light');
      if (currentIcon) currentIcon.textContent = newDark ? '🌙' : '☀️';
      console.log('Simple toggle to:', newDark ? 'dark' : 'light');
    });
  }

  // System preference changes (if no user choice)
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      root.classList.toggle('dark', e.matches);
      if (currentIcon) currentIcon.textContent = e.matches ? '🌙' : '☀️';
      console.log('System theme changed to:', e.matches ? 'dark' : 'light');
    }
  });
});