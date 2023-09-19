export const ShopPage = () => {
    const products = [
        {
            id: 1,
            name: 'Glow Powder',
            href: '#',
            imageSrc: 'https://assets.website-files.com/6489a11ade23496cb827ad72/648c2a48b611650ce171d334_Product-main-06.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35'
        },
        {
            id: 2,
            name: 'Blossom Scrub',
            href: '#',
            imageSrc: 'https://assets.website-files.com/6489a11ade23496cb827ad72/648c2babbbd93dbadbcf5c15_Product-main-08.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35'
        },
        {
            id: 3,
            name: 'Flawless Foundation',
            href: '#',
            imageSrc: 'https://assets.website-files.com/6489a11ade23496cb827ad72/648c07a794aaad449a56108c_Product-main-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$20'
                
        },
        {
            id: 4,
            name: 'Anti-aging Serum',
            href: '#',
            imageSrc: 'https://assets.website-files.com/6489a11ade23496cb827ad72/648c24355ec7e188660d074a_Product-main-02.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$70'
            
        },
        {
            id: 5,
            name: 'Clear Cleansing Gel',
            href: '#',
            imageSrc: 'https://assets.website-files.com/6489a11ade23496cb827ad72/648c262f5ba5eec89612ea2c_Product-main-03.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$53'
            
        },
        {
            id: 6,
            name: 'Mist Toner',
            href: '#',
            imageSrc: 'https://assets.website-files.com/6489a11ade23496cb827ad72/648c2a146ce8487e75d83b3f_Product-main-05.jpg',
            price: '$36.79'
        },
        {
            id: 7,
            name: 'Hydrating Face Mist',
            href: '#',
            imageSrc: 'https://assets.website-files.com/6489a11ade23496cb827ad72/648c2df1bbd93dbadbd294ce_product-main-19.jpg',
            price: '$42'
        },
        {
            id: 8,
            name: 'Midnight Perfume',
            href: '#',
            imageSrc: 'https://assets.website-files.com/6489a11ade23496cb827ad72/648c2da1c7e4396e9391d21a_product-main-18.jpg',
            price: '$71.53'
        },
        {
            id: 9,
            name: 'Volume Mascara',
            href: '#',
            imageSrc: 'https://assets.website-files.com/6489a11ade23496cb827ad72/648c2def64f58674cfdb7715_product-main-20.jpg',
            price: '$63'
        },
        {
            id: 10,
            name: 'Divine Orchid',
            href: '#',
            imageSrc: 'https://assets.website-files.com/6489a11ade23496cb827ad72/648c2dcc428f7f901c435305_product-main-21.jpg',
            price: '$96'
        },
        {
            id: 11,
            name: 'Brow Perfection Pencil',
            href: '#',
            imageSrc: 'https://assets.website-files.com/6489a11ade23496cb827ad72/648c2ff21cc95fe10289484e_product-main-17-p-1080.jpg',
            price: '$40.79'
        },
        {
            id: 12,
            name: 'Bliss Sleep Mask',
            href: '#',
            imageSrc: 'https://assets.website-files.com/6489a11ade23496cb827ad72/648c2d4eff7925b6249537b0_Product-main-10.jpg',
            price: '$56.79'
        }
    ]
    return (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
    
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    )
}