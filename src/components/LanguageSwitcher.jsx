import { useTranslation } from "react-i18next";

import { LiaFlagUsaSolid } from "react-icons/lia";
import { GiBrazilFlag } from "react-icons/gi";
import { useEffect } from "react";

const LanguageSwitcher = ({ isDarkMode }) => {
    const { i18n } = useTranslation(); // Translation reference

    // Checking if there is a language saved in the localStorage and updating the current language
    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        console.log("Língua armazenada:", storedLanguage);
        if (storedLanguage) {
            setTimeout(() => {
                i18n.changeLanguage(storedLanguage);
            }, 10)
        }
    }, [i18n])

    // Saving the language preference
    const handleLanguageChange = (languageCode) => {
        i18n.changeLanguage(languageCode);
        localStorage.setItem("language", languageCode);
    };

    // Setting the default icon color
    const defaultIconColor = isDarkMode ? "white" : "black";

    // Button settings
    const btnSet = {
        size: 40,
    };

    // Declaring an array to keep some of the language data
    const languageOptions = [
        {
            value: "en",
            flag: <LiaFlagUsaSolid {...btnSet} color={defaultIconColor} />
        },
        {
            value: "pt",
            flag: <GiBrazilFlag {...btnSet} color={defaultIconColor} />
        }
    ];

    return (
        <>
            {languageOptions.map((language, index) => (
                <button
                    key={index}
                    className="cursor-pointer"
                    onClick={() => handleLanguageChange(language.value)}
                >
                    {language.flag}
                </button>
            ))}
        </>
    )

}

export default LanguageSwitcher;