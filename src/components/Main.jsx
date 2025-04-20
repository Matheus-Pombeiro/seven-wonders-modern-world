import wonders from "../assets/data/wonders.json";
import WonderSection from "./WonderSection";

const Main = () => {

    return (
        <main
            className="w-full py-12 lg:py-20 xl:py-24 bg-gray-100"
        >
            {/* Main title */}
            <h1
                className="px-14 text-2xl text-center font-semibold tracking-wide"
            >
                7 <strong
                    className="text-blue-500"
                >
                    Wonders
                </strong> of the Modern World
            </h1>

            {wonders.map((wonder, index) => (
                <div 
                    key={index}
                    className="w-full"
                >
                    <WonderSection
                        name={wonder.name}
                        location={wonder.location}
                        imageUrl={wonder.imageUrl}
                        annualVisitorsAverage={wonder.annualVisitorsAverage}
                        inaugurationDate={wonder.inaugurationDate}
                        description={wonder.description}
                    />
                    {wonder.id < 7 
                    ? <hr
                        className="w-9/12 mt-10 mx-auto border border-blue-100"
                    /> 
                    : null}
                </div>
            ))}
        </main>
    )

}

export default Main;