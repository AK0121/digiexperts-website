'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import BookingModal from '@/components/BookingModal'

const ScheduleButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-6 text-white">
        <h3 className="text-xl font-semibold mb-4">Book a Free Consultation</h3>
        <p className="mb-4 opacity-90">
          30-minute strategy session to discuss your digital goals
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2"
        >
          <Calendar size={20} />
          Schedule Meeting
        </motion.button>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}

export default ScheduleButton