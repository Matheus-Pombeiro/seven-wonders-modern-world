const WonderSection = ({ name, location, 
    imageUrl, annualVisitorsAverage, 
    inaugurationDate, description }) => {

    return (
        <section
            className="xl:w-4/6 mx-auto mt-10 py-8 px-7 bg-white border border-blue-50 shadow
            rounded-md"
        >
            {/* Wonder name */}
            <h2
                className="w-5/6 mx-auto text-xl font-medium"
            >
                {name}
            </h2>

            {/* Wonder image */}
            <figure
                className="w-7/12 mx-auto mt-6"
            >
                <img 
                    src={imageUrl} 
                    alt={name} 
                    className="rounded-md shadow"    
                />
            </figure>

            {/* Wonder description */}
            <p
                className="w-5/6 mx-auto mt-6 indent-5 text-justify"
            >
                {description}
            </p>

            {/* Wonder curiosities */}
            <div
                className="w-5/6 mx-auto mt-6"
            >
                <h3
                    className="text-lg font-medium space-y-6"
                >
                    Curiosities
                </h3>
                <p>Location: {location}</p>
                <p>Annual Visitors Average: {annualVisitorsAverage}</p>
                <p>Inauguration Date: {inaugurationDate}</p>
            </div>
        </section>
    )

}

export default WonderSection;