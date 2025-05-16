import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import wondersData from '../assets/data/wonders.json';
import LinkBtn from "./LinkBtn";

const WonderDetails = () => {
    const { name } = useParams();   // Getting the 'name' parameter from the URL

    const { t } = useTranslation(); // Defining the hook used for translate the content

    // Finding the wonder data based on the name from the URL
    const wonder = wondersData.find(
        (w) => w.name.replace(/ /g, '') === name
    );

    // Defining regexes commonly used in the wonder page
    const nameRegex = wonder.name.replace(/ /g, '');
    const factsRegex = `wonders.${nameRegex}.interestingFacts`;

    // Defining 'Not Found' page
    if (!wonder) {
        return (
            <main
                className="py-12 lg:py-20 xl:py-24 bg-gray-100 dark:bg-neutral-800"
            >
                <div
                    className="container mx-auto px-8"
                >
                    <h2
                        className="text-2xl font-semibold dark:text-white text-center"
                    >
                        {t("wonderDetails.notFound")}
                    </h2>
                    <p
                        className="text-gray-700 dark:text-gray-300 text-center- mt-4"
                    >
                        {t("wonderDetails.notFoundDescription")}
                    </p>
                </div>
            </main>
        );
    }

    return (
        <main
            className="py-12 lg:py-20 xl:py-24 bg-gray-100 dark:bg-neutral-800"
        >

            {/* Wonder Section */}
            <section
                className="w-11/12 md:w-10/12 lg:w-4/6 mx-auto mt-10 py-8 px-4 bg-white dark:bg-neutral-600 border border-blue-50 dark:border-neutral-900 shadow rounded-md dark:text-white"
            >
                {/* Wonder Name */}
                <h2
                    className="text-2xl font-semibold mb-4"
                >
                    {t(`wonders.${nameRegex}.name`)}
                </h2>

                {/* Wonder Image */}
                <figure
                    className="mb-6"
                >
                    <img 
                        src={wonder.imageUrl}
                        alt={t(`wonders.${nameRegex}.name`)}
                        className="w-full shadow-md rounded-md"
                    />
                </figure>

                {/* Wonder Description */}
                <p
                    className="mb-4 indent-5 text-justify"
                >
                    {t(`wonders.${nameRegex}.description`)}
                </p>

                {/* Wonder Details */}
                <div
                    className="mt-6 space-y-2"
                >
                    <h3
                        className="text-lg font-semibold"
                    >
                        {t("wonderDetails.details")}
                    </h3>
                    <p>
                        {t("wonderDetails.location")}:{" "}
                        {t(`wonders.${nameRegex}.location`)}
                    </p>
                    <p>
                        {t("wonderDetails.annualVisitors")}:{" "}
                        {t(`wonders.${nameRegex}.annualVisitorsAverage`)}
                    </p>
                    <p>
                        {t("wonderDetails.inauguration")}:{" "}
                        {t(`wonders.${nameRegex}.inaugurationDate`)}
                    </p>
                    <p>
                        {t("wonderDetails.history")}:{" "}
                        {t(`wonders.${nameRegex}.history`)}
                    </p>
                    <p>
                        {t("wonderDetails.architecturalStyle")}:{" "}
                        {t(`wonders.${nameRegex}.architecturalStyle`)}
                    </p>
                    <p>
                        {t("wonderDetails.timePeriod")}:{" "}
                        {t(`wonders.${nameRegex}.timePeriod`)}
                    </p>
                    <p>
                        {t("wonderDetails.creator")}:{" "}
                        {t(`wonders.${nameRegex}.creator`)}
                    </p>
                    <p>
                        {t("wonderDetails.materialsUsed")}:{" "}
                        {t(`wonders.${nameRegex}.materialsUsed`)}
                    </p>
                    <p>
                        {t("wonderDetails.dimensions")}:{" "}
                        {t(`wonders.${nameRegex}.dimensions`)}
                    </p>

                    {/* Wonder Interesting Facts */}
                    {t(factsRegex)
                        && Array.isArray(t(factsRegex))
                        && t(factsRegex).length > 0 
                        && (
                            <div
                                className="mt-6 space-y-2"
                            >
                                <h3
                                    className="text-lg font-semibold"
                                >
                                    {t("wonderDetails.interestingFacts")}
                                </h3>
                                <ol
                                    className="list-decimal list-inside space-y-2"
                                >
                                    {t(factsRegex).map((fact, index) => (
                                        <li
                                            key={index}
                                        >
                                            {fact}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        )
                    }
                </div>

                {/* Link to return to the home page */}
                <LinkBtn
                    path={"/"}
                    customStyle={"mt-6"}
                    text={t("wonderDetails.return")}
                />
            </section>
        </main>
    );    
};

export default WonderDetails;