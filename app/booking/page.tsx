'use client'

import { useState } from 'react'
import { Calendar, Clock, User, Scissors, ChevronRight, ChevronLeft, Check } from 'lucide-react'

const services = [
  { id: 1, name: 'Haircut', price: 75000, duration: 30 },
  { id: 2, name: 'Hair Coloring', price: 250000, duration: 120 },
  { id: 3, name: 'Hair Treatment', price: 150000, duration: 60 },
  { id: 4, name: 'Blow Dry', price: 50000, duration: 30 },
  { id: 5, name: 'Hair Spa', price: 200000, duration: 90 },
]

const stylists = [
  { id: 1, name: 'Rina', specialty: 'Hair Coloring', avatar: '👩‍🦰' },
  { id: 2, name: 'Dian', specialty: 'Haircut', avatar: '👩‍🦱' },
  { id: 3, name: 'Mega', specialty: 'Treatment', avatar: '👩' },
]

const timeSlots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00']

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [selectedServices, setSelectedServices] = useState<number[]>([])
  const [selectedStylist, setSelectedStylist] = useState<number | null>(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')

  const totalPrice = selectedServices.reduce((acc, id) => {
    const service = services.find(s => s.id === id)
    return acc + (service?.price || 0)
  }, 0)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            THE <span className="text-purple-600">SHINE</span> Booking
          </h1>
          <p className="text-gray-500 mt-2">Reservasi layanan salon favorit Anda</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8 gap-2">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= s ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {step > s ? <Check className="w-4 h-4" /> : s}
              </div>
              {s < 4 && <div className={`w-8 h-1 ${step > s ? 'bg-purple-600' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>

        {/* Step 1: Select Services */}
        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Scissors className="w-5 h-5 text-purple-600" />
              Pilih Layanan
            </h2>
            <div className="space-y-3">
              {services.map((service) => (
                <label
                  key={service.id}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedServices.includes(service.id)
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service.id)}
                      onChange={() => {
                        setSelectedServices(prev =>
                          prev.includes(service.id)
                            ? prev.filter(id => id !== service.id)
                            : [...prev, service.id]
                        )
                      }}
                      className="w-5 h-5 text-purple-600 rounded"
                    />
                    <div>
                      <p className="font-medium">{service.name}</p>
                      <p className="text-sm text-gray-500">{service.duration} menit</p>
                    </div>
                  </div>
                  <p className="font-semibold text-purple-600">{formatCurrency(service.price)}</p>
                </label>
              ))}
            </div>
            {selectedServices.length > 0 && (
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span className="text-purple-600">{formatCurrency(totalPrice)}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Select Stylist */}
        {step === 2 && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-purple-600" />
              Pilih Stylist
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {stylists.map((stylist) => (
                <button
                  key={stylist.id}
                  onClick={() => setSelectedStylist(stylist.id)}
                  className={`p-4 rounded-xl border-2 text-center transition-all ${
                    selectedStylist === stylist.id
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="text-4xl mb-2">{stylist.avatar}</div>
                  <p className="font-medium">{stylist.name}</p>
                  <p className="text-xs text-gray-500">{stylist.specialty}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Select Date & Time */}
        {step === 3 && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-600" />
              Pilih Tanggal & Waktu
            </h2>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Clock className="w-4 h-4 inline mr-1" />
                Waktu
              </label>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-xl border-2 text-center font-medium transition-all ${
                      selectedTime === time
                        ? 'border-purple-600 bg-purple-600 text-white'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Customer Info */}
        {step === 4 && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-purple-600" />
              Data Diri
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Masukkan nama Anda"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nomor WhatsApp</label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="08xx-xxxx-xxxx"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Summary */}
            <div className="mt-6 p-4 bg-purple-50 rounded-xl">
              <h3 className="font-semibold mb-2">Ringkasan Booking</h3>
              <div className="text-sm space-y-1 text-gray-600">
                <p>📅 {selectedDate} • {selectedTime}</p>
                <p>👤 {stylists.find(s => s.id === selectedStylist)?.name}</p>
                <p>✂️ {selectedServices.map(id => services.find(s => s.id === id)?.name).join(', ')}</p>
              </div>
              <div className="mt-3 pt-3 border-t border-purple-200 flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-purple-600">{formatCurrency(totalPrice)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-6">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-6 border-2 border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Kembali
            </button>
          )}
          <button
            onClick={() => {
              if (step < 4) {
                setStep(step + 1)
              } else {
                // Submit booking
                alert('Booking berhasil! Anda akan diarahkan ke halaman konfirmasi.')
                window.location.href = '/booking/thank-you'
              }
            }}
            disabled={
              (step === 1 && selectedServices.length === 0) ||
              (step === 2 && !selectedStylist) ||
              (step === 3 && (!selectedDate || !selectedTime)) ||
              (step === 4 && (!customerName || !customerPhone))
            }
            className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {step === 4 ? 'Konfirmasi Booking' : 'Lanjutkan'}
            {step < 4 && <ChevronRight className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </main>
  )
}
