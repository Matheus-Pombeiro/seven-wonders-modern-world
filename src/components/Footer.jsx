const Footer = () => {

    // Getting the current year
    const currentData = new Date;
    const year = currentData.getFullYear();
    
    return (
        <footer
            className="w-full h-14 flex justify-center items-center bg-white border-t 
            border-orange-100"
        >
            <p
                className="w-fit text-xl"
            >
                {year} | <a className="font-medium hover:underline"
                href="https://www.linkedin.com/in/matheus-pombeiro/"
                target="_blank" rel="noopener noreferrer">
                Matheus Pombeiro</a>
            </p>
        </footer>
    )

}

export default Footer;