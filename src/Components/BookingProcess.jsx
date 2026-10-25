
import React, { useState } from 'react'
import Animated from './Animated'
import { bookingSteps, bookingTestimonial } from '../data/data'
import { Star, X } from 'lucide-react'

const BookingProcess = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Booking Details:', formData)
    alert('Your table reservation request has been submitted!')

    setIsBookingOpen(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
    })
  }

  return (
    <>
      <section id="booking-process" className="px-4 md:px-8 mt-44">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-25">

     
          <div className="flex flex-col text-center md:text-left">
            <Animated delay={0.2}>
              <p className="text-orange-500 font-medium uppercase mb-4">
                Table Reservation Process
              </p>
            </Animated>

            <Animated delay={0.2}>
              <h2 className="text-4xl md:text-5xl mb-8">
                Reserve Your Table in three simple steps
              </h2>
            </Animated>

            <Animated>
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-full font-medium transition-all duration-300 w-fit mx-auto md:mx-0 mb-12"
              >
                Book a Table
              </button>
            </Animated>

            <Animated className="flex gap-0.5 mb-6 justify-center md:justify-start">
              {[...Array(bookingTestimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="size-4 fill-orange-500 text-orange-500"
                />
              ))}
            </Animated>

            <Animated delay={0.2}>
              <p className="text-zinc-600 max-w-xs max-md:mx-auto mb-4">
                "{bookingTestimonial.quote}"
              </p>
            </Animated>

            <Animated className="flex items-center justify-center md:justify-start gap-3">
              <img
                src={bookingTestimonial.authorImg}
                alt={bookingTestimonial.authorName}
                className="size-12 rounded-full object-cover"
              />
              <span className="text-lg">
                {bookingTestimonial.authorName}
              </span>
            </Animated>
          </div>

   
          <div className="space-y-14 text-left">
            {bookingSteps.map((step, index) => (
              <Animated
                key={index}
                y={150}
                delay={index * 0.15}
                className="flex items-start gap-9"
              >
                <span className="text-orange-500 font-medium text-lg shrink-0">
                  {step.number}
                </span>

                <div className="flex flex-col">
                  <h3 className="text-xl mb-5">{step.title}</h3>
                  <p className="text-zinc-600">{step.description}</p>
                </div>
              </Animated>
            ))}
          </div>

        </div>
      </section>


      {isBookingOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setIsBookingOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white text-zinc-900 rounded-2xl p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsBookingOpen(false)}
              aria-label="Close booking form"
              className="absolute top-5 right-5 text-zinc-500 hover:text-orange-500 transition"
            >
              <X size={25} />
            </button>

            <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-2">
              Your table awaits
            </p>

            <h2
              id="booking-title"
              className="text-3xl font-bold mb-2"
            >
              Book a Table
            </h2>

            <p className="text-zinc-500 text-sm mb-7">
              Fill in your details to request a reservation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
           
              <div>
                <label htmlFor="booking-name" className="block text-sm font-medium mb-1.5">
                  Full Name
                </label>
                <input
                  id="booking-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                  className="w-full border border-zinc-200 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
                />
              </div>

           
              <div>
                <label htmlFor="booking-email" className="block text-sm font-medium mb-1.5">
                  Email Address
                </label>
                <input
                  id="booking-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="w-full border border-zinc-200 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
                />
              </div>

           
              <div>
                <label htmlFor="booking-phone" className="block text-sm font-medium mb-1.5">
                  Phone Number
                </label>
                <input
                  id="booking-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  required
                  className="w-full border border-zinc-200 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
                />
              </div>

              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-date" className="block text-sm font-medium mb-1.5">
                    Reservation Date
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    name="date"
                    min={new Date().toLocaleDateString('en-CA')}
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full min-w-0 border border-zinc-200 rounded-lg px-3 py-3 outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="booking-time" className="block text-sm font-medium mb-1.5">
                    Reservation Time
                  </label>
                  <input
                    id="booking-time"
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full min-w-0 border border-zinc-200 rounded-lg px-3 py-3 outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              
              <div>
                <label htmlFor="booking-guests" className="block text-sm font-medium mb-1.5">
                  Number of Guests
                </label>
                <select
                  id="booking-guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full border border-zinc-200 rounded-lg px-4 py-3 outline-none focus:border-orange-500 bg-white"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7+">7+ Guests</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 rounded-lg transition duration-300"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default BookingProcess
