const LANGUAGES_PATH = '../languages/'; // Adjust if needed
let currentLang = localStorage.getItem('lang') || 'en';
let translations = {}; // Cache for UI translations
let questionTranslations = {}; // Cache for question translations

// Load UI translations
async function loadTranslations(lang) {
  try {
    const response = await fetch(`${LANGUAGES_PATH}${lang}.json`);
    if (!response.ok) throw new Error(`Failed to load ${lang}.json`);
    translations[lang] = await response.json();
    return translations[lang];
  } catch (error) {
    console.warn(`Error loading ${lang}:`, error);
    if (lang !== 'en') {
      await loadTranslations('en');
      return translations['en'];
    }
    return {};
  }
}

// Load question translations
async function loadQuestionTranslations(lang) {
  try {
    const response = await fetch(`../questiontrans/}${lang}.question.json`);
    if (!response.ok) throw new Error(`Failed to load ${lang}.question.json`);
    questionTranslations[lang] = await response.json();
    return questionTranslations[lang];
  } catch (error) {
    console.warn(`Error loading ${lang}_questions:`, error);
    if (lang !== 'en') {
      await loadQuestionTranslations('en');
      return questionTranslations['en'];
    }
    return {};
  }
}

// Update DOM elements with translations
function updateContent(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let text = translations[lang];
    keys.forEach(k => {
      if (text && text[k]) text = text[k];
      else text = key;
    });
    if (typeof text === 'string') {
      if (el.classList.contains('progress-tracker')) return; // Skip progress tracker
      if (el.tagName === 'OPTGROUP') el.label = text;
      else el.textContent = text;
    }
  });
  document.documentElement.lang = lang;
  document.title = translations[lang]?.global?.title || 'TestSeljerme';

  // Refresh select dropdown
  const select = document.getElementById('topic');
  if (select) {
    const currentValue = select.value;
    select.value = '';
    select.value = currentValue;
    select.dispatchEvent(new Event('change', { bubbles: true }));
  }
}

// Initialize i18n
async function initI18n() {
  await Promise.all([loadTranslations(currentLang), loadQuestionTranslations(currentLang)]);
  updateContent(currentLang);
}

// Language switcher
document.addEventListener('DOMContentLoaded', () => {
  initI18n();

  const langOptions = document.querySelectorAll('.language-option');
  langOptions.forEach(option => {
    option.addEventListener('click', async (e) => {
      e.preventDefault();
      const newLang = e.currentTarget.getAttribute('data-lang');
      if (newLang !== currentLang) {
        currentLang = newLang;
        localStorage.setItem('lang', newLang);
        await Promise.all([loadTranslations(newLang), loadQuestionTranslations(newLang)]);
        updateContent(newLang);
        const dropdown = document.querySelector('.language-dropdown');
        if (dropdown) dropdown.style.display = 'none';
      }
    });
  });

  const langButton = document.querySelector('.language-button');
  const dropdown = document.querySelector('.language-dropdown');
  if (langButton && dropdown) {
    langButton.addEventListener('click', () => {
      dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
    document.addEventListener('click', (e) => {
      if (!langButton.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
      }
    });
  }
});

// Export for use in other files
window.loadQuestionTranslations = loadQuestionTranslations;
window.questionTranslations = questionTranslations;
window.currentLang = currentLang;
window.getTranslatedQuestion = function(originalQuestionText) {
  const lang = window.currentLang;
  if (window.questionTranslations && window.questionTranslations[lang]) {
    return window.questionTranslations[lang][originalQuestionText] || originalQuestionText;
  }
  return originalQuestionText;
};
