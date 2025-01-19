import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'}/>

        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>At Lyna Store Luxe, we bring you timeless jewelry crafted with elegance and care. Our curated collection caters to all styles, from statement pieces to everyday designs, ensuring quality and authenticity with every purchase.</p>
            <p>Founded with a passion for fine jewelry, we make luxury accessible through the convenience of e-commerce. Discover unique pieces that reflect sophistication and celebrate your story.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission is to inspire confidence and celebrate individuality through high-quality, timeless jewelry. We are dedicated to providing exceptional craftsmanship, accessible luxury, and a seamless shopping experience, helping our customers express their unique stories with elegance and style.</p>
            </div>
        </div>

        <div className='text-4xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance:</b>
                <p className='text-gray-600'>We ensure every piece meets the highest standards of craftsmanship and authenticity.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p className='text-gray-600'>Shop effortlessly from anywhere with our user-friendly e-commerce platform.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer Service:</b>
                <p className='text-gray-600'>Our team is dedicated to providing personalized support and a seamless shopping experience.</p>
            </div>
        </div>

        <div className='text-4xl py-4'>
            <Title text1={'DEVELOPMENT'} text2={'TEAM'}/>
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Muhammad Nayeem Bin Muhammad (23300658)</b>
                <p className='text-gray-600'>Develops the code base, ensures the application's functionality, and manages the deployment process to make the website live and fully operational.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Syaza Lina Muhammad Ridzwan (23304538)</b>
                <p className='text-gray-600'>Designs and structures the website layout, ensuring it is user-friendly, visually appealing, and fully functional across various devices. Lina also conducts comprehensive testing to verify seamless performance.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Muhammad Afiq Bin Saiful Annuar (23300752)</b>
                <p className='text-gray-600'>Creates detailed reports outlining the project's objectives, processes, and outcomes. Afiq is also responsible for compiling and organizing all necessary documentation and presenting the final report.</p>
            </div>
        </div>

        <NewsletterBox/>
      
    </div>
  )
}

export default About
