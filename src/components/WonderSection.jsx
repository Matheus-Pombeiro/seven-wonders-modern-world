import { useTranslation } from "react-i18next";

const WonderSection = ({ name, location, 
    imageUrl, annualVisitorsAverage, 
    inaugurationDate, description }) => {

    const { t } = useTranslation();

    return (
        <section
            className="w-11/12 md:w-10/12 xl:w-4/6 mx-auto mt-10 py-4 xl:py-8 px-2 xl:px-7 bg-white 
            dark:bg-neutral-600 border border-blue-50 dark:border-neutral-900 shadow rounded-md
            dark:text-white"
        >
            {/* Wonder name */}
            <h2
                className="w-11/12 xl:w-5/6 mx-auto text-xl font-medium transition-colors duration-500 ease-in-out
                decoration-transparent hover:underline hover:decoration-blue-500 hover:decoration-2"
            >
                {name}
            </h2>

            {/* Wonder image */}
            <figure
                className="w-11/12 md:w-8/12 xl:w-7/12 mx-auto mt-6"
            >
                <img 
                    src={imageUrl} 
                    alt={name} 
                    className="rounded-md shadow"    
                />
            </figure>

            {/* Wonder description */}
            <p
                className="w-11/12 xl:w-5/6 mx-auto mt-6 indent-5 text-justify"
            >
                {description}
            </p>

            {/* Wonder curiosities */}
            <div
                className="w-11/12 xl:w-5/6 mx-auto mt-6 space-y-1"
            >
                <h3
                    className="text-lg font-medium"
                >
                    {t("wondersSection.curiosities")}
                </h3>
                <p>{t("wondersSection.location")} {location}</p>
                <p>{t("wondersSection.annualVisitorsAverage")} {annualVisitorsAverage}</p>
                <p>{t("wondersSection.inaugurationDate")} {inaugurationDate}</p>
            </div>
        </section>
    )

}

export default WonderSection;