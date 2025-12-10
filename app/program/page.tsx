import Link from 'next/link'
import { Gift, Crown, Star, Gem } from 'lucide-react'

const tiers = [
  { name: 'Bronze', icon: Star, color: 'from-amber-600 to-amber-700', points: '0 - 499', benefits: ['Diskon 5%', 'Birthday Treat'] },
  { name: 'Silver', icon: Gem, color: 'from-gray-400 to-gray-500', points: '500 - 1,499', benefits: ['Diskon 10%', 'Priority Booking', 'Free Treatment/bulan'] },
  { name: 'Gold', icon: Crown, color: 'from-yellow-500 to-amber-500', points: '1,500+', benefits: ['Diskon 15%', 'VIP Lounge', 'Free Products', 'Exclusive Events'] },
]

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            THE <span className="text-pink-500">SHINE</span> Loyalty
          </h1>
          <p className="text-gray-500 mt-2 max-w-md mx-auto">
            Program membership eksklusif dengan berbagai keuntungan menarik
          </p>
        </div>

        {/* Tier Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {tiers.map((tier) => (
            <div key={tier.name} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`bg-gradient-to-r ${tier.color} p-6 text-white text-center`}>
                <tier.icon className="w-12 h-12 mx-auto mb-2" />
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <p className="text-sm opacity-90">{tier.points} Points</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <Gift className="w-4 h-4 text-pink-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">Sudah jadi member?</h3>
            <div className="space-y-3">
              <Link
                href="/program/profile"
                className="block w-full py-3 bg-pink-500 text-white rounded-xl font-medium hover:bg-pink-600"
              >
                Cek Poin Saya
              </Link>
              <Link
                href="/program/redeem"
                className="block w-full py-3 border-2 border-pink-500 text-pink-500 rounded-xl font-medium hover:bg-pink-50"
              >
                Redeem Rewards
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
