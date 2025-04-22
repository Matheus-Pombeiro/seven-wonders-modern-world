import { useState, useEffect } from "react";

import { IoSunny, IoMoonSharp  } from "react-icons/io5";

const ThemeSwitcher = ({ onThemeChange, initialTheme }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false); // Helping the theme button icons switch

    // Ensuring that the internal state is updated with the initial theme
    useEffect(() => {
        setIsDarkTheme(initialTheme);
    }, [initialTheme])

    // Swtiching the app's theme
    const handleTheme = () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        onThemeChange(newTheme);
    }

    // Button settings
    const btnSet = {
        size: 30,
        
    };

    return (
        <button
            className="cursor-pointer"
            onClick={handleTheme}
        >
            {isDarkTheme ? (
                <IoMoonSharp {...btnSet} color="white" />
            ) : (
                <IoSunny {...btnSet} />
            )}
        </button>
    )

}

export default ThemeSwitcher;