import Link from 'next/link'
import { Gift, ArrowLeft } from 'lucide-react'

const rewards = [
  { id: 1, name: 'Free Blow Dry', points: 100, image: '💇‍♀️' },
  { id: 2, name: 'Hair Treatment', points: 200, image: '✨' },
  { id: 3, name: 'Free Haircut', points: 300, image: '✂️' },
  { id: 4, name: 'Hair Spa Session', points: 400, image: '🧖‍♀️' },
  { id: 5, name: 'Premium Product Set', points: 500, image: '🎁' },
  { id: 6, name: 'VIP Treatment Package', points: 1000, image: '👑' },
]

export default function RedeemPage() {
  const userPoints = 1850

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Link href="/program" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Kembali
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Redeem Rewards</h1>
          <p className="text-gray-500 mt-2">Tukar poin Anda dengan hadiah menarik</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full">
            <Gift className="w-5 h-5" />
            <span className="font-semibold">{userPoints.toLocaleString()} Points Available</span>
          </div>
        </div>

        <div className="grid gap-4">
          {rewards.map((reward) => (
            <div key={reward.id} className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{reward.image}</div>
                <div>
                  <p className="font-semibold text-gray-900">{reward.name}</p>
                  <p className="text-sm text-gray-500">{reward.points} points</p>
                </div>
              </div>
              <button
                disabled={userPoints < reward.points}
                className={`px-6 py-2 rounded-xl font-medium ${
                  userPoints >= reward.points
                    ? 'bg-pink-500 text-white hover:bg-pink-600'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                Redeem
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
