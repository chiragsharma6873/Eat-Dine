
import React, { useEffect, useState } from 'react'
import { navLinks } from '../data/data'
import { MenuIcon, XIcon } from 'lucide-react'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow =
      mobileOpen || isBookingOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen, isBookingOpen])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleBooking = (e) => {
    e.preventDefault()

    console.log('Reservation Details:', formData)
    alert('Your reservation request has been submitted!')

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

  const openBooking = () => {
    setMobileOpen(false)
    setIsBookingOpen(true)
  }

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 z-30 w-full px-4 md:px-8 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between font-medium py-4 mx-auto max-w-7xl">

          <a href="/">
            <img
              src="/assets/nav-img.png"
              alt="Restaurant Logo"
              className="h-[72px] w-20 object-contain"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-orange-500 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Booking Button */}
          <button
            type="button"
            onClick={openBooking}
            className="hidden md:block bg-orange-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full transition"
          >
            Book a Table
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="md:hidden bg-zinc-800 text-white p-2 rounded-md"
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen
            ? 'visible'
            : 'invisible pointer-events-none'
        }`}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-xl p-8 transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-xl font-bold">Menu</h2>

            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="bg-zinc-800 text-white p-2 rounded-md"
            >
              <XIcon size={22} />
            </button>
          </div>

          <div className="flex flex-col items-start gap-7 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg hover:text-orange-500 transition"
              >
                {link.name}
              </a>
            ))}

            <button
              type="button"
              onClick={openBooking}
              className="w-full bg-orange-500 hover:bg-amber-600 text-white px-5 py-3 rounded-full mt-3"
            >
              Book a Table
            </button>
          </div>
        </div>
      </div>

      {/* Booking Popup Form */}
      {isBookingOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setIsBookingOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="relative bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsBookingOpen(false)}
              aria-label="Close booking form"
              className="absolute top-4 right-5 text-3xl text-zinc-500 hover:text-orange-500"
            >
              &times;
            </button>

            <p className="text-orange-500 uppercase tracking-widest text-sm font-semibold mb-2">
              Table Reservation
            </p>

            <h2 className="text-3xl font-bold text-zinc-900 mb-2">
              Book a Table
            </h2>

            <p className="text-zinc-500 text-sm mb-6">
              Reserve your table for a memorable dining experience.
            </p>

            <form onSubmit={handleBooking} className="space-y-4">

              <div>
                <label htmlFor="booking-name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  id="booking-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-zinc-200 rounded-lg p-3 outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label htmlFor="booking-email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  id="booking-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-zinc-200 rounded-lg p-3 outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label htmlFor="booking-phone" className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  id="booking-phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-zinc-200 rounded-lg p-3 outline-none focus:border-orange-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-date" className="block text-sm font-medium mb-1">
                    Date
                  </label>
                  <input
                    id="booking-date"
                    name="date"
                    type="date"
                    min={new Date().toLocaleDateString('en-CA')}
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full min-w-0 border border-zinc-200 rounded-lg p-3 outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="booking-time" className="block text-sm font-medium mb-1">
                    Time
                  </label>
                  <input
                    id="booking-time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full min-w-0 border border-zinc-200 rounded-lg p-3 outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="booking-guests" className="block text-sm font-medium mb-1">
                  Number of Guests
                </label>
                <select
                  id="booking-guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full border border-zinc-200 rounded-lg p-3 bg-white outline-none focus:border-orange-500"
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
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 rounded-lg transition"
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

export default Navbar
