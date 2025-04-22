const Footer = () => {

    // Getting the current year
    const currentData = new Date;
    const year = currentData.getFullYear();
    
    return (
        <footer
            className="w-full h-14 flex justify-center items-center bg-white dark:bg-neutral-700 
            border-t border-orange-100 dark:border-neutral-900 dark:text-white"
        >
            <p
                className="w-fit text-xl"
            >
                <a className="font-medium hover:underline"
                href="https://www.linkedin.com/in/matheus-pombeiro/"
                target="_blank" rel="noopener noreferrer">
                Matheus Pombeiro</a> | {year}
            </p>
        </footer>
    )

}

export default Footer;