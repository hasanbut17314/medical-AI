'use client'

import { useState } from "react";
import { BookingForm } from "@/components/booking-form";
import BookingResult from "@/components/booking-result";
import { BookingForm as IBookingForm } from "@/components/booking-form";

const Booking = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleBooking = (data: IBookingForm) => {
        // Handle the booking data here (e.g., send it to an API or process it)
        console.log("Booking data:", data);
        setSubmitted(true);
    };

    if (submitted) {
        return <BookingResult />;
    }
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#f0f4f8] py-16">
            <div className="flex flex-col items-center justify-center gap-4 px-3">
                <h1 className="lg:text-5xl text-4xl font-bold text-center">Find the <span className="text-[#00a4f4]">Right Doctor</span> Fast</h1>
                <p className="text-center">Tell us your symptoms, and our smart assistant will match you with the best doctor</p>
            </div>
            <div className="mt-8 w-full max-w-5xl rounded-lg bg-white p-8 shadow-lg">
                <BookingForm handleBooking={handleBooking} />
            </div>
        </div>
    );
}

export default Booking;