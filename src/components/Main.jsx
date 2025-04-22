import wonders from "../assets/data/wonders.json";
import WonderSection from "./WonderSection";
import { useTranslation } from "react-i18next";

const Main = () => {
    const { t } = useTranslation();

    return (
        <main
            className="w-full py-12 lg:py-20 xl:py-24 bg-gray-100"
        >
            {/* Main title */}
            <h1
                className="px-14 text-2xl text-center font-semibold tracking-wide"
            >
                {t("main.title.partOne")} <strong
                    className="text-blue-500"
                >
                    {t("main.title.partTwo")}
                </strong> {t("main.title.partThree")}
            </h1>

            {wonders.map((wonder, index) => (
                <div 
                    key={index}
                    className="w-full"
                >
                     <WonderSection
                        name={t(`wonders.${wonder.name.replace(/ /g, '')}.name`)}
                        location={t(`wonders.${wonder.name.replace(/ /g, '')}.location`)}
                        imageUrl={wonder.imageUrl}
                        annualVisitorsAverage={t(`wonders.${wonder.name.replace(/ /g, '')}.annualVisitorsAverage`)}
                        inaugurationDate={t(`wonders.${wonder.name.replace(/ /g, '')}.inaugurationDate`)}
                        description={t(`wonders.${wonder.name.replace(/ /g, '')}.description`)}
                    />
                    
                    {wonder.id < wonders.length
                    ? <hr
                        className="w-10/12 md:w-9/12 xl:w-7/12 mt-10 mx-auto border border-blue-100"
                    /> 
                    : null}
                </div>
            ))}
        </main>
    )

}

export default Main;