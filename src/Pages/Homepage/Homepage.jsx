import React from 'react'
import { Hero } from './Components/Hero'
import { ReviewSection } from './Components/DevipuramWelcome'
import { Biography } from './Components/Biography'
import { Stats } from './Components/Stats'
import AutoCarouselCard from './Components/AutoCarouselCard'
import TestimonialCarousel from './Components/TestimonialCarousal'
import SriChakraSection from './Components/SriCakraSection'
import BlogCarousel from './Components/BlogCarousel'
import { Footer } from './Components/Footer'
import { Events } from './Components/Events'
import { Courses } from './Components/Courses'


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
