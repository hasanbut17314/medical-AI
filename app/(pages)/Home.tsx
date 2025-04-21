import React from 'react'
import { HeroSection } from '@/components/hero-section'
import { AIChatInterface } from '@/components/chat-interface'
import { SpecialtiesSection } from '@/components/speciality-section'
import { ServicesSection } from '@/components/services-section'
import { StorySection } from '@/components/story-section'
import { HowItWorks } from '@/components/how-it-works'
import { TestimonialsSection } from '@/components/testimonials-section'
import { SpecialistsTeam } from '@/components/specialist-team'
import { ContactForm } from '@/components/contact-form'

const Page = () => {
    return (
        <div>
            <HeroSection />
            <AIChatInterface />
            <SpecialtiesSection />
            <ServicesSection />
            <StorySection />
            <HowItWorks />
            <TestimonialsSection />
            <SpecialistsTeam />
            <ContactForm />
        </div>
    )
}

export default Page