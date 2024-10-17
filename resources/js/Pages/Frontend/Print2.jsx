import Navsec from '@/Components/navbar/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'
import Topheader from '@/Components/topHeader/Topheader'
import Footer from '@/Components/footer/Footer'
import Print2 from '@/Components/news/Print2'
const Recognition = () => {
    return(
     <>
     
    <Head title='Interview' />
    <Topheader />
    <Navsec />
    <Print2/>
    <Footer/>
    </>   
     
    )
}

export default Recognition