'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, Mail, Phone, Building, MessageSquare, CheckCircle, XCircle, AlertCircle } from 'lucide-react'

const BookingDashboard = () => {
  const [bookings, setBookings] = useState([])
  const [filter, setFilter] = useState('all') 

  useEffect(() => {
    loadBookings()
  }, [])

  const loadBookings = () => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings') || '[]')
    setBookings(storedBookings.sort((a, b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time)))
  }

  const filterBookings = () => {
    const now = new Date()
    const today = now.toISOString().split('T')[0]

    return bookings.filter(booking => {
      const bookingDateTime = new Date(booking.date + ' ' + booking.time)
      
      switch (filter) {
        case 'today':
          return booking.date === today
        case 'upcoming':
          return bookingDateTime > now
        case 'past':
          return bookingDateTime < now
        default:
          return true
      }
    })
  }

  const updateBookingStatus = (bookingId, newStatus) => {
    const updatedBookings = bookings.map(booking =>
      booking.id === bookingId ? { ...booking, status: newStatus } : booking
    )
    setBookings(updatedBookings)
    localStorage.setItem('bookings', JSON.stringify(updatedBookings))
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-600 bg-green-100'
      case 'cancelled':
        return 'text-red-600 bg-red-100'
      case 'completed':
        return 'text-blue-600 bg-blue-100'
      default:
        return 'text-yellow-600 bg-yellow-100'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle size={16} />
      case 'cancelled':
        return <XCircle size={16} />
      case 'completed':
        return <CheckCircle size={16} />
      default:
        return <AlertCircle size={16} />
    }
  }

  const filteredBookings = filterBookings()

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Dashboard</h1>
        <p className="text-gray-600">Manage your consultation bookings</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Total Bookings</h3>
          <p className="text-3xl font-bold text-gray-900">{bookings.length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Today</h3>
          <p className="text-3xl font-bold text-blue-600">
            {bookings.filter(b => b.date === new Date().toISOString().split('T')[0]).length}
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Upcoming</h3>
          <p className="text-3xl font-bold text-green-600">
            {bookings.filter(b => new Date(b.date + ' ' + b.time) > new Date()).length}
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Completed</h3>
          <p className="text-3xl font-bold text-gray-600">
            {bookings.filter(b => b.status === 'completed').length}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {[
          { key: 'all', label: 'All Bookings' },
          { key: 'today', label: 'Today' },
          { key: 'upcoming', label: 'Upcoming' },
          { key: 'past', label: 'Past' }
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {filteredBookings.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border">
            <Calendar className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-500">No bookings found</p>
          </div>
        ) : (
          filteredBookings.map((booking) => (
            <motion.div
              key={booking.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                      <User className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{booking.name}</h3>
                      <p className="text-gray-600">{booking.company || 'Individual'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${getStatusColor(booking.status)}`}>
                      {getStatusIcon(booking.status)}
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} />
                    <span>{new Date(booking.date).toLocaleDateString('en-US', { 
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={16} />
                    <span>{booking.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail size={16} />
                    <span className="truncate">{booking.email}</span>
                  </div>
                  {booking.phone && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone size={16} />
                      <span>{booking.phone}</span>
                    </div>
                  )}
                </div>

                {booking.message && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MessageSquare size={16} />
                      <span className="font-medium">Message:</span>
                    </div>
                    <p className="text-gray-700 pl-6">{booking.message}</p>
                  </div>
                )}

                {booking.status === 'confirmed' && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateBookingStatus(booking.id, 'completed')}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Mark as Completed
                    </button>
                    <button
                      onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
}

export default BookingDashboard
