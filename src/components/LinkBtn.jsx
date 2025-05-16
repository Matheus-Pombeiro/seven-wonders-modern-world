import { Link } from "react-router-dom";

const LinkBtn = ({ path, customStyle, text }) => {
    return (
        // Custom link
        <Link
            to={path}
            className={`px-4 py-2 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus-shadow-outline ${customStyle}`}
        >
            {text}
        </Link>
    )
};

export default LinkBtn;