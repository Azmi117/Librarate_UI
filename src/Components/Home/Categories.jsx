
const Categories = ({onSelectedGenre}) => {

    const handleGenreClick = (genre) => {
        onSelectedGenre(genre);
    };

    return(
        <>
            <div className="h-20 bg-[#55679C] shadow-md mt-4 rounded-md mx-3 flex flex-wrap justify-center md:justify-around flex-row items-center md:h-full">
                <div className="ms-3">
                    <button 
                        className="hover:bg-slate-400 hover:shadow-md hover:text-gray-300 rounded-md px-2"
                        onClick={() => handleGenreClick('Horror')}
                    >
                        <img src="https://www.svgrepo.com/show/139292/horror-pumpkim-face.svg" alt="" className="hidden md:flex md:w-16 md:h-16"/>
                        <h3 className="marcellus-regular">Horror</h3>
                    </button>
                </div>
                <div className="ms-3">
                    <button 
                        className="hover:bg-slate-400 hover:shadow-md hover:text-gray-300 rounded-md px-2"
                        onClick={() => handleGenreClick('Mystery')}
                    >
                        <img src="https://www.svgrepo.com/show/174732/caodaism.svg" alt="" className="hidden md:flex md:w-14 md:h-16"/>
                        <h3 className="marcellus-regular">Mystery</h3>
                    </button>
                </div>
                <div className="ms-3">
                    <button 
                        className="hover:bg-slate-400 hover:shadow-md hover:text-gray-300 rounded-md px-2"
                        onClick={() => handleGenreClick('Romance')}
                    >
                        <img src="https://www.svgrepo.com/show/308993/heart-love-romance.svg    " alt="" className="hidden md:flex md:w-16 md:h-16"/>
                        <h3 className="marcellus-regular">Romance</h3>
                    </button>
                </div>
                <div className="ms-3">
                    <button 
                        className="hover:bg-slate-400 hover:shadow-md hover:text-gray-300 rounded-md px-2"
                        onClick={() => handleGenreClick('Adventure')}
                    >
                        <img src="https://www.svgrepo.com/show/513222/map.svg" alt="" className="hidden md:flex md:w-14 md:h-16 md:mx-auto"/>
                        <h3 className="marcellus-regular">Adventure</h3>
                    </button>
                </div>
                <div className="ms-3">
                    <button 
                        className="hover:bg-slate-400 hover:shadow-md hover:text-gray-300 rounded-md px-2"
                        onClick={() => handleGenreClick('Sci-fi')}
                    >
                        <img src="https://www.svgrepo.com/show/148511/alien.svg" alt="" className="hidden md:flex md:w-12 md:h-16"/>
                        <h3 className="marcellus-regular">Sci-fi</h3>
                    </button>
                </div>
                <div className="ms-3">
                    <button 
                        className="hover:bg-slate-400 hover:shadow-md hover:text-gray-300 rounded-md px-2"
                        onClick={() => handleGenreClick('Comedy')}
                    >
                        <img src="https://www.svgrepo.com/show/483829/clown-face.svg" alt="" className="hidden md:flex md:w-16 md:h-16"/>
                        <h3 className="marcellus-regular">Comedy</h3>
                    </button>
                </div>
                <div className="ms-3">
                    <button 
                        className="hover:bg-slate-400 hover:shadow-md hover:text-gray-300 rounded-md px-2"
                        onClick={() => handleGenreClick('Animation')}
                    >
                        <img src="https://www.svgrepo.com/show/346129/mickey-fill.svg" alt="" className="hidden md:flex md:w-16 md:h-16 md:mx-auto"/>
                        <h3 className="marcellus-regular">Animation</h3>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Categories;