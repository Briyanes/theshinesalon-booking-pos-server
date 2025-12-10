import Link from 'next/link'
import { CheckCircle, Calendar, Home } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Berhasil!</h1>
        <p className="text-gray-500 mb-8 max-w-md">
          Terima kasih telah melakukan reservasi di THE SHINE Salon. 
          Kami akan mengirimkan konfirmasi melalui WhatsApp.
        </p>
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm mx-auto mb-6">
          <p className="text-sm text-gray-500 mb-2">Kode Booking</p>
          <p className="text-2xl font-bold text-purple-600">TSS-2024-0001</p>
        </div>
        <div className="flex gap-4 justify-center">
          <Link
            href="/booking"
            className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-xl font-medium hover:bg-gray-50"
          >
            <Calendar className="w-5 h-5" />
            Booking Lagi
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700"
          >
            <Home className="w-5 h-5" />
            Kembali
          </Link>
        </div>
      </div>
    </main>
  )
}
