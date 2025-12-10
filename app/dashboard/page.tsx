import Link from 'next/link'
import { Calendar, Users, DollarSign, TrendingUp, Clock, CheckCircle } from 'lucide-react'

const stats = [
  { label: 'Booking Hari Ini', value: '12', icon: Calendar, color: 'bg-purple-100 text-purple-600' },
  { label: 'Total Customer', value: '1,234', icon: Users, color: 'bg-blue-100 text-blue-600' },
  { label: 'Pendapatan Bulan Ini', value: 'Rp 45.6M', icon: DollarSign, color: 'bg-green-100 text-green-600' },
  { label: 'Growth', value: '+12%', icon: TrendingUp, color: 'bg-amber-100 text-amber-600' },
]

const recentBookings = [
  { id: 'TSS-001', customer: 'Sarah', service: 'Hair Coloring', time: '09:00', status: 'confirmed' },
  { id: 'TSS-002', customer: 'Rina', service: 'Haircut', time: '10:00', status: 'in-progress' },
  { id: 'TSS-003', customer: 'Maya', service: 'Treatment', time: '11:00', status: 'pending' },
  { id: 'TSS-004', customer: 'Dina', service: 'Hair Spa', time: '13:00', status: 'confirmed' },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-6">
        <h1 className="text-xl font-bold mb-8">
          THE <span className="text-purple-600">SHINE</span>
        </h1>
        <nav className="space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-purple-50 text-purple-600 rounded-xl font-medium">
            <Calendar className="w-5 h-5" />
            Dashboard
          </Link>
          <Link href="/dashboard/bookings" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl">
            <Clock className="w-5 h-5" />
            Bookings
          </Link>
          <Link href="/dashboard/stylists" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl">
            <Users className="w-5 h-5" />
            Stylists
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl">
            <CheckCircle className="w-5 h-5" />
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
          <p className="text-gray-500">Selamat datang kembali, Admin!</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Booking Terbaru</h3>
            <Link href="/dashboard/bookings" className="text-purple-600 text-sm hover:underline">
              Lihat Semua
            </Link>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b">
                <th className="pb-3">ID</th>
                <th className="pb-3">Customer</th>
                <th className="pb-3">Layanan</th>
                <th className="pb-3">Waktu</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking) => (
                <tr key={booking.id} className="border-b last:border-0">
                  <td className="py-4 font-medium">{booking.id}</td>
                  <td className="py-4">{booking.customer}</td>
                  <td className="py-4">{booking.service}</td>
                  <td className="py-4">{booking.time}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      booking.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                      booking.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
