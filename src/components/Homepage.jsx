import React from 'react'
import { Hero } from './Hero'
import { ReviewSection } from './DevipuramWelcome'
import { Biography } from './Biography'
import { Stats } from './Stats'
import AutoCarouselCard from './AutoCarouselCard'
import TestimonialCarousel from './TestimonialCarousal'
import SriChakraSection from './SriCakraSection'
import BlogCarousel from './BlogCarousel'
import { Footer } from './Footer'
import { Events } from './Events'
import { Courses } from './Courses'
import ImageWithQuoteCard from './GurujiQuoteSection'
import ImageQuoteTextSection from './Dummy'

const Homepage = () => {
  return (
    <div style={{ overflowX: 'hidden' }} className="flex flex-col bg-white max-md:pb-24">
        <Hero />
        <ReviewSection />
        <Biography />
        <Stats />
        <AutoCarouselCard />
        <Events />
        <Courses />
        {/* <ImageQuoteTextSection /> */}

        {/* <ImageWithQuoteCard /> */}
        <TestimonialCarousel />
        <SriChakraSection />
        <BlogCarousel />
        <Footer />
    </div>
  )
}

export default Homepage
