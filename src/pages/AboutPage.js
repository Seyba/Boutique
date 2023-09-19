import { Link, useNavigate } from "react-router-dom"
export const AboutPage = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/shop')
    }
    return(
        <div className="">
            <section className="flex justify-center py-28 bg-red-50">
                <div>
                    <h2 className="text-5xl font-thin">About Us</h2>
                </div>
            </section>
            <section className="bg-white-100 py-32 md:px-64 px-4">
                <p className="md:text-4xl text-2xl md:leading-relaxed text-center font-thin">
                    At our boutique, we believe that fashion is a powerful form of self-expression. We strive to empower individuals to embrace their unique style and celebrate their inner beauty.
                </p>
            </section>
            <section className="bg-teal-50 flex justify-around py-28 bg-red-50 ">
                <div className="flex">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <h4 className="text-lg font-semibold">Free Shipping</h4>
                        <h5>Free Delivery</h5>
                    </div>

                    
                </div>
                <div className="flex">
                    <div>
                        <svg className="h-12 w-12" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M54.89,26.73A23.52,23.52,0,0,1,15.6,49" stroke-linecap="round"></path><path d="M9,37.17a23.75,23.75,0,0,1-.53-5A23.51,23.51,0,0,1,48.3,15.2" stroke-linecap="round"></path><polyline points="37.73 16.24 48.62 15.44 47.77 5.24" stroke-linecap="round"></polyline><polyline points="25.91 47.76 15.03 48.56 15.88 58.76" stroke-linecap="round"></polyline></g></svg>
                    </div>
                    <div className="ml-4">
                        <h4 className="text-lg font-semibold">Easy Returns</h4>
                        <h5>Quick Returns</h5>
                    </div>
                </div>
                <div className="flex">
                    
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" 

                            />
                        </svg>

                    </div>
                    <div className="ml-4">
                        <h4 className="text-lg font-semibold">Fast Delivery</h4>
                        <h5>Quick Delivery</h5>
                        
                    </div>
                </div>
                <div className="flex">
                    
                    <div>
                        <svg fill="#000000" className="h-12 w-12" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.6,21.3c-.3.226-.619.464-.89.7H16a1,1,0,0,1,0,2H12a1,1,0,0,1-1-1c0-1.5,1.275-2.456,2.4-3.3.75-.562,1.6-1.2,1.6-1.7a1,1,0,0,0-2,0,1,1,0,0,1-2,0,3,3,0,0,1,6,0C17,19.5,15.725,20.456,14.6,21.3ZM23,15a1,1,0,0,0-1,1v3H21a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v2a3,3,0,0,0,3,3h1v2a1,1,0,0,0,2,0V16A1,1,0,0,0,23,15ZM13,12V7a1,1,0,0,0-2,0v4H8a1,1,0,0,0,0,2h4A1,1,0,0,0,13,12ZM23,2a1,1,0,0,0-1,1V5.374A12,12,0,1,0,7.636,23.182,1.015,1.015,0,0,0,8,23.25a1,1,0,0,0,.364-1.932A10,10,0,1,1,20.636,7H18a1,1,0,0,0,0,2h3a3,3,0,0,0,3-3V3A1,1,0,0,0,23,2Z"></path></g></svg>
                    </div>
                    <div className="ml-4">
                        <h4 className="text-lg font-semibold">24 Hour Service</h4>
                        <h5>24/7 Support</h5>
                    </div>
                </div>
            </section>
        </div>
    )

}