import Navsec from '@/Components/navbar/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'
import Topheader from '@/Components/topHeader/Topheader'
import Footer from '@/Components/footer/Footer'
import Online from '@/Components/news/Online'

const Recognition = () => {
    return(
     <>
     
    <Head title='Online' />
    <Topheader />
    <Navsec />
    <Online/>
    <Footer/>
    </>   
     
    )
}

export default Recognition