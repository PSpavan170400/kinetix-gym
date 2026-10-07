import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStatement } from './components/BrandStatement';
import { Programs } from './components/Programs';
import { Stats } from './components/Stats';
import { Experience } from './components/Experience';
import { Trainers } from './components/Trainers';
import { Membership } from './components/Membership';
import { Facilities } from './components/Facilities';
import { Testimonials } from './components/Testimonials';
import { Schedule } from './components/Schedule';
import { FAQ } from './components/FAQ';
import { LocationContact } from './components/LocationContact';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ClassSession } from './types';

export default function App() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingType, setBookingType] = useState('1-Day Training Pass');
  const [reservedClassData, setReservedClassData] = useState<{
    session: ClassSession;
    day: string;
  } | null>(null);

  const handleOpenBooking = (type: string = '1-Day Training Pass') => {
    setReservedClassData(null);
    setBookingType(type);
    setBookingModalOpen(true);
  };

  const handleReserveClass = (session: ClassSession, day: string) => {
    setReservedClassData({ session, day });
    setBookingType(`Class: ${session.name} (${day})`);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f2f0ea] selection:bg-[#c6ff00] selection:text-black relative bg-grain">
      {/* Cinematic Initializing Preloader */}
      <Preloader onComplete={() => setPreloaderFinished(true)} />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Main Experience */}
      <div className={`transition-opacity duration-1000 ${preloaderFinished ? 'opacity-100' : 'opacity-0'}`}>
        {/* Navigation Bar */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Master Page Sections */}
        <main>
          <Hero onOpenBooking={handleOpenBooking} />
          <BrandStatement />
          <Programs onOpenBooking={handleOpenBooking} />
          <Stats />
          <Experience />
          <Trainers onOpenBooking={handleOpenBooking} />
          <Membership onOpenBooking={handleOpenBooking} />
          <Facilities />
          <Testimonials />
          <Schedule onReserveClass={handleReserveClass} />
          <FAQ />
          <LocationContact />
          <FinalCTA onOpenBooking={() => handleOpenBooking('1-Day Training Pass')} />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Interactive Booking & Reservation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialType={bookingType}
        reservedClass={reservedClassData}
      />
    </div>
  );
}
