import { Link } from "react-router-dom";

import { useTranslation } from 'react-i18next';

import wondersData from '../assets/data/wonders.json'; // Import your wonders data
import LinkBtn from "./LinkBtn";


const HomePage = () => {
    const { t } = useTranslation(); // Defining the hook used for translate the content

    return (
        <main
            className="py-12 lg:py-20 xl:py-24 bg-gray-100 dark:bg-neutral-800"
        >

            {/* Home Page section */}
            <section
                className="px-8 md:px-16 lg:px-24 xl:px-32 py-8"
            >
                {/* Home Page title and introduction */}
                <h1
                    className="mb-6 text-3xl font-semibold tracking-wide text-center dark:text-white"
                >
                    {t("homePage.title")}
                </h1>
                <p
                    className="mb-8 text-lg text-gray-700 dark:text-gray-300 text-justify"
                >
                    {t("homePage.introduction")}
                </p>

                {/* Home Page explore with cards with links for each wonder */}
                <h2
                    className="mb-4 text-2xl font-semibold tracking-wide text-center dark:text-white"
                >
                    {t("homePage.explore")}
                </h2>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {wondersData.map((wonder) => (
                        <div
                            key={wonder.id}
                            className="bg-white dark:bg-neutral-700 rounded-md shadow-md overflow-hidden"
                        >
                            <img 
                                src={wonder.imageUrl} 
                                alt={t(`wonders.${wonder.name.replace(/ /g, '')}.name`)}
                                className="w-full h-48 object-cover"
                            />
                            <div
                                className="p-4 text-center"
                            >
                                <h3
                                    className="mb-2 text-xl font-semibold dark:text-white"
                                >
                                    {t(`wonders.${wonder.name.replace(/ /g, '')}.name`)}
                                </h3>
                                <p
                                    className="mb-3 text-gray-600 dark:text-gray-400"
                                >
                                    {t(`wonders.${wonder.name.replace(/ /g, '')}.location`)}
                                </p>
                                <LinkBtn
                                    path={`/wonder/${wonder.name.replace(/ /g, '')}`}
                                    text={t("homePage.learnMore")}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
};

export default HomePage;