import Link from 'next/link'
import { Star, PenSquare } from 'lucide-react'

const reviews = [
  { id: 1, name: 'Sarah', rating: 5, comment: 'Pelayanan sangat memuaskan! Hasilnya cantik sekali.', date: '2 hari lalu', service: 'Hair Coloring' },
  { id: 2, name: 'Maya', rating: 4, comment: 'Bagus, stylistnya ramah. Cuma agak lama nunggunya.', date: '3 hari lalu', service: 'Haircut' },
  { id: 3, name: 'Dina', rating: 5, comment: 'Love it! Pasti balik lagi kesini.', date: '1 minggu lalu', service: 'Hair Treatment' },
  { id: 4, name: 'Rina', rating: 5, comment: 'Best salon ever! Recommended banget.', date: '1 minggu lalu', service: 'Hair Spa' },
]

export default function ReviewPage() {
  const avgRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            THE <span className="text-amber-500">SHINE</span> Reviews
          </h1>
          <p className="text-gray-500 mt-2">Ulasan dari pelanggan kami</p>
        </div>

        {/* Rating Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-gray-900">{avgRating.toFixed(1)}</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-6 h-6 ${star <= avgRating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-1">{reviews.length} ulasan</p>
            </div>
            <Link
              href="/review/submit"
              className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-xl font-medium hover:bg-amber-600"
            >
              <PenSquare className="w-5 h-5" />
              Tulis Review
            </Link>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.service}</p>
                </div>
                <div className="text-right">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${star <= review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{review.date}</p>
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
