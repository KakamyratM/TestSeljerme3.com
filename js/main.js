// main.js

document.addEventListener('DOMContentLoaded', () => {

    // 2. Determine the user's preferred language
    const savedLang = localStorage.getItem('gelbileli_lang');
    const browserLang = navigator.language.split('-')[0];

    // Determine the language to load first
    const initialLang = savedLang || browserLang || 'en';
    
    // 3. Initialize the translation system
    // The window.initTranslations function is made available by translations.js
    if (window.initTranslations) {
        window.initTranslations(initialLang);
    }
    
    // NOTE: The initial button icon setting has been removed from here 
    // because it is handled inside translations.js's initTranslations function 
    // for consistency and to avoid race conditions.
});