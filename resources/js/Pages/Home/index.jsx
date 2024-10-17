import React from 'react'
// import Loader from '../../Components/loader/Loader'

import { Feature } from '../../Components/feature/Feature'
import Course from '../../Components/course/Course'
import Event from '../../Components/event/Event'
import Gallery from '../../Components/gallery/Gallery'
import Counter from '../../Components/counter/Counter'
import Testimonial from '../../Components/testimonial/Testimonial'
import Blog from '../../Components/blog/Blog'
import Contact from '../../Components/contact/Contact'
//import Newsletter from '../../Components/newslwtter/Newsletter'
import Footer from '../../Components/footer/Footer'
import { Head } from '@inertiajs/react'
import Banner from '@/Components/banner/Banner'
import Navbar from '@/Components/navbar/Navbar'
import Topheader from '@/Components/topHeader/Topheader'


function Index() {
  return (
    <>
       <Head
       
       title='Home'
       />
       <Topheader />
       <Navbar />
      <Banner />
      <Feature />
      <Course />
      {/* <Event /> */}
      <Gallery />
      {/* <Testimonial /> */}
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default Index;