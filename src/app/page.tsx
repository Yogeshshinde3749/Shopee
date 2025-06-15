// shopee/src/app/page.tsx

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="hero-section mb-12">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Shopee Clone</h1>
          <p className="text-xl mb-6">Discover amazing products at unbeatable prices</p>
          <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </section>

      <section className="categories mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-semibold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-products">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-orange-500 font-bold text-lg">${product.price}</p>
                <p className="text-gray-500 text-sm">⭐ {product.rating} ({product.reviews} reviews)</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

const categories = [
  { name: 'Electronics', icon: '📱' },
  { name: 'Fashion', icon: '👗' },
  { name: 'Home', icon: '🏠' },
  { name: 'Beauty', icon: '💄' },
  { name: 'Sports', icon: '⚽' },
  { name: 'Books', icon: '📚' },
]

const featuredProducts = [
  { name: 'Smartphone', price: 299, rating: 4.5, reviews: 128 },
  { name: 'Laptop', price: 899, rating: 4.7, reviews: 89 },
  { name: 'Headphones', price: 79, rating: 4.3, reviews: 245 },
  { name: 'Watch', price: 199, rating: 4.6, reviews: 167 },
]