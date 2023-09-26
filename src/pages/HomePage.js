import { CarouselEl } from "../components/carousel/Carousel"
import { Link } from "react-router-dom"
export const HomePage = () => {
    return(
        <div>
            <section className="flex justify-center py-28 bg-red-50">
                <div>
                    <h2 className="text-5xl font-thin">Home</h2>
                </div>
            </section>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">                
                <div className="bg-white-100 py-32 md:px-64 px-4">
                    <p className="md:text-4xl text-2xl md:leading-relaxed text-center font-thin">
                    Boutique is  believe in providing a personalized shopping experience and exceptional customer service, just like you would expect from a physical boutique.
                    </p>
                </div>
                <div className="md:grid grid-cols-2">
                    <div className="bg-orange-50 py-32 text-center">
                        <h3 className="text-lg font-thin">ENHANCE YOUR GLOW!</h3>
                        <h3 className="text-5xl px-12 py-2">Unleash Your Inner Glow</h3>
                        <h3 className="text-sm font-semibold">Unlock Your Skin's Radiance</h3>
                        <div className="my-16">
                            <Link to="/shop" className=" py-2 px-8 text-slate-950 border-solid border-slate-950 border-2 hover:bg-slate-950 hover:text-slate-50">SHOP NOW</Link>
                        </div>
                    </div>
                    
                    <div>
                        <img
                            src="https://assets.website-files.com/64441dedb67dfed5ce44d142/648834f486e34d3ea72f6599_Hero-Img-p-1080.jpg"
                            alt=""
                        />
                    </div>
                </div>
                
                
            </div>   
        </div>
    )
}