'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, User, Mail, Phone, X, Check, AlertCircle } from 'lucide-react'

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [availableSlots, setAvailableSlots] = useState([])
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingStatus, setBookingStatus] = useState('idle') // idle, success, error

  // Generate next 14 days (excluding weekends)
  const generateAvailableDates = () => {
    const dates = []
    const today = new Date()
    let currentDate = new Date(today)
    currentDate.setDate(today.getDate() + 1) // Start from tomorrow

    while (dates.length < 10) {
      const dayOfWeek = currentDate.getDay()
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude Sunday (0) and Saturday (6)
        dates.push(new Date(currentDate))
      }
      currentDate.setDate(currentDate.getDate() + 1)
    }
    return dates
  }

  // Generate time slots for selected date
  const generateTimeSlots = async (date) => {
    const slots = []
    const startHour = 9 // 9 AM
    const endHour = 17 // 5 PM
    
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute of [0, 30]) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        slots.push(time)
      }
    }

    // Check for existing bookings
    try {
      const existingBookings = await fetchBookingsForDate(date)
      const availableSlots = slots.filter(slot => 
        !existingBookings.some(booking => booking.time === slot)
      )
      setAvailableSlots(availableSlots)
    } catch (error) {
      console.error('Error fetching bookings:', error)
      setAvailableSlots(slots)
    }
  }

  // Fetch existing bookings for a date
  const fetchBookingsForDate = async (date) => {
    const dateStr = date.toISOString().split('T')[0]
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]')
    return bookings.filter(booking => booking.date === dateStr)
  }

  // Handle date selection
  const handleDateSelect = (date) => {
    setSelectedDate(date)
    setSelectedTime('')
    generateTimeSlots(date)
    setStep(2)
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Check for conflicts one more time
      const conflicts = await checkForConflicts(selectedDate, selectedTime)
      
      if (conflicts.length > 0) {
        setBookingStatus('conflict')
        setIsSubmitting(false)
        return
      }

      // Create booking
      const newBooking = {
        id: Date.now().toString(),
        date: selectedDate.toISOString().split('T')[0],
        time: selectedTime,
        ...bookingData,
        status: 'confirmed',
        createdAt: new Date().toISOString()
      }

      // Save to localStorage (in production, use proper database)
      const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]')
      existingBookings.push(newBooking)
      localStorage.setItem('bookings', JSON.stringify(existingBookings))

      // Send email notification (simulate)
      await sendNotification(newBooking)

      setBookingStatus('success')
      setStep(4)
    } catch (error) {
      console.error('Booking error:', error)
      setBookingStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Check for booking conflicts
  const checkForConflicts = async (date, time) => {
    const bookings = await fetchBookingsForDate(date)
    return bookings.filter(booking => booking.time === time)
  }

  // Send notification (simulate email)
  const sendNotification = async (booking) => {
    // In production, integrate with email service (SendGrid, etc.)
    console.log('Sending notification for booking:', booking)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  const resetModal = () => {
    setStep(1)
    setSelectedDate('')
    setSelectedTime('')
    setBookingData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    })
    setBookingStatus('idle')
  }

  const handleClose = () => {
    resetModal()
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">Book Free Consultation</h2>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Step 1: Date Selection */}
          {step === 1 && (
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="text-blue-600" size={20} />
                <h3 className="text-lg font-semibold">Select a Date</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {generateAvailableDates().map((date, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleDateSelect(date)}
                    className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left"
                  >
                    <div className="font-medium">
                      {date.toLocaleDateString('en-US', { weekday: 'short' })}
                    </div>
                    <div className="text-sm text-gray-600">
                      {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Time Selection */}
          {step === 2 && (
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="text-blue-600" size={20} />
                <h3 className="text-lg font-semibold">
                  Select Time - {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </h3>
              </div>

              {availableSlots.length === 0 ? (
                <div className="text-center py-8">
                  <AlertCircle className="mx-auto mb-4 text-yellow-500" size={48} />
                  <p className="text-gray-600">No available slots for this date</p>
                  <button
                    onClick={() => setStep(1)}
                    className="mt-4 text-blue-600 hover:underline"
                  >
                    Choose another date
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mb-6">
                    {availableSlots.map((time) => (
                      <motion.button
                        key={time}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 border-2 rounded-lg transition-all ${
                          selectedTime === time
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        {time}
                      </motion.button>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(1)}
                      className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      disabled={!selectedTime}
                      className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
                    >
                      Continue
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Step 3: Contact Information */}
          {step === 3 && (
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <User className="text-blue-600" size={20} />
                <h3 className="text-lg font-semibold">Your Information</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingData.name}
                      onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={bookingData.email}
                      onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={bookingData.company}
                      onChange={(e) => setBookingData({...bookingData, company: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What would you like to discuss?
                  </label>
                  <textarea
                    rows={4}
                    value={bookingData.message}
                    onChange={(e) => setBookingData({...bookingData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project or goals..."
                  />
                </div>

                {/* Booking Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Booking Summary</h4>
                  <p className="text-sm text-gray-600">
                    Date: {selectedDate.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                  <p className="text-sm text-gray-600">Time: {selectedTime}</p>
                  <p className="text-sm text-gray-600">Duration: 30 minutes</p>
                </div>

                {bookingStatus === 'conflict' && (
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-red-600">
                      <AlertCircle size={20} />
                      <span className="font-medium">Time Conflict</span>
                    </div>
                    <p className="text-red-600 text-sm mt-1">
                      This time slot has been taken by someone else. Please choose another time.
                    </p>
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg disabled:opacity-50 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Booking...
                      </>
                    ) : (
                      'Confirm Booking'
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && bookingStatus === 'success' && (
            <div className="p-6 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Check className="text-green-600" size={32} />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Booking Confirmed!
              </h3>
              
              <p className="text-gray-600 mb-6">
                Your consultation has been scheduled. We've sent a confirmation email with the meeting details.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
                <h4 className="font-medium text-gray-900 mb-2">Meeting Details</h4>
                <p className="text-sm text-gray-600">
                  Date: {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
                <p className="text-sm text-gray-600">Time: {selectedTime}</p>
                <p className="text-sm text-gray-600">Duration: 30 minutes</p>
              </div>
              
              <button
                onClick={handleClose}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:shadow-lg transition-all"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default BookingModal