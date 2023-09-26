import { Link } from "react-router-dom"

export const Footer = () => {
    return(
        <footer className="bg-slate-950 px-8 py-32 text-slate-50">
            <div className="md:grid grid-cols-4 gap-2" >
                <div>
                    <h4 className="text-2xl pb-4 font-bold">STORE</h4>
                    <p>
                        Boutique is  believe in providing a personalized shopping experience and exceptional customer service, just like you would expect from a physical boutique.
                    </p>
                </div>
                <div>
                    <h4 className="text-2xl pb-4 font-bold">REACH US</h4>
                    <h5>Phone: (123)-456-7890</h5>
                    <h5>Email: boutique@boutique.com</h5>
                </div>
                <div>
                    <h4 className="text-2xl pb-4 font-bold">PAGES</h4>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-2xl pb-4 font-bold">Subscribe</h4>
                    <p>Subscribe to our mailing list to get the latest updates.</p>
                    <form>
                        <input type="email"/>
                        <button
                        type="submit">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="mx-auto py-16 text-center" >
                <h2 className="text-3xl font-semibold ">BOUTIQUE</h2>
                <p>© All rights reserved by BOUTIQUE</p>
            </div>

        </footer>
        
    )
}