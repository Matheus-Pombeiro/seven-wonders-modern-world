import ImageButton from "./ImageButton"

const Header = () => {

    return (
        <header
            className="w-full h-16 px-3 bg-white flex flex-row justify-between items-center 
            border-b border-b-orange-50 shadow-sm"
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
                    className="text-xl font-medium tracking-wider"
                >
                    7WMW
                </figcaption>
            </figure>

            {/* Buttons */}
            <div
                className="flex flew-row justify-between items-center gap-2"
            >
                {/* Flags */}
                <ImageButton 
                    src="./src/assets/icons/brazil-flag.png" 
                    alt="Brazil flag" 
                />
                <ImageButton 
                    src="./src/assets/icons/usa-flag.png" 
                    alt="USA flag" 
                />

                {/* Theme */}
                <ImageButton 
                    src="./src/assets/icons/sun.png" 
                    alt="Theme" 
                />
            </div>
        </header>
    )

}

export default Header;