
const Categories = () => {
    return(
        <>
            <div className="h-20 bg-[#55679C] border border-slate-950 mt-4 rounded-md mx-3 flex flex-wrap justify-center md:justify-around flex-row items-center md:h-full">
                <div className="ms-3">
                    <button className="hover:bg-slate-400 hover:shadow-md rounded-md px-2">
                        <img src="https://www.svgrepo.com/show/139292/horror-pumpkim-face.svg" alt="" className="hidden md:flex md:w-16 md:h-16"/>
                        <h3 className="">Horror</h3>
                    </button>
                </div>
                <div className="ms-3">
                    <button className="hover:bg-slate-400 hover:shadow-md rounded-md px-2">
                        <img src="https://www.svgrepo.com/show/174732/caodaism.svg" alt="" className="hidden md:flex md:w-14 md:h-16"/>
                        <h3 className="">Mystery</h3>
                    </button>
                </div>
                <div className="ms-3">
                    <button className="hover:bg-slate-400 hover:shadow-md rounded-md px-2">
                        <img src="https://www.svgrepo.com/show/308993/heart-love-romance.svg    " alt="" className="hidden md:flex md:w-16 md:h-16"/>
                        <h3 className="">Romance</h3>
                    </button>
                </div>
                <div className="ms-3">
                    <button className="hover:bg-slate-400 hover:shadow-md rounded-md px-2">
                        <img src="https://www.svgrepo.com/show/513222/map.svg" alt="" className="hidden md:flex md:w-14 md:h-16 md:mx-auto"/>
                        <h3 className="">Adventure</h3>
                    </button>
                </div>
                <div className="ms-3">
                    <button className="hover:bg-slate-400 hover:shadow-md rounded-md px-2">
                        <img src="https://www.svgrepo.com/show/148511/alien.svg" alt="" className="hidden md:flex md:w-12 md:h-16"/>
                        <h3 className="">Sci-fi</h3>
                    </button>
                </div>
                <div className="ms-3">
                    <button className="hover:bg-slate-400 hover:shadow-md rounded-md px-2">
                        <img src="https://www.svgrepo.com/show/483829/clown-face.svg" alt="" className="hidden md:flex md:w-16 md:h-16"/>
                        <h3 className="">Comedy</h3>
                    </button>
                </div>
                <div className="ms-3">
                    <button className="hover:bg-slate-400 hover:shadow-md rounded-md px-2">
                        <img src="https://www.svgrepo.com/show/346129/mickey-fill.svg" alt="" className="hidden md:flex md:w-16 md:h-16 md:mx-auto"/>
                        <h3 className="">Animation</h3>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Categories;