function themeSwitch() {

    const themesRadioBtns = document.querySelectorAll('.themes > input[type=radio]');
    const metaThemeColor = document.querySelector('meta[name=theme-color]');

    const themesBgColorsObj = {
        light: 'hsl(0 0% 90%)',
        red: 'hsl(0 50% 50%)',
        blue: 'hsl(220 50% 50%)',
        dark: 'hsl(0 0% 20%)'
    }
    

    // Ф-ция определения темы ОС
    function initialColorScheme() {
        let isSystemThemeDark = window.matchMedia('(prefers-color-scheme: dark)');
        if (isSystemThemeDark.matches) 
            return "dark";
        else  
            return "light";
    }

    function switchMetaThemeColor(themeName) {
        switch (themeName) {
            case 'light':
                setMetaThemeColor(themesBgColorsObj.light);
                break;
    
            case 'red':
                setMetaThemeColor(themesBgColorsObj.red);
                break;
    
            case 'blue':
                setMetaThemeColor(themesBgColorsObj.blue);
                break;
    
            case 'dark':
                setMetaThemeColor(themesBgColorsObj.dark);
                break;
        
            default:
                break;
        }
    }

    function setMetaThemeColor(themeColor) {
        metaThemeColor.setAttribute('content', themeColor);
    }

    const initialCheckedThemeRadioBtn = document.querySelector(`input[type=radio][data-theme=${localStorage.getItem('theme') || initialColorScheme()}]`);
    initialCheckedThemeRadioBtn.checked = true;
    const initialCheckedThemeName = initialCheckedThemeRadioBtn.getAttribute('data-theme');
    switchMetaThemeColor(initialCheckedThemeName)


    themesRadioBtns.forEach(themeRadioBtn => {
        themeRadioBtn.addEventListener('change', () => {
            localStorage.setItem('theme', themeRadioBtn.dataset.theme);

            let checkedThemeName = themeRadioBtn.dataset.theme;
            switchMetaThemeColor(checkedThemeName);
        });
    });

}

themeSwitch();