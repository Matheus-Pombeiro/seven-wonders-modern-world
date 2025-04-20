const ImageButton = ({ src, alt }) => {

    return (
        <button>
            <img 
                className="size-12 xl:size-10"
                src={src} 
                alt={alt}
            />
        </button>
    )

}

export default ImageButton;