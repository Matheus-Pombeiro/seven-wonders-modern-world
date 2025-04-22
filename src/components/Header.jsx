import { useState, useEffect } from "react";

import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
    const [isDark, setIsDark] = useState(false); // The app's theme is light by default 

    // When assembling the component, check if there is a theme saved in localStorage
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        }
    }, []);

    
    const handleThemeChange = (darkTheme) => {
        setIsDark(darkTheme);   // Updating the Header theme state

        // Updating the class in the HTML and saving the user preferences in the localStorage
        if (darkTheme) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <header
            className="w-full h-16 px-3 bg-white dark:bg-neutral-700 flex flex-row justify-between items-center 
            border-b border-orange-100 dark:border-neutral-900 shadow-sm"
        >
            {/* Logo */}
            <figure
                className="flex flew-row justify-between items-center gap-1"
            >
                <img 
                    className="size-16 xl:size-14"
                    src="../src/assets/icons/compass-logo.png" 
                    alt="Logo" 
                />
                <figcaption
                    className="text-xl font-medium tracking-wider dark:text-white"
                >
                    7WMW
                </figcaption>
            </figure>

            {/* Buttons */}
            <div
                className="flex flew-row justify-between items-center gap-2"
            >
                {/* Flags */}
                <LanguageSwitcher 
                    isDarkMode={isDark} 
                />             

                {/* Theme */}
                <ThemeSwitcher 
                    onThemeChange={handleThemeChange}
                    initialTheme={isDark}
                />
            </div>
        </header>
    )

}

export default Header;