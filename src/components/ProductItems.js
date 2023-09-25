export const ProductItems = () => {
    return(
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                
                <div className="md:grid grid-cols-2 gap-6">
                    <div className="">
                        <div>
                            <img
                                src={imgSrc}
                                alt={imgAlt}
                            />
                        </div>
                    </div>
                    <div className="py-32">
                        <div>
                            <h3 className="text-5xl font-thin py-8">{title}</h3>
                        </div>
                        <div>
                            <p>{description}</p>
                        </div>
                        <div>
                            <h3 className="text-3xl py-12 font-semibold">${price} USD {date_added}</h3>
                        </div>
                        <div>
                            <button 
                                onClick={async() => await addToCart(userId, id)}
                                className="bg-slate-950 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-none"
                            >
                                Add to Cart
                            </button>
                            {/* <form>
                                <div className="flex ">
                                    <input 
                                        type="number" 
                                        className="block w-1/3 mr-4 rounded-none border-0 py-1.5 px-4 text-slate-950 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                                    />
                                    
                                    <button 
                                        onClick={handleSubmit}
                                        className="bg-slate-950 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-none"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </form> */}
                        </div>
                        <div>
                            <h3>Category: {category}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}