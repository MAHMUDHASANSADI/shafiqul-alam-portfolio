import Navsec from '@/Components/navbar/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'
import Topheader from '@/Components/topHeader/Topheader'
import Footer from '@/Components/footer/Footer'
import Online from '@/Components/news/Online'
import Blog from '@/Components/blog/Blog'

const Recognition = () => {
    return(
     <>
     
    <Head title='Blog' />
    <Topheader />
    <Navsec />
    <Blog/>
    <Footer/>
    </>   
     
    )
}

export default Recognition