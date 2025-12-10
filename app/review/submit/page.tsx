'use client'

import { useState } from 'react'
import { Star, Send } from 'lucide-react'
import Link from 'next/link'

export default function SubmitReviewPage() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [comment, setComment] = useState('')

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-8 max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tulis Review</h1>
          <p className="text-gray-500 mt-2">Bagikan pengalaman Anda di THE SHINE</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          {/* Rating */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Rating</label>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1"
                >
                  <Star
                    className={`w-10 h-10 transition-colors ${
                      star <= (hoverRating || rating)
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-center text-sm text-gray-500 mt-2">
                {rating === 5 ? 'Luar biasa!' : rating === 4 ? 'Sangat bagus!' : rating === 3 ? 'Cukup baik' : rating === 2 ? 'Kurang memuaskan' : 'Sangat mengecewakan'}
              </p>
            )}
          </div>

          {/* Comment */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Ulasan</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Ceritakan pengalaman Anda..."
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Submit */}
          <button
            disabled={rating === 0 || !comment}
            className="w-full flex items-center justify-center gap-2 py-3 bg-amber-500 text-white rounded-xl font-medium hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
            Kirim Review
          </button>
        </div>

        <div className="text-center mt-6">
          <Link href="/review" className="text-amber-600 hover:underline">
            ← Kembali ke Reviews
          </Link>
        </div>
      </div>
    </main>
  )
}
