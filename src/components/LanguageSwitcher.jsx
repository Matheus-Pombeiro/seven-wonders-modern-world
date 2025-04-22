import { useTranslation } from "react-i18next";

import { LiaFlagUsaSolid } from "react-icons/lia";
import { GiBrazilFlag } from "react-icons/gi";

const LanguageSwitcher = ({ btnSet }) => {
    const { i18n } = useTranslation(); // Translation reference

    // Declaring an array to keep some of the language data
    const languageOptions = [
        {
            value: "en",
            flag: <LiaFlagUsaSolid {...btnSet} />
        },
        {
            value: "pt",
            flag: <GiBrazilFlag {...btnSet} />
        }
    ]

    return (
        <>
            {languageOptions.map((language, index) => (
                <button
                    key={index}
                    className="cursor-pointer"
                    onClick={() => {
                        i18n.changeLanguage(language.value)
                    }}
                >
                    {language.flag}
                </button>
            ))}
        </>
    )

}

export default LanguageSwitcher;