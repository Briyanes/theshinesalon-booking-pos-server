import { ShoppingBag, Star } from 'lucide-react'

const products = [
  { id: 1, name: 'Shampoo Premium', price: 150000, rating: 4.8, image: '🧴' },
  { id: 2, name: 'Hair Serum', price: 200000, rating: 4.9, image: '✨' },
  { id: 3, name: 'Hair Mask', price: 175000, rating: 4.7, image: '🎭' },
  { id: 4, name: 'Conditioner', price: 125000, rating: 4.6, image: '💧' },
  { id: 5, name: 'Hair Oil', price: 180000, rating: 4.8, image: '🫒' },
  { id: 6, name: 'Styling Gel', price: 95000, rating: 4.5, image: '💇' },
]

export default function StorePage() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            THE <span className="text-emerald-600">SHINE</span> Store
          </h1>
          <p className="text-gray-500 mt-2">Produk perawatan rambut premium</p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                <span className="text-6xl">{product.image}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-sm text-gray-600">{product.rating}</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
                <p className="text-emerald-600 font-bold text-xl mt-2">{formatCurrency(product.price)}</p>
                <button className="w-full mt-4 flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors">
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
