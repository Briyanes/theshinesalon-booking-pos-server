import Link from 'next/link'
import { Calendar, LayoutDashboard, Star, Gift } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            THE <span className="text-purple-600">SHINE</span> Salon
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium Hair & Beauty Experience. Booking system, review platform, dan loyalty program dalam satu tempat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Booking */}
          <Link href="/booking" className="group">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                <Calendar className="w-7 h-7 text-purple-600 group-hover:text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Booking</h2>
              <p className="text-gray-500">
                Reservasi layanan salon dengan mudah dan cepat
              </p>
              <div className="mt-4 text-sm font-medium text-purple-600">
                booking.theshine.salon →
              </div>
            </div>
          </Link>

          {/* Dashboard */}
          <Link href="/dashboard" className="group">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <LayoutDashboard className="w-7 h-7 text-blue-600 group-hover:text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Dashboard</h2>
              <p className="text-gray-500">
                Kelola booking, stylist, dan operasional salon
              </p>
              <div className="mt-4 text-sm font-medium text-blue-600">
                dashboard.theshine.salon →
              </div>
            </div>
          </Link>

          {/* Review */}
          <Link href="/review" className="group">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors">
                <Star className="w-7 h-7 text-amber-500 group-hover:text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Review</h2>
              <p className="text-gray-500">
                Lihat dan berikan ulasan pengalaman di salon
              </p>
              <div className="mt-4 text-sm font-medium text-amber-600">
                review.theshine.salon →
              </div>
            </div>
          </Link>

          {/* Loyalty Program */}
          <Link href="/program" className="group">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-500 transition-colors">
                <Gift className="w-7 h-7 text-pink-500 group-hover:text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Loyalty</h2>
              <p className="text-gray-500">
                Program member dengan rewards eksklusif
              </p>
              <div className="mt-4 text-sm font-medium text-pink-600">
                program.theshine.salon →
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Server Running • Next.js 16 • Supabase Connected
          </div>
        </div>
      </div>
    </main>
  )
}
