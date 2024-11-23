const Card = () => {
    return(
        <>
                <button className="border border-slate-950 rounded-md flex flex-col bg-gray-400 mx-auto mt-10">
                    <img src="https://images.unsplash.com/photo-1508970057347-0524a45ebdff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-44 h-40 rounded-t-md border-b border-slate-950"/>
                    <h3 className="mx-auto my-1">Title</h3>
                    <h3 className="mx-auto my-1">Author</h3>
                </button>
        </>
    )
}

export default Card;