import Link from 'next/link'
import { Crown, Gift, Calendar, ArrowLeft } from 'lucide-react'

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-lg">
        <Link href="/program" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Kembali
        </Link>

        {/* Member Card */}
        <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl p-6 text-white mb-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <Crown className="w-10 h-10" />
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">GOLD MEMBER</span>
          </div>
          <p className="text-2xl font-bold mb-1">Sarah Johnson</p>
          <p className="text-sm opacity-90">Member since Jan 2023</p>
          <div className="mt-6 pt-4 border-t border-white/30">
            <p className="text-sm opacity-90">Total Points</p>
            <p className="text-4xl font-bold">1,850</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <Gift className="w-6 h-6 text-pink-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-gray-500">Rewards Claimed</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <Calendar className="w-6 h-6 text-pink-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">24</p>
            <p className="text-sm text-gray-500">Total Visits</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="font-semibold mb-4">Aktivitas Terakhir</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium">Hair Coloring</p>
                <p className="text-sm text-gray-500">15 Jan 2024</p>
              </div>
              <span className="text-green-600 font-medium">+50 pts</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium">Redeem: Free Treatment</p>
                <p className="text-sm text-gray-500">10 Jan 2024</p>
              </div>
              <span className="text-red-600 font-medium">-200 pts</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium">Hair Spa</p>
                <p className="text-sm text-gray-500">5 Jan 2024</p>
              </div>
              <span className="text-green-600 font-medium">+40 pts</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
